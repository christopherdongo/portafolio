import React, {Component} from 'react';
import Layout from '../components/Layout/layout';
import Skill from '../components/Skill/skill'
import Seo from '../components/SEO.js'
export default class habilidades extends Component{

    render(){

        return(
            <Layout>
                <Seo title="Habilidades" description="this is description" />
                <Skill />
            </Layout>
        )
    }
}