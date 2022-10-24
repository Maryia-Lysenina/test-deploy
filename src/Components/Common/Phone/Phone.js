import PhoneSVG from '../SVG/PhoneSVG';
import style from './Phone.module.scss'

function Phone() {
    return ( 
        <div className={style.phoneWrapp}>
            <PhoneSVG />
            <p className={style.phoneText}>+ 375 (44) 501 03 55</p>
        </div>
     );
}

export default Phone;