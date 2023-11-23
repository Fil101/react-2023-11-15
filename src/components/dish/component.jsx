import {Counter} from "../counter/component.jsx";
import {useState} from "react";

export const Dish = ({name, price, ingredients}) => {
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
        <li>
            <strong>Блюдо: {name}:</strong>
            <p>Цена: {price}</p>
            <p>Состав:</p>
            <ul>
                {ingredients.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p>Количество блюд:</p>
            <Counter
                onIncrement={increment}
                onDecrement={decrement}
                count={dishCounter}
            />
        </li>
    )
}
