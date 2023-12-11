import {Dish} from "../dish/component";

import styles from "./styles.module.css"

export const Menu = ({menu}) => {

    return (
        <div>
            <h3>Меню:</h3>
            <ul className={styles.root}>
                {menu.map(({id, name, price, ingredients}) => (
                    <Dish
                        key={id}
                        name={name}
                        price={price}
                        ingredients={ingredients}
                        className={styles.dish}
                    />
                ))}
            </ul>
        </div>
    )
}
