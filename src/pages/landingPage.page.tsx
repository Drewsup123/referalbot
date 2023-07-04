import styles from "../styles/pages/landingPage.module.sass";

const LandingPage = () => {
    return (
        <div className={styles.page}>
            <div
                className={styles.landingPageHeader}
                style={{
                    backgroundImage: `url(/media/backgrounds/refferalbot_bg_1.jpg)`,
                }}
            >
                <h1 className={styles.landingPageLeft}>Welcome!</h1>
                <div className={styles.landingPageRight}>
                    <h1>Get Refferals Now!</h1>
                    <p>
                        Welcome to RefferalBot, the revolutionary AI-powered
                        platform that effortlessly generates high-converting
                        affiliate marketing materials, from compelling product
                        descriptions to eye-catching banners, helping you
                        maximize your earnings with ease.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
