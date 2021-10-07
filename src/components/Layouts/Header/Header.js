import React from 'react';
import styles from './Header.module.scss'
const Header = ({children}) => {
    return (
        <>
            <div className={styles.header}>
                <h1>Contacts</h1>
            </div>
            {children}
        </>
    )
};

export default Header;
