import React, { Component } from 'react';
import Layout from '../components/Layout/layout';
import Project from '../components/projects/project'
import Seo from '../components/SEO.js'
export default class proyectos extends Component{

    render(){

        return(
            <Layout>
                <Seo title="Proyectos" description="lista de mis proyectos personales realizados con Html, Css, Javascript y sus respectivos framework, con la finalidad de consolidar mis conocimientos y la meta final ser un frontend developer" />
                <Project />
            </Layout>
        )
    }
} 