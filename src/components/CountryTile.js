
import styles from "./CountryTile.module.css";

const CountryTile = (props) => {

  const countryClickHandler =(event) =>{
    props.clickedCountryData(event.target.value);
  }

  return (
    <li className={styles.countryTile} key={props.key} onClick={countryClickHandler}>
      <img
        className={styles.image}
        src={props.imageUrl}
      />
      <h4 className={styles.countryTitle}>{props.countryName}</h4>
    </li>
  );
};

export default CountryTile;
