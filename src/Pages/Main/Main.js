import { useNavigate } from "react-router-dom";
import { BASKET, CATALOG } from "../../Routes/Constants";
import CatalogCard from "./Cards/CatalogCard";
import Address from "../../Components/Common/Address/Address";
import dog from './Cards/Images/dog.png'
import cat from './Cards/Images/cat.png'
import rat from './Cards/Images/rat.png'
import bird from './Cards/Images/bird.png'
import fish from './Cards/Images/fish.png'
import { useEffect } from "react";
import axios from "axios";
import { instance } from "../../API/config";
import {animalsTC} from '../../Redux/Reducers/animalsReducer';
import { useDispatch, useSelector } from "react-redux";
function Main() {
    const navigate = useNavigate()

    const dispatch =useDispatch();
    const pets = [
        {img:dog, name: 'Собаки'},
        {img:cat, name: 'Кошки'},
        {img:rat, name: 'Грызуны'},
        {img:bird, name: 'Птицы'},
        {img:fish, name: 'Рыбки'},
    ]
    useEffect(() => {

        dispatch(animalsTC())
    }, [])
    const animals = useSelector((state) => state.animals.data)
    console.log(animals)
    return ( 
        <div>
            MAIN PAGE
            <button onClick={() => {navigate(CATALOG)}}>Go to the Catalog</button>
            <button onClick={() => {navigate(BASKET)}}>Go to the Basket</button>
            <div >
            {animals.map((item) => 
                <CatalogCard petImg={item.image} petName={item.name} key={item.id}/>
            )}
            </div>
        </div>
     );
}

export default Main;