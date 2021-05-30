import "./App.css";
import * as React from "react";
import MainHeader from "./components/MainHeader";
import CountryArea from "./components/CountryArea";
import NavigationArea from "./components/NavigationArea";
import Knockouts from "./components/knockouts";

function App() {
  const [page, setPage] = React.useState('');

  const [show, setshow] = React.useState('');

  React.useEffect(() => {
    setshow(true);
    // console.log("on use effect");
    // console.log(page);
    // console.log("on use effect");
  }, []);

  const appNavigationHandler = (selectedNav) => {
    // console.log("In APP JS");
    // console.log(selectedNav);
    // console.log("In APP JS");

    setPage({
      id: selectedNav.id,
      name: selectedNav.navigationName,
    });

    console.log(page);

    if (page.name === 'Group Stage') {
      setshow(true);
      console.log(show);
    } 
    
    if (page.name === 'Knock outs') {
      setshow(false);
      console.log(show);
    }
  };

  return (
    <div>
      <MainHeader />
      <section id="countries">
        <NavigationArea clickedAppNavigationData={appNavigationHandler} />
        {show && (
          <CountryArea />
        )}
        {!show && <Knockouts />}
      </section>
    </div>
  );
}

export default App;
