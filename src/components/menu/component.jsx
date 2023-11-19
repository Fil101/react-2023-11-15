import {Dish} from "../dish/component";

export const Menu = ({menu}) => {

    return (
        <div>
            <h3>Меню:</h3>
            <ul>
                {menu.map(({id, name, price, ingredients}) => (
                    <Dish
                        key={id}
                        name={name}
                        price={price}
                        ingredients={ingredients}
                    />
                ))}
            </ul>
        </div>
    )
}
