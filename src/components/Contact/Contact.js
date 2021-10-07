import React from 'react';
import cn from 'classnames'
import styles from './Contact.module.scss'
const Contact = ({name,phone,word,b,id,clear,click}) => {
    return (
        <>
            <button onClick={()=>click(id)} className={styles.button}>Изменить</button>
            <button onClick={()=>clear(id)} className={cn(styles.button, styles.blue)}>Удалить</button>
          <div className={styles.circle} style={{background: b}}><span>{word}</span></div>
          <div className={styles.wap}>
              <p>{name}</p>
              <p>{phone}</p>
          </div>
        </>
    );
};

export default Contact;
