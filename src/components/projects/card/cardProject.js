import React, {Component} from 'react';
import styles from '../../../css/project.module.css'
import Card from './card'

export default class CardProject extends Component{
    
    state={
        project:this.props.projects.edges
    }
    componentDidMount(){
        this.setState({
            project:this.props.projects.edges,
            
        })
    }
    render(){
        //destructuring
        const {project} = this.state
        return(
            <div className={styles.cardCenter}>
                {
                    project.map(({node})=>{
                        return(
                            <Card  key={node.contentful_id}  project={node} />
                        )
                    })
                }
            </div>
        )
    }

}

