import React from 'react';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';
import icon from '../../static/logo.ico'

const getData = graphql`
query{
  site{
    siteMetadata{
      siteTitle:title
      siteDesc:description
      siteUrl
      image
      twitterUsername
      siteUrl
    }
  }
}
`
const Seo =({title, description})=>{
  const {site} = useStaticQuery(getData);
  const { siteDesc, image, siteTitle,twitterUsername,siteUrl} = site.siteMetadata;
    return(
        <Helmet htmlAttributes={{lang:"en"}} title={`${title} | ${siteTitle}`}> 
          <meta name="description" content={description || siteDesc}></meta>
          <link rel="icon" href={icon} />
          <meta name="image" content={image}/>

           {/*fascebook card*/}
           <meta property="og:url" content={siteUrl}/>
           <meta property="og:type" content="website" />
           <meta property="og:title" content={siteTitle} />
           <meta property="og:description" content={description} />
           <meta property="og:img" content={`${siteUrl}${image}`} />
           <meta property="og:image:width" content="400" />
           <meta property="og:image:height" content="300" />

           {/*twitter*/ }
           <meta name="twitter:card" content="summary_large_image" />
           <meta name="twitter:creator" content={twitterUsername}/>
           <meta name="twitter:title" content={siteTitle} />
           <meta name="twitter:description" content={description} />
           <meta name="twitter:image" content={`${siteUrl}${image}`} /> 
        </Helmet>
    )
}

export default Seo