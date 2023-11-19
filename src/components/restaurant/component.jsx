import {Menu} from "../menu/component";
import {Reviews} from "../reviews/component";

export const Restaurant = ({restaurant}) => {

    return (
        <div>
            <h2>Ресторан: {restaurant.name}</h2>
            <Menu menu={restaurant.menu}/>
            <Reviews reviews={restaurant.reviews}/>
        </div>
    )
}
