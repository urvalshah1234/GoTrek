import React from 'react';
import './styles/info2.css';
import { FaRoute, FaBinoculars, FaGlobeAmericas, FaMountain } from 'react-icons/fa';

function Info2() {
    return (
        <div className='info2-container'>
            <h1 style={{textAlign:'center',color:'orange'}}>Unforgettable Trekking Adventures</h1>
            <p>Discover some of the most thrilling and breathtaking trekking adventures in India. These treks offer not only a physical challenge but also an opportunity to experience the incredible beauty of the Himalayas.</p>

            <div className='info2-sections'>
                <div className='info2-section'>
                    <FaRoute className='info2-icon' />
                    <h2>Hamta Pass, Himachal Pradesh</h2>
                    <p>Hamta Pass is a high-altitude trek in the Kullu region of Himachal Pradesh. This trek offers a dramatic landscape shift from the lush green valleys of Kullu to the barren landscape of Lahaul. The trek is known for its beautiful campsites, alpine meadows, and panoramic views of the Pir Panjal Range.</p>
                </div>
                <div className='info2-section'>
                    <FaBinoculars className='info2-icon' />
                    <h2>Triund Trek, Himachal Pradesh</h2>
                    <p>The Triund Trek is a short, scenic trek that takes you to the Triund Hill, which offers stunning views of the Dhauladhar range. It's a perfect trek for beginners, with its relatively easy trail and rewarding views of the snow-capped peaks and the Kangra Valley below.</p>
                </div>
                <div className='info2-section'>
                    <FaGlobeAmericas className='info2-icon' />
                    <h2>Kasol-Sar Pass, Himachal Pradesh</h2>
                    <p>The Kasol-Sar Pass trek is an exhilarating adventure that begins in the picturesque village of Kasol. The trek takes you through dense forests, lush meadows, and across the Sar Pass, which offers breathtaking views of the surrounding peaks. This trek is perfect for those seeking a challenging and scenic journey.</p>
                </div>
                <div className='info2-section'>
                    <FaMountain className='info2-icon' />
                    <h2>Bhrigu Lake, Himachal Pradesh</h2>
                    <p>Bhrigu Lake is a high-altitude glacial lake located near Manali. The trek to Bhrigu Lake is known for its lush green meadows, which resemble the alpine meadows of Switzerland. The lake itself is steeped in mythology, believed to be the meditation site of the sage Bhrigu.</p>
                </div>
            </div>
        </div>
    );
}

export default Info2;
