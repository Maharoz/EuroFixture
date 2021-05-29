import classes from "./MainHeader.Module.css";

const MainHeader = () => {
  return (
    <div>
      <header className={classes.header}>
          <h1 className="text-center">Euro 2021 Fixture</h1>
      </header>
    </div>
  );
};

export default MainHeader;
