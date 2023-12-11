import classNames from "classnames";
import {Button} from "../button/component";

import styles from "./styles.module.css"

export const Counter = ({onIncrement, onDecrement, count, className}) => {

    return (
        <div className={classNames(styles.root, className)}>
            <Button onClick={onDecrement}>-</Button>
            <div>{count}</div>
            <Button onClick={onIncrement}>+</Button>
        </div>
    )
}
