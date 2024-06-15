import logo from './logo.svg';
import './App.css';
import ChartsOverviewDemo from './barchart';

function App() {
  return (
    <div className="App" style={{
      display:"flex", 
      justifyContent:"center", 
      alignItems:"center",
      height:"100vh"
      }}>
      <div style={{width:"700px"}}>
        <ChartsOverviewDemo></ChartsOverviewDemo>
      </div>
    </div>
  );
}

export default App;
