import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
import { Navigation } from './components/Nav/Nav';
import { Todocard } from './components/Card/Card'


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Todocard></Todocard>
    </div>
  );
}

export default App;
