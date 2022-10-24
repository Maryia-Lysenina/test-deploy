import style from './CatalogCard.module.scss'

const CatalogCard = ({petImg, petName}) => {
    return ( 
        <div className={style.catalogCard}>
            <div className={style.imgCard}>
                <img src={petImg} alt={petName}/>
            </div>
            <p>{petName}</p>
        </div>
     );
}
 
export default CatalogCard;