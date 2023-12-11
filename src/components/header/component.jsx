import styles from "./styles.module.css";
import classNames from "classnames";

export const Header = ({className}) => {
    return (
        <header className={classNames(styles.root, className)}>Header</header>
    )
}
