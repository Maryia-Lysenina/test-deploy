import Address from "../Common/Address/Address";
import Callback from "../Common/Callback/Callback";
import LogoBlock from "../Common/Logo/Logo";
import Navbar from "../Common/Navbar/Navbar";
import Phone from "../Common/Phone/Phone";
import Schedule from "../Common/Schedule/Schedule";
import Insta from "../Common/SVG/Insta";
import Wrapper from "../Common/Wrapper/Wrapper";
import SearchInput from "../SearchInput/SearchInput";
import Basket from "./Basket/Basket";
import style from './Header.module.scss'

function Header() {
    return ( 
       <div>
            
            <div className={style.headerFirstWrapp}>   
                <div className="container">
                    <div className={style.headerWrapp}>
                        <Address />
                        <Schedule />
                        <Phone />
                        <Insta />
                        <Callback />
                    </div>
                </div>       
            </div>
            <div className={style.headerSecondWrapp}>
                <div className="container">
                    <div className={style.headerWrapp}>
                        <LogoBlock forHeader={true} spanForHeader={true}/>
                        <SearchInput />
                        <Navbar />
                        <Basket />
                    </div>
                </div>
            </div>
            
       </div> 
     );
}

export default Header;