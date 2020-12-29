import React from 'react';
import styles from '../../css/footer.module.css'
import socialicons from '../constants/socialicons'
const Footer =()=>{
    return(
        <footer className={styles.footer}>
            <div className={styles.footerCenter}>
                <div className={styles.name}>
                    <h1>Christopher Dongo Huarancca 2020 <span>&copy;</span></h1>
                </div>
                <div className={styles.containericons}>
                        {socialicons.map((icons, index)=>{
                            return(
                                <a key={index} href={icons.url} target="_blank" rel="noreferrer">{icons.icon}</a>
                            )
                        })}
                </div>
            </div>
        </footer>
    )
}

export default Footer