import { useState } from "react";
import BasketSVG from "../../Common/SVG/Basket";
import style from './Basket.module.scss'

function Basket() {
    const [counter, setCounter] = useState(0);
    const onBtnClick = () => {
        setCounter(counter + 1);
    }
    return ( 
        <div className={style.basketWrapp} onClick={onBtnClick}>
            <BasketSVG width={20} height={20} color={"#5C5F62"}/>
            <p className={style.basketCount}>{counter}</p>
        </div>
     );
}

export default Basket;