import {RestaurantNames} from "../../components/restaurant-names/component";
import {Restaurants} from "../../components/restaurants/component";

export const  RestaurantsPage = ({restaurants}) => {
    const restaurantNames = restaurants.map(({name, id}) => {
       if (name && id) {
           return {name, id};
       }
       return {}
    });

    return (
        <div>
            <RestaurantNames
                restaurantNames={restaurantNames}
                onRestaurantSelect={(restaurantName) => console.log(restaurantName)}
            />
            <Restaurants restaurants={restaurants}/>
        </div>
    )
}
