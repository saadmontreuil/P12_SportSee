import './App.css';
import BarHorizontal from './components/BarHorizontal/BarHorizontal';
import BarVertical from './components/BarVertical/BarVertical';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
        <BarHorizontal />
        <BarVertical />
        <Home />

    </div>
  );
}

export default App;
