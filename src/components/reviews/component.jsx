import {Review} from "../review/component";

import styles from "./styles.module.css"

export const Reviews = ({reviews}) => {

    return (
        <div>
            <h3>Отзывы:</h3>
            {reviews.length > 0 ?
                <ul className={styles.root}>
                    {reviews.map(({id, rating, text, user}) => (
                        <Review
                            className={styles.review}
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
