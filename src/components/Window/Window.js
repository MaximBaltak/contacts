import React from 'react';
import styles from './Window.module.scss'
const Window = ({close,name,nameChange,phoneChange,Phone,add,valueChange,toChange}) => {
    return (
        <div className={styles.window}>
            <button onClick={close} className={styles.close} >закрыть</button>
            <label htmlFor="1">Имя</label>
            <input value={name} onChange={e=>nameChange(e.target.value)}  placeholder='Имя' className={styles.input} type="text" id='1' required/>
            <label htmlFor="2">Телефон</label>
            <input value={Phone} onChange={e=>phoneChange(e.target.value)} placeholder='+7(000)-000-00-00' className={styles.input} type="text" id='2' required/>
            {valueChange===true? <button onClick={toChange} className={styles.button}>Изменить</button>:
                <button onClick={add} className={styles.button}>Добавить</button>}

        </div>
    );
};

export default Window;
