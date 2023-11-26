import {useState} from "react";
import {RestaurantTabs} from "../../components/restaurant-tabs/component";
import {Restaurant} from "../../components/restaurant/component.jsx";

export const  RestaurantsPage = ({restaurants}) => {
    const [selectedRestaurantId, setSelectedRestaurantId] = useState();

    const restaurantNames = restaurants.map(({name, id}) => {
       if (name && id) {
           return {name, id};
       }
       return {}
    });

    const selectedRestaurant = restaurants.find(({id}) => id === selectedRestaurantId);

    return (
        <div>
            <RestaurantTabs
                restaurantTabs={restaurantNames}
                onRestaurantSelect={setSelectedRestaurantId}
            />
            <Restaurant restaurant={selectedRestaurant}/>
        </div>
    )
}
