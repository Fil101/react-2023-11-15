import styles from "./styles.module.css";
import classNames from "classnames";
import {Button} from "../button/component";
import {ThemeProvider} from "../../contexts/theme/component";

export const Footer = ({className}) => {
    return (
        <ThemeProvider>
            <footer className={classNames(styles.root, className)}>
                <Button>Заказ</Button>
            </footer>
        </ThemeProvider>

    )
}
