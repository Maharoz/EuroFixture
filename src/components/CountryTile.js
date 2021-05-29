import Card from "./Card";
import styles from "./CountryTile.module.css";

const CountryTile = (props) => {
  return (
    <li className={styles.countryTile} key={props.key}>
      <img
        className={styles.image}
        src={props.imageUrl}
      />
      <h4 className={styles.countryTitle}>{props.countryName}</h4>
    </li>
  );
};

export default CountryTile;
