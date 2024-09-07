import React from 'react'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Info from './info'
import Info2 from './info2'
import Carousel from './Carousel'
import './styles/Layout.css'
import Footer from './Footer'
import Trekking from './Trekking'
import People from './people_love'
import Weekend from './Weekend'
import Special from './Special_event'
function Layout()
{
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component is mounted
      }, []);
    return(
        <>
            <div className='layout-container'>
                <Navbar />
                <br/>
                <br/>
                <br/>
                <Carousel />
                <br/>
                <Info />
                <Trekking />
                <Info2/>
                <Weekend/>
                <Special />
                <People />                
                <Footer />
            </div>
        </>
    )
}
export default Layout