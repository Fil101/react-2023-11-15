import {useState} from "react";

export const DishCounter = () => {
    const [dishCounter, setDishCounter] = useState(0);

    const calcDishCounter = (type) => {
        if (type === 'increment' && dishCounter < 5) {
            setDishCounter(prevCount => prevCount + 1)
        }
        if (type === 'decrement' && dishCounter > 0) {
            setDishCounter(prevCount => prevCount - 1)
        }
    }

    return (
        <div>
            <button onClick={() => calcDishCounter('increment')}>&#10133;</button>
            <div>{dishCounter}</div>
            <button onClick={() => calcDishCounter('decrement')}>&#10134;</button>
        </div>
    )
}
