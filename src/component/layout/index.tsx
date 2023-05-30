import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.content}>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
