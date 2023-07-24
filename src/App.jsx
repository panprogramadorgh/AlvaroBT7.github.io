import Input from "./Input";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title">El juego de la caracola magica</h1>
      </div>
      <div className="input-container">
        <Input />
      </div>
    </div>
  );
};

export default App;
