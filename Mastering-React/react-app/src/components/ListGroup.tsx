import React, {useState} from 'react';

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

export default function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (<>
        <h1>{heading}</h1>
        {items.length === 0 && <p>There are no items in the list.</p>}
        <ul className="list-group">
            {items.map((item, index) => (<li
                key={index}
                className={index === selectedIndex ? 'list-group-item active' : 'list-group-item'}
                onClick={() => {
                    setSelectedIndex(index);
                    onSelectItem(item);
                }}
            >
                {item}
            </li>))}
        </ul>
    </>);
}
