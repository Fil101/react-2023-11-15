import {Review} from "../review/component";

export const Reviews = ({reviews}) => {

    return (
        <div>
            <h3>Отзывы:</h3>
            {reviews.length > 0 ?
                <ul>
                    {reviews.map(({id, rating, text, user}) => (
                        <Review
                            key={id}
                            rating={rating}
                            text={text}
                            user={user}
                        />
                    ))}
                </ul>
                :
                <p>Еще нет ни одного отзыва :(</p>
            }
        </div>
    )
}
