import React, {Component} from 'react';
import Layout from '../components/Layout/layout'
import Contact from '../components/contact/contact'
import Seo from '../components/SEO.js'
export default class contact extends Component{

    render(){

        return(
            <Layout>
                <Seo title="Contacto" description="this is description" />
                <Contact />
            </Layout>
        )
    }
} 

