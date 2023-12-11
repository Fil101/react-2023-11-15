import classNames from "classnames";

import styles from "./styles.module.css"

export const Counter = ({onIncrement, onDecrement, count, className}) => {

    return (
        <div className={classNames(styles.root, className)}>
            <button className={styles.counterButton} onClick={onDecrement}>&#10134;</button>
            <div>{count}</div>
            <button className={styles.counterButton} onClick={onIncrement}>&#10133;</button>
        </div>
    )
}
