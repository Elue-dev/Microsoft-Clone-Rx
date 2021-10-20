import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Outlook.scss'

export class Outlook extends Component {
    render() {
        return (
            <div>
                <Link to='/'>
                    <div className='outlook'>
                        <div className='outlook-text'>
                            <h2>Outlook for iOS and Android</h2>
                            <p>Connect. Organize. Get things done.</p>
                            <button><h5>Download Now <i className="fas fa-greater-than"></i></h5></button>
                        </div>
                    </div>
                </Link>   
            </div>
        )
    }
}

export default Outlook
