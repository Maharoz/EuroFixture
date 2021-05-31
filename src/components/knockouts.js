import classes from "./knockouts.module.css";
import Knockout from "./Knockout";

const knockoutsData = {
  headers: ["Match No", "Teams", "Date", "Ground", "Time"],
  rows: [
    ["1", "A2 vs B2", "26 June 2021", "Amsterdam ArenA", "10 PM"],
    ["2", "A1 vs 2C", "27 June 2021", "Wembley Stadium", "1 AM"],
    ["3", "C1 vs D/E/F 3", "27 June 2021", "Ferenc Puskás Stadium", "10 PM"],
    ["4", "B1 vs A/D/E/F 3", "28 June 2021", "Estadio de La Cartuja", "1 AM"],
    ["5", "D2 vs E2", "28 June 2021", "Parken", "10 PM"],
    ["6", "F1 vs A/B/C 3", "29 June 2021", "National Arena", "1 AM"],
    ["7", "D1 vs F2", "29 June 2021", "Wembley Stadium", "10 PM"],
    ["8", "E1 vs A/B/C/D 3", "30 June 2021", "Hampden Park", "1 AM"],
  ],
};

const QuaterFinalData = {
  headers: ["Match No", "Teams", "Date", "Ground", "Time"],
  rows: [
    [
      "Q1",
      "Winner 6 vs Winner 5",
      "2 July 2021",
      "Krestovsky Stadium",
      "10 PM",
    ],
    ["Q2", "Winner 4 vs Winner 2", "3 July 2021", "Allianz Arena", "1 AM"],
    [
      "Q3",
      "Winner 3 vs Winner 1",
      "3 July 2021",
      "Baku Olympic Stadium",
      "10 PM",
    ],
    ["Q4", "Winner 8 vs Winner 7", "4 July 2021", "Stadio Olimpico", "1 AM"],
  ],
};

const SemiFinalData = {
  headers: ["Match No", "Teams", "Date", "Ground", "Time"],
  rows: [
    [
      "SF1",
      "Winner QF2 vs Winner QF1",
      "7 July 2021",
      "Wembley Stadium",
      "1 AM",
    ],
    [
      "SF2",
      " Winner QF4 vs Winner QF3 ",
      "8 July 2021",
      "Wembley Stadium",
      "1 AM",
    ],
  ],
};

const FinalData = {
  headers: ["Match No", "Teams", "Date", "Ground", "Time"],
  rows: [
    [
      "Final",
      "Winner SF1 vs Winner SF2",
      "12 July 2021",
      "Wembley Stadium",
      "1 AM",
    ],
  ],
};
const Knockouts = (props) => {
  return (
    <div>
      <Knockout roundName="Round Of 16" knockoutsData={knockoutsData} />
      <Knockout roundName="Quarter Finals" knockoutsData={QuaterFinalData} />
      <Knockout roundName="Semi Finals" knockoutsData={SemiFinalData} />
      <Knockout roundName="Final" knockoutsData={FinalData} />
    </div>
  );
};

export default Knockouts;
