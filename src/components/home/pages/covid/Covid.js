import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Covid.scss'

export class Covid extends Component {
    render() {
        return (
            <div className='covid'>
                <div className='covid-text'>
                    <h1>Microsoft's response to COVID-19</h1>
                    <p>Read how we’re responding to the COVID-19 outbreak, and get resources to help.</p>
                    <Link to='/'>Learn More <i className="fas fa-greater-than"></i> </Link>
                </div>
            </div>
        )
    }
}

export default Covid
