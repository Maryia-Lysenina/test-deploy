import React, { useState, useEffect } from 'react';
import Geo from '../SVG/Geo';
import style from './Address.module.scss'
function Address() {
    return ( 
        <div className={style.addressWrapp}>
            <Geo width={16} height={16} color={'#8c9196'}/>
            
            <p className={style.addressText}>Минск, ул. Чюрлёниса, 6.</p>
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3301_2110)">
            <path d="M16.7616 10.4535L12.5568 0.129883L9 6.16481L5.4576 0.129883L1.2384 10.4535H0V12.0181H6.3648V10.4535H5.4144L6.336 7.88308L9 12.1299L11.664 7.88308L12.5856 10.4535H11.6352V12.0181H18V10.4535H16.7616Z" fill="#D72C0D"/>
            </g>
            <defs>
            <clipPath id="clip0_3301_2110">
            <rect width="18" height="12" fill="white" transform="translate(0 0.129883)"/>
            </clipPath>
            </defs>
            </svg>
            <p className={style.addressMetro}>Малиновка</p>
        </div>
     );
}

export default Address;