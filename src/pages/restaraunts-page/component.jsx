import {useState} from "react";
import {RestaurantNames} from "../../components/restaurant-names/component";
import {Restaurants} from "../../components/restaurants/component";

export const  RestaurantsPage = ({restaurants}) => {
    const [selectedRestaurant, setSelectedRestaurants] = useState();

    const restaurantNames = restaurants.map(({name, id}) => {
       if (name && id) {
           return {name, id};
       }
       return {}
    });

    const filteredRestaurants = restaurants.filter(({name}) => name === selectedRestaurant);

    return (
        <div>
            <RestaurantNames
                restaurantNames={restaurantNames}
                onRestaurantSelect={setSelectedRestaurants}
            />
            <Restaurants restaurants={filteredRestaurants}/>
        </div>
    )
}
