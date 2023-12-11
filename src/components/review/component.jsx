import styles from "./styles.module.css"
import classNames from "classnames";
export const Review = ({rating, text, user, className}) => {

    return (
        <li className={classNames(styles.root, className)}>
            <strong>Пользователь {user}:</strong>
            <p>Оценка: {rating}</p>
            <p>Отзыв: {text}</p>
        </li>
    )
}
