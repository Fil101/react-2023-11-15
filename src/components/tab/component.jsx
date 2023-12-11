import classNames from "classnames";

import styles from './styles.module.css';

export const Tab = ({ name, onClick, className, isActive }) => {

    return (
        <button
            onClick={onClick}
            className={classNames(styles.tab, className, { [styles.tabActive]: isActive })}
        >
            {name}
        </button>
    )
}
