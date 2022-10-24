import style from './Design.module.scss'

const Design = () => {
    return ( 
    <div className={style.designWrapp}>
        <div>Дизайн сайта: 
            <a target='blank' href='https://shkuratovdesigner.com'> shkuratovdesigner.com</a>
        </div>
        <div>© Все права защищены 2022</div>
    </div> 
    );
}
 
export default Design;