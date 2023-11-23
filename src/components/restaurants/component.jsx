import {Restaurant} from "../restaurant/component";

export const Restaurants = ({restaurants}) => {

    return (
        <div>
            {!!restaurants.length ?
                restaurants.map(({id, menu, name, reviews}) => (
                    <Restaurant
                        key={id}
                        menu={menu}
                        name={name}
                        reviews={reviews}
                    />
                ))
                :
                <h3>Выберите ресторан</h3>
            }
        </div>
    )
}
