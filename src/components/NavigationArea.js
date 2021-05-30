import styles from "./NavigationArea.module.css";
import NavigationTile from "./NavigationTile";



const navigationData = [
    {
      key: 1,
      navigationName: "Group Stage"
    },
    {
      key: 2,
      navigationName: "Knock outs"
    }
  ];


const NavigationArea = (props) => {
  return (
    <div>
      <ul className={styles.navigationList}>

        {navigationData.map((card) => (
          <NavigationTile
            key={card.key}
            id={card.key}
            navigationName={card.navigationName}
          />
        ))}
      </ul>
        
    </div>
  );
};

export default NavigationArea;
