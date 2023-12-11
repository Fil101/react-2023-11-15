import {useTheme} from "../../contexts/theme/hooks.js";
import classNames from "classnames";

import styles from "./styles.module.css"

export const Button = ({children, onClick, disabled, className, isActive = false}) => {
    const {theme} = useTheme();

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={classNames(styles.root, className, {
                [styles.light]: theme === "light",
                [styles.dark]: theme === "dark",
                [styles.buttonActive]: isActive
            })}
        >
            {children}
        </button>
    )
}
