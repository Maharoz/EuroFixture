import * as React from "react";
import CountryTile from "./CountryTile";
import styles from "./CountryArea.module.css";
import Modal from "./UI/Modal";

const cardsDataForGroupA = [
  {
    Key: 1,
    countryName: "Italy",
    imageUrl: "https://www.worldometers.info/img/flags/it-flag.gif",
  },
  {
    Key: 2,
    countryName: "Switzerland",
    imageUrl: "https://www.worldometers.info/img/flags/sz-flag.gif",
  },
  {
    Key: 3,
    countryName: "Turkey",
    imageUrl: "https://www.worldometers.info/img/flags/tu-flag.gif",
  },
  {
    Key: 4,
    countryName: "Wales",
    imageUrl: "https://flagpedia.net/data/flags/w580/gb-wls.png",
  },
];

const cardsDataForGroupB = [
  {
    Key: 5,
    countryName: "Belgium",
    imageUrl: "https://www.worldometers.info/img/flags/be-flag.gif",
  },
  {
    Key: 6,
    countryName: "Denmark",
    imageUrl: "https://www.worldometers.info/img/flags/da-flag.gif",
  },
  {
    Key: 7,
    countryName: "Finland",
    imageUrl: "https://www.worldometers.info/img/flags/fi-flag.gif",
  },
  {
    Key: 8,
    countryName: "Russia",
    imageUrl: "https://www.worldometers.info/img/flags/rs-flag.gif",
  },
];

const cardsDataForGroupC = [
  {
    Key: 9,
    countryName: "Austria",
    imageUrl: "https://www.worldometers.info/img/flags/au-flag.gif",
  },
  {
    Key: 10,
    countryName: "Netherlands",
    imageUrl: "https://www.worldometers.info/img/flags/nl-flag.gif",
  },
  {
    Key: 11,
    countryName: "Macedonia",
    imageUrl: "https://www.worldometers.info/img/flags/mk-flag.gif",
  },
  {
    Key: 12,
    countryName: "Ukraine",
    imageUrl: "https://www.worldometers.info/img/flags/up-flag.gif",
  },
];

const cardsDataForGroupD = [
  {
    Key: 13,
    countryName: "Croatia",
    imageUrl: "https://www.worldometers.info/img/flags/hr-flag.gif",
  },
  {
    Key: 14,
    countryName: "Czechia",
    imageUrl: "https://www.worldometers.info/img/flags/ez-flag.gif",
  },
  {
    Key: 15,
    countryName: "England",
    imageUrl: "https://flagpedia.net/data/flags/w580/gb-eng.png",
  },
  {
    Key: 16,
    countryName: "Scotland",
    imageUrl: "https://flagpedia.net/data/flags/w580/gb-sct.png",
  },
];

const cardsDataForGroupE = [
  {
    Key: 17,
    countryName: "Poland",
    imageUrl: "https://www.worldometers.info/img/flags/pl-flag.gif",
  },
  {
    Key: 18,
    countryName: "Slovakia",
    imageUrl: "https://www.worldometers.info/img/flags/lo-flag.gif",
  },
  {
    Key: 19,
    countryName: "Spain",
    imageUrl: "https://www.worldometers.info/img/flags/sp-flag.gif",
  },
  {
    Key: 20,
    countryName: "Sweeden",
    imageUrl: "https://www.worldometers.info/img/flags/sw-flag.gif",
  },
];

const cardsDataForGroupF = [
  {
    Key: 21,
    countryName: "France",
    imageUrl: "https://www.worldometers.info/img/flags/fr-flag.gif",
  },
  {
    Key: 22,
    countryName: "Germany",
    imageUrl: "https://www.worldometers.info/img/flags/gm-flag.gif",
  },
  {
    Key: 23,
    countryName: "Hungary",
    imageUrl: "https://www.worldometers.info/img/flags/hu-flag.gif",
  },
  {
    Key: 24,
    countryName: "Portugal",
    imageUrl: "https://www.worldometers.info/img/flags/po-flag.gif",
  },
];

const CountryArea = () => {

  const [fixture,setFixture] =React.useState();

  const selectedCountryHandler = counrty => {
    console.log('In App.js');
    console.log(counrty);
  };

  return (
    <div>
      {/* <Modal title="An Error Occured!" message="something went wrong!" /> */}
      <h3 className={styles.groupName}>Group A</h3>
      <ul className={styles.countryList}>
        {cardsDataForGroupA.map((card) => (
          <CountryTile
            key={card.key}
            countryName={card.countryName}
            imageUrl={card.imageUrl}
            clickedCountryData={selectedCountryHandler}
          />
        ))}
      </ul>

      <h3 className={styles.groupName}>Group B</h3>
      <ul className={styles.countryList}>
        {cardsDataForGroupB.map((card) => (
          <CountryTile
            key={card.key}
            countryName={card.countryName}
            imageUrl={card.imageUrl}
            clickedCountryData={selectedCountryHandler}
          />
        ))}
      </ul>

      <h3 className={styles.groupName}>Group C</h3>
      <ul className={styles.countryList}>
        {cardsDataForGroupC.map((card) => (
          <CountryTile
            key={card.key}
            countryName={card.countryName}
            imageUrl={card.imageUrl}
            clickedCountryData={selectedCountryHandler}
          />
        ))}
      </ul>

      <h3 className={styles.groupName}>Group D</h3>
      <ul className={styles.countryList}>
        {cardsDataForGroupD.map((card) => (
          <CountryTile
            key={card.key}
            countryName={card.countryName}
            imageUrl={card.imageUrl}
            clickedCountryData={selectedCountryHandler}
          />
        ))}
      </ul>

      <h3 className={styles.groupName}>Group E</h3>
      <ul className={styles.countryList}>
        {cardsDataForGroupE.map((card) => (
          <CountryTile
            key={card.key}
            countryName={card.countryName}
            imageUrl={card.imageUrl}
            clickedCountryData={selectedCountryHandler}
          />
        ))}
      </ul>

      <h3 className={styles.groupName}>Group F</h3>
      <ul className={styles.countryList}>
        {cardsDataForGroupF.map((card) => (
          <CountryTile
            key={card.key}
            countryName={card.countryName}
            imageUrl={card.imageUrl}
            clickedCountryData={selectedCountryHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default CountryArea;
