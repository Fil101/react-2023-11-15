import {Menu} from "../menu/component";
import {Reviews} from "../reviews/component";

export const Restaurant = ({menu, name, reviews}) => {

    return (
        <div>
            <h2>Ресторан: {name}</h2>
            <Menu menu={menu}/>
            <Reviews reviews={reviews}/>
        </div>
    )
}
