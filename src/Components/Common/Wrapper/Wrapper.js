import style from './Wrapper.module.scss'

function Wrapper({children}) {
    return ( 
        <div className={style.wrapper}>
            {children}
        </div>
     );
}

export default Wrapper;