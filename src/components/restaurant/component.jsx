import {Menu} from "../menu/component";
import {Reviews} from "../reviews/component";
import {ReviewForm} from "../review-form/component";

export const Restaurant = ({restaurant}) => {
    if (!restaurant) {
       return <h2>Ресторан не выбран</h2>
    }

    return (
        <div>
            <h2>Ресторан: {restaurant.name}</h2>
            <Menu menu={restaurant.menu}/>
            <Reviews reviews={restaurant.reviews}/>
            <ReviewForm/>
        </div>
    )
}
