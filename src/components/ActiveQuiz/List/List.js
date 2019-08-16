import React from 'react';
import styles from '../ActiveQuiz.module.css';

const List = props =>(
    <div id={styles.Active}>

        {/*Выводим лист в цикле*/}
        {props.lists.map((list, index) => {
             return(

            <div id={styles.FlexBoxContainer4} key={index}>
                <div id={styles.wb_Text3}>
                    <span id={styles.wb_uid2}>○ {list.name} &nbsp;&nbsp;  {list.size} </span>
                </div>
            </div>
             )
            }
        )}


    </div>
)

export default List