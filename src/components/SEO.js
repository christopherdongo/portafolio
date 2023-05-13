import React from 'react';
import {Helmet} from 'react-helmet';
import PropTypes from "prop-types"
import {StaticQuery,graphql} from 'gatsby';
import icon from '../assets/images/logo.ico'


const Seo =({title, description,postData, postImage,frontmatter = {} }) => (
  <StaticQuery 
  query={graphql`
{
    site{
      siteMetadata{
        siteTitle:title
        siteDesc:description
        siteUrl
        image
        twitterUsername
        siteUrl
        author
      }
    }
  }
  `}

  render={({site:{siteMetadata:seo}}) => {

    console.log(frontmatter )

    const postMeta = frontmatter || postData.childMarkdownRemark.frontmatter || {};
    const siteDesc = postMeta.siteDesc || seo.siteDesc;
    const siteTitle = postMeta.siteTitle || seo.siteTitle;
    const siteUrl = postMeta.siteUrl || seo.siteUrl;
    const image = postImage ? `${seo.siteUrl}${postImage}` : seo.image;
    const twitterUsername = seo.twitterUsername;
    const author = seo.author;
    return(
      <>
        <Helmet htmlAttributes={{lang:"en"}} title={`${title} | ${siteTitle}`}> 
          <meta name="description" content={description || siteDesc}></meta>
          <link rel="icon" href={icon} />
          <meta name="image" content={image}/>
          <meta property="og:author" content={author}/>
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

        </>
    )
   }
}

    />
);

Seo.defaultProps ={
  lang:`en`,
  meta:[],
}

Seo.propTypes = {
  lang:PropTypes.string,
  title:PropTypes.string,
  description:PropTypes.string,
  postImage:PropTypes.string,
}

export default Seo