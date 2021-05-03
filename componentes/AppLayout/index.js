import styles from '../../styles/AppLayout.module.scss';
export default function AppLayout({children}) {
    return (
        <>
            <div className={styles.app}>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}