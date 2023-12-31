import {Counter} from "../counter/component.jsx";
import {useState} from "react";
import classNames from "classnames";

import styles from "./styles.module.css"

export const Dish = ({name, price, ingredients, className}) => {
    const [dishCounter, setDishCounter] = useState(0);

    const increment = () => {
        if (dishCounter < 5) {
            setDishCounter((prevCount) => prevCount + 1);
        }
    };

    const decrement = () => {
        if (dishCounter > 0) {
            setDishCounter((prevCount) => prevCount - 1);
        }
    };

    return (
        <li className={classNames(styles.root, className)}>
            <strong>Блюдо: {name}:</strong>
            <p>Цена: {price}</p>
            <p>Состав: {ingredients.join(', ')}</p>
            <p>Количество блюд:</p>
            <Counter
                className={styles.counter}
                onIncrement={increment}
                onDecrement={decrement}
                count={dishCounter}
            />
        </li>
    )
}
