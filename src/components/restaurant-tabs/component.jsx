import {Tab} from "../tab/component";

export const RestaurantTabs = ({ restaurantTabs, onRestaurantSelect }) => {

    return (
        <div>
            {restaurantTabs.map(({name, id}) =>
                <Tab
                    key={id}
                    name={name}
                    onClick={() => onRestaurantSelect(id)}
                />
            )}
        </div>
    )
}
