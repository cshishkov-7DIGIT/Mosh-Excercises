import React from 'react';

interface ButtonProps {
    children: string;
    color?:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'danger'
        | 'warning'
        | 'info'
        | 'light'
        | 'dark'
        | 'link';
    onClick: () => void;
}

const [alertVisible, setAlertVisible] = React.useState(false);

const Button = ({children, color = 'primary', onClick}: ButtonProps) => {
    return (
        <div>
            {alertVisible && <div className="alert alert-primary">My alert</div>}

            <button
                className={'btn btn-' + color}
                onClick={() => {
                    onClick();
                    setAlertVisible(true);
                }}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
