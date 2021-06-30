import Nav from './components/Nav';
import Mavic from './pages/Mavic';
import './css/app.scss';
//import inf from './data';
import {useState} from 'react';

function App() {

  const[basData, setBasData] = useState([]);
  
  return (
    <div className="app">
      <Nav basData={basData}/>
      <Mavic basData={basData} setBasData={setBasData}/> {/*data={data}*/}
    </div>
  );
}

export default App;
