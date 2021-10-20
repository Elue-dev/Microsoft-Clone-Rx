import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Business.scss'

export class Business extends Component {
    render() {
        const businessList = this.props.data.map((data, i) => {
            return(
                <div key= {i}>
                    <img src= {data.image} />
                    <h3> {data.title} </h3>
                    <p> {data.text} </p>
                    <div><Link to='/'> {data.link1} <i className="fas fa-greater-than"></i> </Link></div>
                    <div><Link to='/'> {data.link2}  </Link></div>
                </div>
            )
        })

        return (
            <div className='business'>
                <div className='business-grid'>
                 {businessList}
                </div>
            </div>
        )
    }
}

export default Business
