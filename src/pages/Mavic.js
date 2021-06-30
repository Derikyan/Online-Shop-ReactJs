import Card from '../components/Card';
import {useState,useEffect} from 'react';

function Mavic({basData,setBasData}) {

  const [dataMav,setDataMav] = useState([]);
  function getResult(res){
    var jsonData = JSON.parse(res);
    setDataMav(jsonData);
  }
  
  useEffect(() => {
    fetch("http://localhost/shop/index2.php")
    .then(response => response.text())  
    //.then((data) => data.json()))
    .then(result=>getResult(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mavic">
      {dataMav.map( (d) => 
      <Card basData={basData} setBasData={setBasData} name={d.name} description={d.description} image={d.image} status={d.status} price={d.price} key={d.id} id={d.id} all={d}/> 
      )}
    </div>
  );
  
}

export default Mavic;
