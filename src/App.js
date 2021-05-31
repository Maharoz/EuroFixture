import "./App.css";
import * as React from "react";
import MainHeader from "./components/MainHeader";
import CountryArea from "./components/CountryArea";
import NavigationArea from "./components/NavigationArea";
import Knockouts from "./components/knockouts";
import Footer from "./Footer";

function App() {
  const [page, setPage] = React.useState("");

  const [show, setshow] = React.useState("");

  React.useEffect(() => {
    setshow(true);
  }, []);

  const appNavigationHandler = (selectedNav) => {
    console.log(selectedNav);

    if (selectedNav.navigationName === "Group Stage") {
      setshow(true);
    }

    if (selectedNav.navigationName === "Knock outs") {
      setshow(false);
    }
  };

  return (
    <div>
      <MainHeader />
      <section id="countries">
        <NavigationArea clickedAppNavigationData={appNavigationHandler} />
        {show && <CountryArea />}
        {!show && <Knockouts />}
      </section>

     <Footer/>
    </div>
  );
}

export default App;
