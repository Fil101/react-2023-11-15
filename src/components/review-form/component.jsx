import {useReducer} from "react";
import {Counter} from "../counter/component";

const DEFAULT_FORM_VALUE = {
    name: "",
    text: "",
    rating: 5,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "setName":
            return {...state, name: action.payload, text: DEFAULT_FORM_VALUE.text, rating: DEFAULT_FORM_VALUE.rating};
        case "setText":
            return {...state, text: action.payload};
        case "setRating":
            return {...state, rating: action.payload};
        default:
            return state;
    }
};
export const ReviewForm = () => {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    const onIncrementRating = () => {
        if (formValue.rating < 5) {
            dispatch({type: 'setRating', payload: formValue.rating + 0.5})
        }
    }

    const onDecrementRating = () => {
        if (formValue.rating > 0) {
            dispatch({type: 'setRating', payload: formValue.rating - 0.5})
        }
    }

    return (
        <div>
            <h3>Оставить отзыв</h3>
            <div>
                <label htmlFor="name">Имя</label>
                <input
                    id="name"
                    value={formValue.name}
                    onChange={(event) => {
                        dispatch({type: 'setName', payload: event.target.value})
                    }}
                />
            </div>
            <div>
                <label htmlFor="text">Отзыв</label>
                <input
                    id="text"
                    value={formValue.text}
                    onChange={(event) => {
                        dispatch({type: 'setText', payload: event.target.value})
                    }}
                />
            </div>
            <div>
                <label>Рейтинг</label>
                <Counter
                    count={formValue.rating}
                    onDecrement={onDecrementRating}
                    onIncrement={onIncrementRating}
                />
            </div>

        </div>
    )
}
