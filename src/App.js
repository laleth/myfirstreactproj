import './App.css';
import Home from './Componenet/Home';


function App() {
  const headings="MY First React App";
  return (
    <div className="App">
      <Home abcd={headings}/>
    </div>
  );
}

export default App;
