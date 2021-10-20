import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Offers.scss'

export class Offers extends Component {
    render() {
        const offersList = this.props.data.map((data, i) => {
            return(
                <div>
                    <img src= {data.image} />
                    <h3> {data.title} </h3>
                    <p> {data.text} </p>
                    <div> <Link to='/'> {data.link1} </Link> </div>
                    <div> <Link to='/'> {data.link2} </Link> </div>
                </div>
            )
        })
        return (
            <div className='offers'>
                <div className='offers-grid'>
                    {offersList}
                </div>
            </div>
        )
    }
}

export default Offers
