import { FC, MouseEventHandler, ReactNode } from 'react';
import { Colors } from './types';

type Props = {
    children: ReactNode;
    className?: string;
    color?: Colors;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<Props> = ({
    children,
    className = '',
    color = 'default',
    onClick = () => {},
}) => {
    return (
        <button className={`btn btn-${color} ` + className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
