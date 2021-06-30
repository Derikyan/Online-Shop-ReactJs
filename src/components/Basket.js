import shopcart from '../images/shopcart.png';
import BasCard from './BasCard';

function Basket({basData}) {
    return (
      <div className="basket">
        <img src={shopcart} className="shopcart" alt="shopcart"/>
        <div className="goods">
            <div className="good">
            {basData.map( (d) => 
              <BasCard key={d.id} obj={d}/> 
            )}
            </div>
            <div className="order">
                <span>Total price: </span>
                <input value="Order" type="button"/> 
                {/* onClick={} */}
            </div>
        </div>
      </div>
    );
  }
  
  export default Basket;
  