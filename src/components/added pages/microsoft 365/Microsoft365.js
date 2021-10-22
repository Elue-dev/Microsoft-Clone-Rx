import React, { Component } from 'react'
import './Microsoft365.scss'

export class Microsoft365 extends Component {
    render() {
        return (
            <div className='micro365'>
                <div className='hero'>
                    <div className='hero-text'>
                        <p>Powerful apps for productivity, <br/> connection and security</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='box-items'>
                        <div className='left'>
                            <h1>Microsoft 365 Family</h1>
                            <p>Microsoft Corporation‬</p>
                            <p>One convenient subscription for up to 6 people. Includes premium Office apps, up to 6TB of cloud storage
                                 – 1 TB per person – and advanced security for all your devices.</p>
                            <p>With Microsoft 365 Family you and the people you share with can:</p>
                            <ul>
                                <li>Access smart assistance features, plus hundreds of premium templates, 
                                    photos, icons, and fonts in Word, Excel, and PowerPoint</li>
                                <li>Save and share files and photos across devices with OneDrive</li>
                                <li>Experience advanced security protection in OneDrive and Outlook</li>
                                <li> Set location alerts in the Microsoft Family Safety mobile app*</li>
                                <li>Each person can use the subscription on up to 5 devices at the same time</li>
                                <li>Contact support via chat or phone at no extra cost throughout your subscription</li>
                            </ul>
                            <p>*App available for free. Availability varies by operating platform and market.
                                 Visit http://microsoft365.com/information for more information.</p>
                        </div>
                        <div className='right'>
                            <h3>₦36,999.00/year</h3>
                            <div><button>Buy and download</button></div>
                            <div className='or'>OR</div>
                            <div><button>Buy now ₦36,999.00/month </button></div>
                            <p>Subscription automatically renews</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Microsoft365
