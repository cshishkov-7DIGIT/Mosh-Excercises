import React from 'react';

interface Props {
    text: string;
}

const ExpandableText = ({text}: Props) => {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div>
            <p>{expanded ? text : text.slice(0, 100)}</p>
            <button onClick={() => setExpanded(!expanded)}>
                {expanded ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
};

export default ExpandableText;
