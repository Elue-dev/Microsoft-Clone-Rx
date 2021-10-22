import React, { Component } from 'react'
import './Footer.scss'

export class Footer extends Component {
    render() {
        return (<>
            <div className='follow'>
                <p>Follow Microsoft</p>
                <a href='#'><img src='https://i.ibb.co/LrVMXNR/social-fb.png' /></a>
                <a href='#'><img src='https://i.ibb.co/vJvbLwm/social-twitter.png' /></a>
                <a href='#'><img src='https://i.ibb.co/b30HMhR/social-linkedin.png' /></a>
            </div>
            <div className='footer'>
                <div className='footer-items'>
                    <div className='footer-col'>
                        <div className='row'>
                            <li>Microsoft Store</li>
                            <li>Account profile</li>
                            <li>Returns</li>
                            <li>Order tracking</li>
                        </div>
                        <div className='row'>
                            <li>Education</li>
                            <li>Office 365 for schools</li>
                        </div>
                        <div className='row'>
                            <li>Enterprise</li>
                            <li>Microsoft Azure</li>
                        </div>
                        <div className='row'>
                            <li>Developer</li>
                            <li>Microsoft Visual Studio</li>
                            <li>Developer Center</li>
                            <li>Channel 9</li>
                            <li>Microsoft 365 Dev Center</li>
                            <li>Microsoft 365 Developer Program</li>
                        </div>
                        <div className='row'>
                            <li>Company</li>
                            <li>Careers</li>
                            <li>About Microsoft</li>
                            <li>Company news</li>
                            <li>Investors</li>
                        </div>
                    </div>
                        <div className='footer-col2'>
                            <div className='left'> <i className="fas fa-globe-europe"></i> English (Nigeria) </div>
                            <div className='right'>
                                <ul>
                                    <li>Contact Microsoft</li>
                                    <li>Privacy</li>
                                    <li>Terms of use</li>
                                    <li>Trademarks</li>
                                    <li>About our ads</li>
                                    <li>&copy; Microsoft 2021</li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
            </>
        )
    }
}

export default Footer
