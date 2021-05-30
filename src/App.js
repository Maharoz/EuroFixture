import "./App.css";
import MainHeader from "./components/MainHeader";
import CountryArea from "./components/CountryArea";
import NavigationArea from "./components/NavigationArea";
import Button from "./components/UI/Button";

function App() {
  return (
    <div>
      <MainHeader />
      <section id="countries">
        <NavigationArea />
        <CountryArea />
      </section>
    </div>
  );
}

export default App;
