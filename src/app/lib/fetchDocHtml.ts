import sanitizeHtml from 'sanitize-html';

const ALLOWED_TAGS = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'p', 'br', 'hr',
  'ul', 'ol', 'li',
  'strong', 'b', 'em', 'i', 'u', 's', 'del',
  'a',
  'blockquote', 'pre', 'code',
  'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'img',
  'div', 'span',
];

// Google's published-to-web HTML injects boilerplate blocks into the body:
// - "Published using Google Docs" + "Report abuse" attribution
// - The document title + "Updated automatically every 5 minutes" metadata
// These are reliably identified by their text content, so we use
// exclusiveFilter to drop any node whose text contains these known strings.
const GOOGLE_BOILERPLATE = [
  'Published using Google Docs',
  'Report abuse',
  'Updated automatically every 5 minutes',
  'Learn more',
];

export async function fetchDocHtml(docUrl: string): Promise<string> {
  const res = await fetch(docUrl, { next: { revalidate: 300 } });

  if (!res.ok) {
    throw new Error(`Failed to fetch Google Doc: ${res.status} ${res.statusText}`);
  }

  const html = await res.text();

  // Extract content between <body> tags to discard Google's <head> and wrapper scripts
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : html;

  return sanitizeHtml(bodyHtml, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: {
      a: ['href', 'target', 'rel'],
      img: ['src', 'alt', 'width', 'height'],
    },
    // Strip all class/style/id from Google's markup so our CSS controls styling
    allowedClasses: {},
    exclusiveFilter: (frame) => {
      const text = frame.text.trim();
      return GOOGLE_BOILERPLATE.some((phrase) => text.includes(phrase));
    },
  });
}
