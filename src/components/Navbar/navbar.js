import React, {useState} from 'react';
import * as styles from '../../css/navbar.module.css';
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
                 <AniLink to="/" swipe 
                 direction="left"
                 duration={1.1}
                 hex="#663399">
                <Img fixed={fixed}  className={styles.logo}/>
                 </AniLink>
                 <button type="button" className={styles.logoBtn} onClick={isOpenToggle} aria-label="boton toggle">
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
                         swipe
                         direction="left"
                         duration={1.1}
                         bg="
                           url(https://source.unsplash.com/random)
                           center / cover   /* position / size */
                           no-repeat        /* repeat */
                           fixed            /* attachment */
                           padding-box      /* origin */
                           content-box      /* clip */
                           white            /* color */
                         "
                         to={link.path} 
                         aria-label="Read more about Seminole tax hike"
                         >{link.text}</AniLink>
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