export const Dish = ({name, price, ingredients}) => {

    return (
        <li>
            <strong>Блюдо: {name}:</strong>
            <p>Цена: {price}</p>
            <p>Состав:</p>
            <ul>
                {ingredients.map((item) => <li key={item}>{item}</li>)}
            </ul>
        </li>
    )
}
