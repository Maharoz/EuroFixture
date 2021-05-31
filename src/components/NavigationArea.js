import styles from "./NavigationArea.module.css";
import NavigationTile from "./NavigationTile";

const navigationData = [
  {
    key: 1,
    navigationName: "Group Stage",
  },
  {
    key: 2,
    navigationName: "Knock outs",
  },
];

const NavigationArea = (props) => {
  const selectedNavigationHandler = (selectedNav) => {
    props.clickedAppNavigationData(selectedNav);
  };

  return (
    <div>
      <ul className={styles.navigationList}>
        {navigationData.map((card) => (
          <NavigationTile
            key={card.key}
            id={card.key}
            navigationName={card.navigationName}
            clickedNavigationData={selectedNavigationHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavigationArea;
