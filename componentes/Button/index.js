import styles from '../../styles/Button.module.scss';

export default function Button({ children, onClick}) {
    return (
        <>
            <button className={`${styles["btn"]} ${styles["btn--bold"]}`}>
                {children}
            </button>
        </>
    )
}