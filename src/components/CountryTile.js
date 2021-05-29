import styles from "./CountryTile.module.css";

const CountryTile = (props) => {
  const countryClickHandler = () => {
    const data = { id: props.id, countryName: props.countryName };

    props.clickedCountryData(data);
  };

  return (
    <li
      className={styles.countryTile}
      id={props.id}
      onClick={countryClickHandler}
    >
      <img className={styles.image} src={props.imageUrl} />
      <h4 className={styles.countryTitle}> {props.countryName}</h4>
    </li>
  );
};

export default CountryTile;
