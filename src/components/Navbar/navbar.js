import React, {useState} from 'react';
import styles from '../../css/navbar.module.css';
import {FaAlignRight} from 'react-icons/fa';
import links from '../constants/links';
import socialicons from '../constants/socialicons';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

const getLogo = graphql`
query{
    logo:file(relativePath:{eq:"logo1.png"}){
      childImageSharp{
        fixed(width:150 height:40){
            ...GatsbyImageSharpFixed_tracedSVG
        }
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
    const {fixed} =  logo.logo.childImageSharp;

    return(
        <nav className={styles.navbar}>
         <div className={styles.navCenter}>
             <div className={styles.navHeader}>
                 <AniLink to="/" fade >
                {/*<img src={logo1} alt="logo" className={styles.logo}/> */}
                <Img fixed={fixed}  className={styles.logo}/>
                 </AniLink>
                 <button type="button" className={styles.logoBtn} onClick={isOpenToggle} aria-label="boton que permite el menu deslisable">
                     <FaAlignRight className={styles.logoIcon} />
                 </button>
             </div>

            <div className={styles.containerLinks}>
            <ul className={opentogle? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
                {
                 links.map( (link, index) =>{
                     return(
                     <li key={index}>
                         <AniLink 
                         fade
                         to={link.path} 
                         aria-label="Read more about Seminole tax hike"
                         >{link.text}</AniLink>
                     </li>
                     )
                 })
                }
            </ul>
            <div className={styles.linksvacio}>
                        
            </div>
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