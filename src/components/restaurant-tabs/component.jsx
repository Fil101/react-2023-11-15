import {Tab} from "../tab/component";
import styles from "./styles.module.css"
import classNames from "classnames";

export const RestaurantTabs = ({ restaurantTabs, onRestaurantSelect, selectedRestaurantId, className }) => {

    return (
        <div className={classNames(styles.root, className)}>
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
