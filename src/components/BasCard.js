import x from '../images/x.png';

function BasCard({obj}) {
  console.log(obj);
    return (
      <div className="basCard">
        <img src={obj.image} className="basImg" alt="basImg"/>
        <div className="basDesc">
            <span>{obj.name}</span>
            <span>{obj.price}</span>
        </div>
        <img src={x} className="x" alt="x"/>
      </div>
    );
  }
  
  export default BasCard;
  