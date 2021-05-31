import styles from "./CountryTile.module.css";

const dataForItaly = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Turkey", "12 June 2021", "Stadio Olimpico", "1 AM"],
    ["Switzerland", "17 June 2021", "Stadio Olimpico", "1 AM"],
    ["Wales", "20 June 2021", "Stadio Olimpico", "10 PM"],
  ],
};

const dataForSwitzerland = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Wales", "12 June 2021", "Baku Olympic Stadium", "7 PM"],
    ["Italy", "17 June 201", "Stadio Olimpico", "1 AM"],
    ["Turkey", "20 June 2021", "Baku Olympic Stadium", "10 PM"],
  ],
};

const dataForTurkey = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Italy", "12 June 2021", "Stadio Olimpico", "1 AM"],
    ["Wales", "16 June 201", "Baku Olympic Stadium", "10 PM"],
    ["Switzerland", "20 June 2021", "Baku Olympic Stadium", "10 PM"],
  ],
};

const dataForWales = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Switzerland", "12 June 2021", "Baku Olympic Stadium", "7 PM"],
    ["Turkey", "16 June 201", "Baku Olympic Stadium", "10 PM"],
    ["Italy", "20 June 2021", "Stadio Olimpico", "10 PM"],
  ],
};

const dataForBelgium = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Russia", "12 June 2021", "Krestovsky Stadium", "1 AM"],
    ["Denmark", "17 June 201", "Parken", "10 PM"],
    ["Finland", "22 June 2021", "Krestovsky Stadium", "1 AM"],
  ],
};

const dataForDenmark = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Finland", "12 June 2021", "Parken", "10 PM"],
    ["Belgium", "17 June 201", "Parken", "10 PM"],
    ["Russia", "22 June 2021", "Parken", "1 AM"],
  ],
};

const dataForFinland = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Belgium", "13 June 2021", "Krestovsky Stadium", "10 PM"],
    ["Finland", "16 June 201", "Krestovsky Stadium", "7 PM"],
    ["Denmark", "22 June 2021", "Parken", "1 AM"],
  ],
};

const dataForRussia = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Macedonia", "12 June 2021", "Stadio Olimpico", "1 AM"],
    ["Wales", "16 June 201", "Baku Olympic Stadium", "7 PM"],
    ["Switzerland", "20 June 2021", "Baku Olympic Stadium", "1 AM"],
  ],
};

const dataForAustria = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Macedonia", "13 June 2021", "National Arena", "10 PM"],
    ["Netherlands", "18 June 201", "Amsterdam ArenA", "1 AM"],
    ["Austria", "21 June 2021", "National Arena", "10 PM"],
  ],
};

const dataForNetherlands = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Ukraine", "14 June 2021", "Amsterdam ArenA", "1 AM"],
    ["Austria", "18 June 2021", "Amsterdam ArenA", "1 AM"],
    ["Macedonia", "21 June 2021", "Amsterdam ArenA", "10 AM"],
  ],
};

const dataForMacedonia = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Austria", "13 June 2021", "National Arena", "10 PM"],
    ["Ukraine", "17 June 2021", "National Arena", "7 PM"],
    ["Netherlands", "21 June 2021", "Amsterdam ArenA", "10 PM"],
  ],
};

const dataForUkraine = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Netherlands", "14 June 2021", "Amsterdam ArenA", "1 AM"],
    ["Macedonia", "17 June 2021", "National Arena", "7 PM"],
    ["Austria", "21 June 2021", "National Arena", "10 PM"],
  ],
};

const dataForCrotia = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["England", "13 June 2021", "Wembley Stadium", "7 PM"],
    ["Czech", "18 June 2021", "Hampden Park", "10 PM"],
    ["Scotland", "23 June 2021", "Hampden Park", "1 AM"],
  ],
};

const dataForChezechia = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Scotland", "14 June 2021", "Hampden Park", "7 PM"],
    ["Croatia", "18 June 2021", "Hampden Park", "10 PM"],
    ["England", "23 June 2021", "Wembley Stadium", "1 AM"],
  ],
};

const dataForEngland = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Croatia", "13 June 2021", "Wembley Stadium", "7 PM"],
    ["Scotland", "19 June 2021", "Wembley Stadium", "10 PM"],
    ["Czech", "23 June 2021", "Wembley Stadium", "1 AM"],
  ],
};

const dataForScotland = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Czech", "14 June 2021", "Hampden Park", "7 PM"],
    ["England", "19 June 2021", "Wembley Stadium", "1 AM"],
    ["Croatia", "23 June 2021", "Hampden Park", "1 AM"],
  ],
};

const dataForPoland = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Slovakia", "14 June 2021", "Krestovsky Stadium", "10 PM"],
    ["Spain", "20 June 2021", "Estadio de La Cartuja", "1 AM"],
    ["Sweden", "23 June 2021", "Krestovsky Stadium", "10 PM"],
  ],
};

const dataForSlovakia = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Poland", "14 June 2021", "Krestovsky Stadium", "10 PM"],
    ["Sweden", "18 June 2021", "Krestovsky Stadium", "7 PM"],
    ["Spain", "23 June 2021", "Estadio de La Cartuja", "10 PM"],
  ],
};

const dataForSpain = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Sweden", "15 June 2021", "Estadio de La Cartuja", "1 AM"],
    ["Poland", "20 June 2021", "Estadio de La Cartuja", "1 AM"],
    ["Slovakia", "23 June 2021", "Estadio de La Cartuja", "10 PM"],
  ],
};

const dataForSweden = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Spain", "15 June 2021", "Estadio de La Cartuja", "1 AM"],
    ["Slovakia", "18 June 2021", "Krestovsky Stadium", "7 PM"],
    ["Poland", "23 June 2021", "Krestovsky Stadium", "10 PM"],
  ],
};

const dataForFrance = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Germany", "16 June 2021", "Allianz Arena", "1 AM"],
    ["Hungary", "19 June 2021", "Ferenc Puskás Stadium", "7 PM"],
    ["France", "24 June 2021", "Ferenc Puskás Stadium", "1 AM"],
  ],
};

const dataForGermany = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["France", "16 June 2021", "Allianz Arena", "1 AM"],
    ["Portugal", "19 June 2021", "Allianz Arena", "10 PM"],
    ["Hungary", "24 June 2021", "Allianz Arena", "1 AM"],
  ],
};

const dataForHungary = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Portugal", "15 June 2021", "Ferenc Puskás Stadium", "10 PM"],
    ["France", "19 June 201", "Ferenc Puskás Stadium", "7 PM"],
    ["Germany", "24 June 2021", "Allianz Arena", "1 AM"],
  ],
};

const dataForPortugal = {
  headers: ["Against", "Date", "Ground", "Time"],
  rows: [
    ["Hungary", "15 June 2021", "Ferenc Puskás Stadium", "10 PM"],
    ["Germany", "19 June 201", "Allianz Arena", "10 PM"],
    ["France", "24 June 2021", "Ferenc Puskás Stadium", "1 AM"],
  ],
};

const CountryTile = (props) => {
  const countryClickHandler = () => {
    if (props.id == 1) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForItaly,
      };
    }

    if (props.id == 2) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForSwitzerland,
      };
    }

    if (props.id == 3) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForTurkey,
      };
    }
    if (props.id == 4) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForWales,
      };
    }
    if (props.id == 5) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForBelgium,
      };
    }
    if (props.id == 6) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForDenmark,
      };
    }
    if (props.id == 7) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForFinland,
      };
    }
    if (props.id == 8) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForRussia,
      };
    }

    if (props.id == 9) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForAustria,
      };
    }

    if (props.id == 10) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForNetherlands,
      };
    }
    if (props.id == 11) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForMacedonia,
      };
    }
    if (props.id == 12) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForUkraine,
      };
    }
    if (props.id == 13) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForCrotia,
      };
    }
    if (props.id == 14) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForChezechia,
      };
    }
    if (props.id == 15) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForEngland,
      };
    }
    if (props.id == 16) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForScotland,
      };
    }
    if (props.id == 17) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForPoland,
      };
    }
    if (props.id == 18) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForSlovakia,
      };
    }
    if (props.id == 19) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForSpain,
      };
    }
    if (props.id == 20) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForSweden,
      };
    }
    if (props.id == 21) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForFrance,
      };
    }
    if (props.id == 22) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForGermany,
      };
    }

    if (props.id == 23) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForHungary,
      };
    }
    if (props.id == 24) {
      var info = {
        id: props.id,
        countryName: props.countryName,
        data: dataForPortugal,
      };
    }

    props.clickedCountryData(info);
    //console.log(info);
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
