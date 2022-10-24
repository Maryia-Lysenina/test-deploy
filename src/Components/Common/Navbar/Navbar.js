import style from './Navbar.module.scss'

function Navbar() {
    return ( 
        <div className={style.navbar}>
            <p>Главная</p>
            <p>Каталог</p>
            <p>Акции</p>
            <p>Статьи</p>
        </div>
     );
}

export default Navbar;