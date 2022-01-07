import React, {Component} from 'react';
import Layout from '../components/Layout/layout';
import Skill from '../components/Skill/Skill'
import Seo from '../components/SEO.js'
export default class habilidades extends Component{

    render(){

        return(
            <Layout>
                <Seo title="Habilidades" description="muestra de mis habilidades que se como frontend" />
                <Skill />
            </Layout>
        )
    }
}