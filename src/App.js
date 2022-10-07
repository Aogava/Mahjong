import './App.css';
import CardTable from "./components/CardTable/CardTable"

function App(props) {
  return (
    <div className="App">
      <h1 className="header-line">Mahjong</h1>
      <CardTable finalCardsArray={props.finalCardsArray}></CardTable>
    </div>
  );
}

export default App;
