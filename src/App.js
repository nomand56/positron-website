import './App.css';
import {Navbar} from "./components/index"
import Header from './containers/Header/Header';
function App() {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar/>
<Header/>
      </div>  

    </div>
  );
}

export default App;
