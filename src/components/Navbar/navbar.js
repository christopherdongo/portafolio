import React, {useState} from 'react';
import styles from '../../css/navbar.module.css'
import logo1 from '../../images/logo1.png'
import {FaAlignRight} from 'react-icons/fa'
import links from '../constants/links'
import socialicons from '../constants/socialicons'
import AniLink from "gatsby-plugin-transition-link/AniLink";
const Nabvar=()=>{

    const [opentogle, setOpenTogle] = useState(false)
    //funcion toggle
    const isOpenToggle=()=>{
        setOpenTogle( opentogle => !opentogle)
    }
     console.log(opentogle)
    return(
        <nav className={styles.navbar}>
         <div className={styles.navCenter}>
             <div className={styles.navHeader}>
                 <img src={logo1} alt="logo" className={styles.logo}/>
                 <button type="button" className={styles.logoBtn} onClick={isOpenToggle}>
                     <FaAlignRight className={styles.logoIcon} />
                 </button>
             </div>

            <ul className={opentogle? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
                {
                 links.map( (link, index) =>{
                     return(
                     <li key={index}>
                         <AniLink 
                         
                         cover 
                         direction="left"
  duration={1}
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
                         
                         >{link.text}</AniLink>
                     </li>
                     )
                 })
                }
            </ul>

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