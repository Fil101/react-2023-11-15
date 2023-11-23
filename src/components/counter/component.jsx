
export const Counter = ({onIncrement, onDecrement, count}) => {

    return (
        <div>
            <button onClick={onDecrement}>&#10134;</button>
            <div>{count}</div>
            <button onClick={onIncrement}>&#10133;</button>
        </div>
    )
}
