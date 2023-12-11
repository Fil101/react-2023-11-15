import {useState} from "react";
import {RestaurantTabs} from "../../components/restaurant-tabs/component";
import {Restaurant} from "../../components/restaurant/component.jsx";
import {Layout} from "../../components/layout/component.jsx";

import styles from "./styles.module.css"

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
        <Layout>
            <RestaurantTabs
                restaurantTabs={restaurantNames}
                onRestaurantSelect={setSelectedRestaurantId}
                selectedRestaurantId={selectedRestaurantId}
                className={styles.restaurantTabs}
            />
            <Restaurant
                restaurant={selectedRestaurant}
                className={styles.restaurant}
            />
        </Layout>
    )
}
