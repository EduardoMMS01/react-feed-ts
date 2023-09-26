import styles from "./Header.module.css"

import logo from '../assets/react.svg'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo do React" />
        </header>
    )
}