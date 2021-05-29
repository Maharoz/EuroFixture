
import './App.css';
import MainHeader from './components/MainHeader';
import CountryArea from './components/CountryArea';


function App() {
  return (
    <div>
      <MainHeader/>
      <section id="countries">
      <CountryArea/>
      </section>
      
    </div>
  );
}

export default App;
