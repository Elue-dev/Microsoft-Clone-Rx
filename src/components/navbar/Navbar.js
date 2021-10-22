import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

export class Navbar extends Component {

    handleDropdown = () => {
        document.querySelector('.nav-dropdown').classList.toggle('active');
    }
    
    render() {
        return (
            <div className='navbar'>
                <div className='flex'>
                    <div className='nav-left'>
                        <div className='logo'>
                                <Link to='/'><img src='micrologoo.png'/></Link>
                        </div>
                        <ul>
                            <li><Link to='/'>Microsoft 365</Link></li>
                            <li><Link to='/'>Office</Link></li>
                            <li><Link to='/'>Windows</Link></li>
                            <li><Link to='/'>Xbox</Link></li>
                            <li><Link to='/'>Support</Link></li>
                        </ul>
                    </div>

                    <div className='nav-right'>
                        <li id='drop' onClick={this.handleDropdown}><Link to='/'>All Microsoft<i className="fas fa-angle-down"></i></Link></li>
                        <div>
                            <Link to ='/'><i className="fas fa-search"></i></Link>
                            <Link to ='/'><i className="fas fa-shopping-cart"></i></Link>
                            <Link to ='/'><i className="far fa-user-circle"></i></Link>
                        </div>
                    </div>
                </div>
                <div className='nav-dropdown'>
                    <div className='nav-wrapper'>
                        <div className='row1'>
                            <li>Software</li>
                            <li>Windows Apps</li>
                            <li>OneDrive</li>
                            <li>Outlook</li>
                            <li>Skype</li>
                            <li>OneNote</li>
                            <li>Microsoft Teams</li>
                        </div>
                        <div className='row2'>
                            <li>PCs & Devices</li>
                            <li>Shop Xbox</li>
                            <li>Accesories</li>
                        </div>
                        <div className='row3'>
                            <li>Entertainment</li>
                            <li>PC Games</li>
                            <li>Windows digital games</li>
                        </div>
                        <div className='row4'>
                            <li>Business</li>
                            <li>Microsoft Cloud</li>
                            <li>Microsoft Azure</li>
                            <li>Microsoft Dyanamic 365</li>
                            <li>Microsoft 365</li>
                            <li>Windows 365</li>
                            <li>Microsoft Industry</li>
                        </div>
                        <div className='row5'>
                            <li>Developer & IT</li>
                            <li>.NET</li>
                            <li>Visual Studio</li>
                            <li>Windows Server</li>
                            <li>Windows Dev Center</li>
                            <li>Docs</li>
                            <li>Power Platform</li>
                            <li>Power Apps</li>
                        </div>
                        <div className='row6'>
                            <li>Other</li>
                            <li>Free download & Security</li>
                            <li>Education</li>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
