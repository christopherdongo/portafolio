import React, { Component } from 'react';
import Layout from '../components/Layout/layout';
import Project from '../components/projects/project'
import Seo from '../components/SEO.js'
export default class proyectos extends Component{

    render(){

        return(
            <Layout>
                <Seo title="Proyectos" description="this is description" />
                <Project />
            </Layout>
        )
    }
} 