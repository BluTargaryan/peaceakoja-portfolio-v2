
import JavaScript from '../../../public/js.png'
import HTML from '../../../public/html.png'
import CSS from '../../../public/css.png'
import React from '../../../public/react.png'
import TypeScript from '../../../public/ts.png'
import Figma from '../../../public/figma.png'

import PortCharEd from '../../../public/port char at work 1.png'
import PortCharExp from '../../../public/port char at work 2.png'

export const aboutMe = [
        {
          topic:'Education',
          color: 'bg-selfLightBlue',
          reversed:false,
          imgSrc: PortCharEd,
          roles:[
              {title:"Masters in Computer Science", location:"Coventry University", dateRange:"(2023 - 2024)"},
              {title:"Bachelors in Computer Science", location:"Redeemer's University", dateRange:"(2016 - 2020)"},
              {title:"IBM Frontend Developer Professional Certificate", location:"Coursera", dateRange:"(2024)"},
          ]
        },
        {
          topic:'Experience',
          color: 'bg-selfBlue',
          reversed:true,
          imgSrc: PortCharExp,
          roles:[
              {title:"Frontend Developer", location:"TheITApprentice", dateRange:"(2024 -)"},
              {title:"Web Developer", location:" RCCG HolyGhostZone Coventry", dateRange:"(2023 -)"},
              {title:"Web Designer / Developer", location:"Freelance", dateRange:"(2022)"},
          ]
        },
    ]

    export const toolkit = [
      {
        tool:'HTML',
        img: HTML,
      },
      {
        tool:'CSS',
        img: CSS,
      },
      {
        tool:'JavaScript',
        img: JavaScript,
      },
      {
        tool:'TypeScript',
        img: TypeScript,
      },
      {
        tool:'React',
        img: React,
      },
      {
        tool:'Figma',
        img: Figma,
      },
    
  ]
