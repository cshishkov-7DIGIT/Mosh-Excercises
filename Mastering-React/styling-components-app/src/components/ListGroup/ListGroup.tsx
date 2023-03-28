import React from 'react';
import styles from './ListGroup.module.css';

export default function ListGroup() {
    let items = [
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Philadelphia',
        'Phoenix',
        'San Antonio',
    ];

    let heading = 'Cities';

    return (
        <div>
            <h1>{heading}</h1>
            <ul className={[styles.listGroup, styles.container].join(' ')}>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
