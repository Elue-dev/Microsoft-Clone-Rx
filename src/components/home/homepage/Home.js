import React, { Component } from 'react'
import Business from '../pages/business/Business'
import Offers from '../pages/offers/Offers'
import offersData from '../pages/offers/offersData'
import Outlook from '../pages/outlook/Outlook'
import Showcase from '../pages/showcase/Showcase'
import businessData from '../pages/business/businessData'
import Covid from '../pages/covid/Covid'

export class Home extends Component {
    render() {
        return (<>
                 <Showcase />
                 <Offers data= {offersData} />
                 <Outlook />
                 <Business data= {businessData}/>
                 <Covid/>
            </>
        )
    }
}

export default Home
