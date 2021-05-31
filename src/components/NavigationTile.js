import styles from "./NavigationTile.module.css";

const NavigationTile = (props) => {
  const navigationClickHandler = () => {
    if (props.id == 1) {
      var info = {
        id: props.id,
        navigationName: props.navigationName,
      };
    }

    if (props.id == 2) {
      var info = {
        id: props.id,
        navigationName: props.navigationName,
      };
    }

    props.clickedNavigationData(info);
  };

  return (
    <li
      className={styles.navigationTile}
      id={props.id}
      onClick={navigationClickHandler}
    >
      <h4 className={styles.navigationTitle}> {props.navigationName}</h4>
    </li>
  );
};

export default NavigationTile;
