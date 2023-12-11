import {RestaurantsPage} from "./pages/restaraunts-page/component";

import "./styles/index.css"

export const App = ({ restaurants }) => {

    return (
        <RestaurantsPage restaurants={restaurants}/>
    )
}
