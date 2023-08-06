import React from 'react';
import styles from './CloseTag.module.css';

const CloseTag = () => {
    return (
        <div className={styles.closeTagContainer}>
            <div className={styles.closeTag}>
                <img src="/img/assets/chevron.png" alt="left arrow." className='rotate-270'/>
            </div>
        </div>
    )
}

export default CloseTag