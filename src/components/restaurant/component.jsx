import {Menu} from "../menu/component";
import {Reviews} from "../reviews/component";
import {ReviewForm} from "../review-form/component";
import classNames from "classnames";

import styles from "./styles.module.css"

export const Restaurant = ({restaurant, className}) => {

    if (!restaurant) {
       return <h2>Ресторан не выбран</h2>
    }

    return (
        <div className={classNames(styles.root, className)}>
            <h2>Ресторан: {restaurant.name}</h2>
            <Menu menu={restaurant.menu}/>
            <Reviews reviews={restaurant.reviews}/>
            <ReviewForm className={classNames(styles.reviewForm)}/>
        </div>
    )
}
