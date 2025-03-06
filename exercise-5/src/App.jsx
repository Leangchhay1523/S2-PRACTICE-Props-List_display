import Card from "./components/Card";
import { People } from "./data";

function App() {
  return (
  <>
    <div className="display-container">
      <h1>People</h1>
      <div className="item-container">
        {People.map(obj => {
          return <Card people={obj}/>
        })}
      </div>
    </div>
  </>);
}

export default App;
