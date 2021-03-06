import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Offers.scss'

export class Offers extends Component {
    render() {
        const offersList = this.props.data.map((data, i) => {
            return(
                <Link to={`${data.address}`}>
                    <div className='offer' key= {i}>
                        <img className='image' src= {data.image} />
                        <h3> {data.title} </h3>
                        <p> {data.text} </p>
                        <div><Link to='/' className='sublink'> {data.link1} <i className="fas fa-greater-than"></i> </Link></div>
                        <div><Link to='/' className='sublink'> {data.link2} </Link></div>
                    </div>
                </Link>
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
