import React from 'react'
import Carousel from 'styled-components-carousel';
import Img from 'gatsby-image' 
import styles from "../../css/tenplate.module.css"

const Example = ({Projectimages}) => (
    <Carousel
        slidesToShow={1}
        centerPadding={30}
        breakpoints={[
            {
                size: 200,
                settings: {
                    slidesToShow: 1,
                    showArrows: true,
                    showIndicator: true,
                    swipeable: true,
                    infinite: true,
                },
            }
        ]}
        
    >
     {
         Projectimages.map((item, index) => (
            <div key={index} className={styles.Carousel}>
                <Img fluid={item.fluid} alt="nombre de las imagenes"  className={styles.imagen}/>
            </div>
          ))
     }
    </Carousel>
);

export default Example