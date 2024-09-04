import React from 'react';
import './styles/Info.css';
import { FaMountain, FaHiking, FaMapSigns, FaCampground } from 'react-icons/fa';

function Info() {
    return (
        <div className='info-container'>
            <h1 style={{textAlign:'center',color:'orange'}}>GoTrek</h1>
            <p style={{textAlign:'center',fontSize:'40px'}}>Explore the world one step at a time with GoTrek, your ultimate companion for thrilling trekking adventures. Whether you are a seasoned trekker or a beginner looking to embark on your first journey, we provide all the information, tips, and gear recommendations you need.</p>

            <div className='info-sections_home'>
                <div className='info-section_home'>
                    <FaMountain className='info-icon_home' />
                    <h2>Why Trekking?</h2>
                    <p>Trekking allows you to connect with nature, challenge yourself physically and mentally, and experience breathtaking landscapes. It's more than just a hike; it's an adventure.</p>
                </div>
                <div className='info-section_home'>
                    <FaHiking className='info-icon_home' />
                    <h2>Our Top Trails</h2>
                    <p>Discover some of the best trekking trails around the world. From the majestic Himalayas to the serene trails of Patagonia, find the perfect trail that suits your level and preference.</p>
                </div>
                <div className='info-section_home'>
                    <FaMapSigns className='info-icon_home' />
                    <h2>Trekking Tips</h2>
                    <p>Get expert advice on how to prepare for your trek, what to pack, and how to stay safe on the trails. Our tips will ensure you have a smooth and enjoyable trekking experience.</p>
                </div>
                <div className='info-section_home'>
                    <FaCampground className='info-icon_home' />
                    <h2>Advice</h2>
                    <p>Equip yourself with the right gear for your trek. From durable hiking boots to weather-resistant tents, we recommend the best equipment for all types of terrains and climates.</p>
                </div>
            </div>
        </div>
    );
}

export default Info;
