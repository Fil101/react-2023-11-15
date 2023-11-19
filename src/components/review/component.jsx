export const Review = ({rating, text, user}) => {

    return (
        <li>
            <strong>Пользователь {user}:</strong>
            <p>Оценка: {rating}</p>
            <p>Отзыв: {text}</p>
        </li>
    )
}
