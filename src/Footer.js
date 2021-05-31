
import styles from "./Footer.module.css";
const FooterArea = (props) => {
  return (<div>
       <div className={styles.footer}>
        <p1 className={styles.footerText}>Developed with love By <a className={styles.anchorText} href="https://github.com/Maharoz/EuroFixture">Maharoz Alam</a></p1 >
      </div>
  </div>);
};

export default FooterArea;
