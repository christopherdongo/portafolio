import React, {useState} from 'react';
import * as styles from '../../css/navbar.module.css';
import {FaAlignRight} from 'react-icons/fa';
import links from '../constants/links';
import socialicons from '../constants/socialicons';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {graphql, useStaticQuery, Link} from 'gatsby';


const getLogo = graphql`
query{
    logo:file(relativePath:{eq:"logo1.png"}){
      childImageSharp{
       gatsbyImageData(width:150 height:40 quality:100 pngOptions:{})
      }
    }
    }
`

const Nabvar=()=>{
    const [opentogle, setOpenTogle] = useState(false)

    //funcion toggle
    const isOpenToggle=()=>{
        setOpenTogle( opentogle => !opentogle)
    }

    //logo
    const logo = useStaticQuery(getLogo)
    const Image = getImage(logo.logo)
 
    return(
        <nav className={styles.navbar}>
         <div className={styles.navCenter}>
             <div className={styles.navHeader}>
             <Link to='/'   activeStyle={{ color: 'hsl(205, 77%, 27%)' }}> 
             <GatsbyImage image={Image} alt="imagen del logo"  className={styles.logo} />
             </Link>
                 <button type="button" className={styles.logoBtn} onClick={isOpenToggle} aria-label="boton toggle">
                     <FaAlignRight className={styles.logoIcon} />
                 </button>
             </div>

            <div className={styles.containerLinks}>
            <ul className={opentogle? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
             
                {
                 links.map( (link, index) =>{
                     return(
                     <li key={index}
                     
                     >
                        <Link to={link.path}   activeStyle={{ color: 'hsl(205, 77%, 27%)' }}> {link.text} </Link>
                     </li>
                     )
                 })
                }
            </ul>
            </div>
            <div className={styles.navSocialLinks}>
                {socialicons.map( (icons, index)=>{
                    return(
                    <a key={index} href={icons.url} target="_blank" rel="noreferrer">{icons.icon}</a>
                    )
                })}
            </div>
         </div>
        </nav>
    )
} 

export default Nabvar

/*
                        <Link to={link.path}   activeStyle={{ color: 'hsl(205, 77%, 27%)' }}> {link.text} </Link>
*/