import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div>
      <header className={classes.header}>
      <div className="heading">
          <h1 className="text-center">Euro 2021 Fixture</h1>
          </div>
      </header>
    </div>
  );
};

export default MainHeader;
