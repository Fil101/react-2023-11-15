import {Tab} from "../tab/component";
import styles from "./styles.module.css"

export const RestaurantTabs = ({ restaurantTabs, onRestaurantSelect, selectedRestaurantId }) => {

    return (
        <div className={styles.root}>
            {restaurantTabs.map(({name, id}) =>
                <Tab
                    key={id}
                    name={name}
                    onClick={() => onRestaurantSelect(id)}
                    className={styles.tab}
                    isActive={selectedRestaurantId === id}
                />
            )}
        </div>
    )
}
