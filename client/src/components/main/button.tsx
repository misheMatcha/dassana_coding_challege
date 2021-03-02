import { FC } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    apiBtn: {
        backgroundColor: '#E0E1E2',
        color: '#000000CC',
        padding: {
            top: 11,
            right: 21,
            bottom: 11,
            left: 21
        },
        borderRadius: 3,
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#CACBCD',
        }
    }
})

interface ButtonProps {
    children: string,
    onClick: () => void
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
    const classes= useStyles();

    return <button className={classes.apiBtn} onClick={onClick}>
        {children}
    </button>
}