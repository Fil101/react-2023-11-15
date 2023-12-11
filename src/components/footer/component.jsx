import styles from "./styles.module.css";
import classNames from "classnames";

export const Footer = ({className}) => {
    return (
        <footer className={classNames(styles.root, className)}>Footer</footer>
    )
}
