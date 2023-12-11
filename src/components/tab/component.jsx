import classNames from "classnames";
import {Button} from "../button/component.jsx";

import styles from './styles.module.css';

export const Tab = ({ name, onClick, className, isActive }) => {

    return (
        <Button
            onClick={onClick}
            className={classNames(styles.tab, className)}
            isActive={isActive}
        >
            {name}
        </Button>
    )
}
