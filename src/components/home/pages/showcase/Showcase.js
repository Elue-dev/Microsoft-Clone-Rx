import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Showcase.scss'

export class Showcase extends Component {
    render() {
        return (
            <div className='showcase'>
                <div className='showcase-text'>
                    <Link to='/'>
                        <button className='new'>New</button>
                        <h2>Designed for life today—and tomorrow</h2>
                        <p>The next-generation of games. Your goals. Friends and family.
                            Windows 11 was made to bring you close to everything you love.
                        </p>
                        <button className='pc'><h5>See if your PC is ready <i className="fas fa-greater-than"></i></h5></button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Showcase
