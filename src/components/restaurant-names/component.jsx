import {RestaurantName} from "../restaurant-name/component";

export const RestaurantNames = ({ restaurantNames, onRestaurantSelect }) => {

    return (
        <div>
            {restaurantNames.map(({name, id}) =>
                <RestaurantName
                    key={id}
                    name={name}
                    onClick={() => onRestaurantSelect(name)}
                />
            )}
        </div>
    )
}
