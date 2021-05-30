import styles from "./NavigationTile.module.css";

const NavigationTile = (props) => {
  return (
   
      <li className={styles.navigationTile}>
        <h4 className={styles.navigationTitle}> {props.navigationName}</h4>
      </li>
    
  );
};

export default NavigationTile;
