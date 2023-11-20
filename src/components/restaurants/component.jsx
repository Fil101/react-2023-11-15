import {Restaurant} from "../restaurant/component";

export const Restaurants = ({restaurants}) => {

    return (
        <div>
            {restaurants.map(({id, menu, name, reviews}) => (
                <Restaurant
                    key={id}
                    menu={menu}
                    name={name}
                    reviews={reviews}
                />
            ))}
        </div>
    )
}
