import React, { Component } from "react"
import styles from "./index.module.css"

class Origamis extends Component{
    constructor(props) {
        super(props)
        this.state = {
            origamis:[]
        }
    }
    getOrigamis = async() =>{
        const promise = await fetch (`http://localhost:9999/api/origami`)
        const origamis = await promise.json()
        this.setState({origamis})
    }
    componentDidMount(){
        this.getOrigamis()
    }

    render(){
        return(
            <div className={styles.container}>
                <h1 className={styles.title}> Origamis</h1>
                <div></div>
            </div>
        )
    }
}

export default Origamis