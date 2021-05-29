import * as React from "react";
import CountryTile from "./CountryTile";
import styles from "./CountryArea.module.css";
import Modal from "./UI/Modal";

const cardsDataForGroupA = [
  {
    key: 1,
    countryName: "Italy",
    imageUrl: "https://www.worldometers.info/img/flags/it-flag.gif",
  },
  {
    key: 2,
    countryName: "Switzerland",
    imageUrl: "https://www.worldometers.info/img/flags/sz-flag.gif",
  },
  {
    key: 3,
    countryName: "Turkey",
    imageUrl: "https://www.worldometers.info/img/flags/tu-flag.gif",
  },
  {
    key: 4,
    countryName: "Wales",
    imageUrl: "https://flagpedia.net/data/flags/w580/gb-wls.png",
  },
];

const cardsDataForGroupB = [
  {
    key: 5,
    countryName: "Belgium",
    imageUrl: "https://www.worldometers.info/img/flags/be-flag.gif",
  },
  {
    key: 6,
    countryName: "Denmark",
    imageUrl: "https://www.worldometers.info/img/flags/da-flag.gif",
  },
  {
    key: 7,
    countryName: "Finland",
    imageUrl: "https://www.worldometers.info/img/flags/fi-flag.gif",
  },
  {
    key: 8,
    countryName: "Russia",
    imageUrl: "https://www.worldometers.info/img/flags/rs-flag.gif",
  },
];

const cardsDataForGroupC = [
  {
    key: 9,
    countryName: "Austria",
    imageUrl: "https://www.worldometers.info/img/flags/au-flag.gif",
  },
  {
    key: 10,
    countryName: "Netherlands",
    imageUrl: "https://www.worldometers.info/img/flags/nl-flag.gif",
  },
  {
    key: 11,
    countryName: "Macedonia",
    imageUrl: "https://www.worldometers.info/img/flags/mk-flag.gif",
  },
  {
    key: 12,
    countryName: "Ukraine",
    imageUrl: "https://www.worldometers.info/img/flags/up-flag.gif",
  },
];

const cardsDataForGroupD = [
  {
    key: 13,
    countryName: "Croatia",
    imageUrl: "https://www.worldometers.info/img/flags/hr-flag.gif",
  },
  {
    key: 14,
    countryName: "Czechia",
    imageUrl: "https://www.worldometers.info/img/flags/ez-flag.gif",
  },
  {
    key: 15,
    countryName: "England",
    imageUrl: "https://flagpedia.net/data/flags/w580/gb-eng.png",
  },
  {
    key: 16,
    countryName: "Scotland",
    imageUrl: "https://flagpedia.net/data/flags/w580/gb-sct.png",
  },
];

const cardsDataForGroupE = [
  {
    key: 17,
    countryName: "Poland",
    imageUrl: "https://www.worldometers.info/img/flags/pl-flag.gif",
  },
  {
    key: 18,
    countryName: "Slovakia",
    imageUrl: "https://www.worldometers.info/img/flags/lo-flag.gif",
  },
  {
    key: 19,
    countryName: "Spain",
    imageUrl: "https://www.worldometers.info/img/flags/sp-flag.gif",
  },
  {
    key: 20,
    countryName: "Sweeden",
    imageUrl: "https://www.worldometers.info/img/flags/sw-flag.gif",
  },
];

const cardsDataForGroupF = [
  {
    key: 21,
    countryName: "France",
    imageUrl: "https://www.worldometers.info/img/flags/fr-flag.gif",
  },
  {
    key: 22,
    countryName: "Germany",
    imageUrl: "https://www.worldometers.info/img/flags/gm-flag.gif",
  },
  {
    key: 23,
    countryName: "Hungary",
    imageUrl: "https://www.worldometers.info/img/flags/hu-flag.gif",
  },
  {
    key: 24,
    countryName: "Portugal",
    imageUrl: "https://www.worldometers.info/img/flags/po-flag.gif",
  },
];

const CountryArea = () => {
  const [fixture, setFixture] = React.useState("");

  const selectedCountryHandler = (counrty) => {
    setFixture({
      title: counrty.countryName,
      message: "",
    });
  };

  const errorHandler = () =>{
    setFixture(null);
  }

  return (
    <div>
      {fixture && <Modal title={fixture.title} message={fixture.message} onConfirm={errorHandler}/>}
      <h3 className={styles.groupName}>Group A</h3>
      <ul className={styles.countryList}>
        {cardsDataForGroupA.map((card) => (
          <CountryTile
            key={card.key}
            id={card.key}
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
            id={card.key}
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
            id={card.key}
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
            id={card.key}
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
            id={card.key}
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
            id={card.key}
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
