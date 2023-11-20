import {RestaurantsPage} from "./pages/restaraunts-page/component";

export const App = ({ restaurants }) => {

    return (
        <div>
            <RestaurantsPage restaurants={restaurants} />
        </div>
    )
}
