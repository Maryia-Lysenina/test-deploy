import LogoSVG from '../SVG/LogoSVG';
import style from './Logo.module.scss'

function LogoBlock({forHeader, spanForHeader}) {
    return ( 
        <div className={style.logoBlock}>
            <LogoSVG width={24} height={24} 
            firstColor={forHeader ? '#FFFFFF' : '#202223'} 
            secondColor={'#FFFFFF'}/>
            <p className={forHeader ? style.forHeader : style.forFooter}>
                ТЕРРИТОРИЯ 
                <span className={spanForHeader ? style.spanForHeader : style.spanForFooter}>
                    ZOO
                </span>
            </p>

        </div>
     );
}


export default LogoBlock;