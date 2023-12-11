import classNames from "classnames";
import {Button} from "../button/component";
import {useTheme} from "../../contexts/theme/hooks.js";
import {ThemeProvider} from "../../contexts/theme/component";

import styles from "./styles.module.css";

export const Header = ({className}) => {
    const {toggleTheme} = useTheme();

    return (
        <ThemeProvider>
            <header className={classNames(styles.root, className)}>
                <Button onClick={toggleTheme}>Сменить тему</Button>
                <Button>Заказ</Button>
            </header>
        </ThemeProvider>
    )
}
