import style from './Footer.module.scss';
import Logo from '../Common/Logo/Logo';
import Navbar from '../Common/Navbar/Navbar';
import Address from "../Common/Address/Address";
import Callback from "../Common/Callback/Callback";
import Phone from "../Common/Phone/Phone";
import Schedule from "../Common/Schedule/Schedule";
import Wrapper from '../Common/Wrapper/Wrapper';
import Design from './Design/Design';
function Footer() {
    return ( 
        <div>
            <div className={style.footerFirstWrapp}>
                <div className="container">
                    <div className={style.footerWrapp}>
                            <Logo forHeader={false} spanForHeader={false}/>
                            <Navbar />
                    </div>
                </div>
            </div>
            <div className={style.footerSecondWrapp}>
                <div className="container">
                    <div className={style.footerWrapp}>
                        <Address />
                        <Phone />
                        <Schedule />
                        <Callback />
                    </div>
                </div>
            </div>
            <div className={style.footerThirdWrapp}>
                <div className="container">
                    <div className={style.footerWrapp}>
                        <Design />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Footer;