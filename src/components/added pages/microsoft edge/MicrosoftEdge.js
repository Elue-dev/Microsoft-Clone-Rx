import React, { Component } from 'react'
import edgeData from './edgeData'
import './MicrosoftEdge.scss'

export class MicrosoftEdge extends Component {
    render() {
        const dataList = edgeData.map((edge, i) => {
            return(
                <div key ={i}>
                    <img src={edge.image} />
                    <h3> {edge.title} </h3>
                    <p> {edge.text} </p>
                    <a href='#' className={edge.btnClass}> {edge.desc} </a>
                </div>
            )
        })
        return (
            <div className='microsoft-edge'>
                <div className='hero'>
                    <div className='edge-content'>
                        <p>Choose the web browser that puts you first</p>
                        <p>Microsoft Edge is the fast and secure browser that helps you 
                            protect your data and save time and money.</p>
                        <div className='button'>
                            <button className=' btn btn1'>DOWNLOAD EDGE  <i className="fas fa-greater-than"></i></button>
                            <button className=' btn btn2'>START MICROSOFT EDGE  <i className="fas fa-greater-than"></i></button>
                        </div>
                    </div>
                </div>
                <div className='browse'>
                    <h1>Browse with Microsoft Edge across devices</h1>
                    <p>Microsoft Edge is available on supported versions of Windows, macOS, iOS, and Android.</p>
                </div>

                <div className='edge-grid'>
                    {dataList}
                </div>
            </div>
        )
    }
}

export default MicrosoftEdge
