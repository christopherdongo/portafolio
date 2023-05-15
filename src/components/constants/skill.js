import React from "react"

import Bootstrap from "../../assets/bootstrap.inline.svg";
import Css3 from "../../assets/css.inline.svg";
import Html5 from "../../assets/html.inline..svg";
import Javascript from "../../assets/javascript.inline.svg";
import Mongodb from "../../assets/mongodb.inline.svg";
import Nodejs from "../../assets/nodejs.inline.svg";
import ReactSVG from "../../assets/react.inline.svg";
import Sass from "../../assets/sass.inline.svg";
import Pug from "../../assets/pug.inline.svg";
import Gatsby from "../../assets/gatsby.inline.svg";
import Gulp from "../../assets/gulp.inline.svg";
import ReactRouter from '../../assets/reactrouter.inline.svg';
import Tailwindcss from '../../assets/tailwindcss.inline.svg';
import GraphQL from '../../assets/graphql.inline.svg';
import Contentfull from '../../assets/contentfull.inline.svg';
import StyledComponents from '../../assets/styled.inline.svg';
import Github from '../../assets/github.inline.svg';
import Linux from '../../assets/linux.inline.svg';
import Bash from '../../assets/bash.inline.svg'
import Google from '../../assets/google_cloud.inline.svg'


const skill = [
  {
    name: "Javascript",
    icon: <Javascript />,
    text: "Mi lenguaje de programacion preferido",
    tech:"Javascript"
  },
  {
    name: "Css",
    icon: <Css3 />,
    text:"Me permite brindar color vida a mis proyectos",
    tech:"CSS"
  },
  {
    name: "Html5",
    icon: <Html5 />,
    text:"sin duda es el esqueleto de una pagina web, permite estructurar, maquetar un sitio web",
    tech:"Html5"
  },
  {
    name: "Pug",
    icon: <Pug />,
    text:"Me permite escribir HTML de manera rapida y no estar preocupado por cerrar las etiquetas",
    tech:"Pug"
  },
  {
    name: "ReactJS",
    icon: <ReactSVG />,
    text:"Libreria escrita en javascript me gusta la facilidad de reutilizacion de los componentes",
    tech:"React JS"
  },
  {
    name: "Gatsby",
    icon: <Gatsby />,
    text:"permite crear sitios web staticos de una manera rapida y sencilla",
    tech: "Gatsby"
  },
  {
    name: "MongoDB",
    icon: <Mongodb />,
    text:"Es una base de datos muy rapido de aprender y esta basado en documentos",
    tech:"MongoDB"
  },
  {
    name: "NodeJS",
    icon: <Nodejs />,
    text:"Permite utilizar javascript del lado del servidor, es muy eficiente en las REST-API",
    tech:"Node JS"
  },
  {
    name: "Bootstrap4",
    icon: <Bootstrap />,
    text:"Framework de CSS que ayuda y brinda facilidad en el desarrollo web.",
    tech:"Bootstrap 4"
  },
  {
    name: "Styled Components",
    icon: <StyledComponents />,
    text:"liberia basado en javascript permite crear componentes y dar estilo al mismo tiempo.",
    tech:"Styled Components"
  },
  {
    name: "Sass",
    icon: <Sass />,
    text:"es un preprocesador css que me permite escribir menos codigo y ahora tiempo en el desarrollo",
    tech:"Sass"
  },
  {
    name: "Gulp",
    icon: <Gulp />,
    text:"es una herramienta, que Me permite automatizar tareas a la hora de realizar mis desarrollos",
    tech:"Gulp"
  },
  {
    name: "Github",
    icon: <Github />,
    text:"Me permite llevar un control de versiones de mis desarrollos",
    tech:"Github"
  },
  {
    name: "Linux",
    icon: <Linux />,
    text:"Mi sistema operativo preferido me considero un linuxero!!",
    tech:"Linux"
  },
  {
    name:"Bash",
    icon:<Bash />,
    text:"Es lo bueno de linux permite automatizar tareas, y para estos casos se utiliza Bash",
    tech:"Bash"
  },
  {
    name:"ReactRouter",
    icon:<ReactRouter />,
    text:"",
    tech:"React Router"
  },
  {
   name:"Tailwindcss",
   icon:<Tailwindcss />,
   text:"",
   tech:"Tailwind CSS"
  },
  {
    name:"GraphQL",
    icon:<GraphQL />,
    text:"",
    tech:"GraphQL"
  },
  {
    name:"Contentfull",
    icon:<Contentfull />,
    text:"",
    tech:"Contentfull"
  },
  {
    name:"Google Cloud Platform",
    icon:<Google />,
    text:"Me permite utilizar muchos servicios para probar mis desarrollos como cloud run, app engine, etc",
    tech:"Google Cloud Platform"
  }
]

export default skill;