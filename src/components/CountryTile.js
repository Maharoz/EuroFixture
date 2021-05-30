import styles from "./CountryTile.module.css";

const dataForItaly = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Turkey", "12 June 2021", "Stadio Olimpico"],
    ["Switzerland", "17 June 2021", "Stadio Olimpico"],
    ["Wales", "20 June 2021", "Stadio Olimpico"],
  ],
};


const dataForSwitzerland = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Wales", "12 June 2021", "Baku Olympic Stadium"],
    ["Italy", "17 June 201", "Stadio Olimpico"],
    ["Turkey", "20 June 2021", "Baku Olympic Stadium"],
  ],
};


const dataForTurkey = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Italy", "12 June 2021", "Stadio Olimpico"],
    ["Wales", "16 June 201", "Baku Olympic Stadium"],
    ["Switzerland", "20 June 2021", "Baku Olympic Stadium"],
  ],
};


const dataForWales = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Switzerland", "12 June 2021", "Baku Olympic Stadium"],
    ["Turkey", "16 June 201", "Baku Olympic Stadium"],
    ["Italy", "20 June 2021", "Stadio Olimpico"],
  ],
};


const dataForBelgium = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Russia", "12 June 2021", "Krestovsky Stadium"],
    ["Denmark", "17 June 201", "Parken"],
    ["Finland", "22 June 2021", "Krestovsky Stadium"],
  ],
};


const dataForDenmark = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Finland", "12 June 2021", "Parken"],
    ["Belgium", "17 June 201", "Parken"],
    ["Russia", "22 June 2021", "Parken"],
  ],
};


const dataForFinland = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Belgium", "13 June 2021", "Krestovsky Stadium"],
    ["Finland", "16 June 201", "Krestovsky Stadium"],
    ["Denmark", "22 June 2021", "Parken"],
  ],
};



const dataForRussia = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Macedonia", "12 June 2021", "Stadio Olimpico"],
    ["Wales", "16 June 201", "Baku Olympic Stadium"],
    ["Switzerland", "20 June 2021", "Baku Olympic Stadium"],
  ],
};

const dataForAustria = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Macedonia", "13 June 2021", "National Arena"],
    ["Netherlands", "18 June 201", "Amsterdam ArenA"],
    ["Austria", "21 June 2021", "National Arena"],
  ],
};


const dataForNetherlands = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Ukraine", "14 June 2021", "Amsterdam ArenA"],
    ["Austria", "18 June 2021", "Amsterdam ArenA"],
    ["Macedonia", "21 June 2021", "Amsterdam ArenA"],
  ],
};



const dataForMacedonia = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Austria", "13 June 2021", "National Arena"],
    ["Ukraine", "17 June 2021", "National Arena"],
    ["Netherlands", "21 June 2021", "Amsterdam ArenA"],
  ],
};


const dataForUkraine = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Netherlands", "14 June 2021", "Amsterdam ArenA"],
    ["Macedonia", "17 June 2021", "National Arena"],
    ["Austria", "21 June 2021", "National Arena"],
  ],
};

const dataForCrotia = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["England", "13 June 2021", "Wembley Stadium"],
    ["Czech", "18 June 2021", "Hampden Park"],
    ["Scotland", "23 June 2021", "Hampden Park"],
  ],
};

const dataForChezechia = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Scotland", "14 June 2021", "Hampden Park"],
    ["Croatia", "18 June 201", "Hampden Park"],
    ["England", "23 June 2021", "Wembley Stadium"],
  ],
};


const dataForEngland = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Croatia", "13 June 2021", "Wembley Stadium"],
    ["Scotland", "19 June 2021", "Wembley Stadium"],
    ["Czech", "23 June 2021", "Wembley Stadium"],
  ],
};


const dataForScotland = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Czech", "14 June 2021", "Hampden Park"],
    ["England", "19 June 2021", "Wembley Stadium"],
    ["Croatia", "23 June 2021", "Hampden Park"],
  ],
};

const dataForPoland = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Slovakia", "14 June 2021", "Krestovsky Stadium"],
    ["Spain", "20 June 2021", "Estadio de La Cartuja"],
    ["Sweden", "23 June 2021", "Krestovsky Stadium"],
  ],
};



const dataForSlovakia = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Poland", "14 June 2021", "Krestovsky Stadium"],
    ["Sweden", "18 June 2021", "Krestovsky Stadium"],
    ["Spain", "23 June 2021", "Estadio de La Cartuja"],
  ],
};



const dataForSpain = {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Sweden", "15 June 2021", "Estadio de La Cartuja"],
    ["Poland", "20 June 2021", "Estadio de La Cartuja"],
    ["Slovakia", "23 June 2021", "Estadio de La Cartuja"],
  ],
};



const dataForSweden= {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Spain", "15 June 2021", "Estadio de La Cartuja"],
    ["Slovakia", "18 June 2021", "Krestovsky Stadium"],
    ["Poland", "23 June 2021", "Krestovsky Stadium"],
  ],
};



const dataForFrance= {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Germany", "16 June 2021", "Allianz Arena"],
    ["Hungary", "19 June 2021", "Ferenc Puskás Stadium"],
    ["France", "24 June 2021", "Ferenc Puskás Stadium"],
  ],
};




const dataForGermany= {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["France", "16 June 2021", "Allianz Arena"],
    ["Portugal", "19 June 2021", "Allianz Arena"],
    ["Hungary", "24 June 2021", "Allianz Arena"],
  ],
};




const dataForHungary= {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Portugal", "15 June 2021", "Ferenc Puskás Stadium"],
    ["France", "19 June 201", "Ferenc Puskás Stadium"],
    ["Germany", "24 June 2021", "Allianz Arena"],
  ],
};




const dataForPortugal= {
  headers: ["Against", "Date", "Ground"],
  rows: [
    ["Hungary", "15 June 2021", "Ferenc Puskás Stadium"],
    ["Germany", "19 June 201", "Allianz Arena"],
    ["France", "24 June 2021", "Ferenc Puskás Stadium"],
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
    console.log(info);
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
