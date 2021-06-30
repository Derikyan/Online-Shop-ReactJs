import {useState} from 'react';

const Card = ({name, description, price, image, status, basData, setBasData, id, all}) => {

    const[add,setAdd] = useState(status);
    
    const edit = () => {    
      setAdd(!add);
      setBasData([
        ...basData,
        {
          id,
          name,
          image,
          price
        }
      ]);
    };
    const del = () => {
      setAdd(!add);
      setBasData(basData.filter((d) => d.i != id));
    };
    return (
        <div className="wrapper">
          <div className="container">
            <div className="top" style={{backgroundImage: `url(${image})`}}></div>
            <div className={`bottom ${!add ? 'clicked' : ""}`}>
              <div className="left">
                <div className="details">
                  <h1>{name}</h1>
                  <p>{price}</p>
                </div>
                <div className="buy" onClick={edit}><i className="material-icons">add_shopping_cart</i></div>
              </div>
              <div className="right">
                <div className="done"><i className="material-icons">done</i></div>
                <div className="details">
                  <h1>{name}</h1>
                  <p>Added to your cart</p>
                </div>
                <div className="remove" onClick={del}><i className="material-icons">clear</i></div>
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="icon"><i className="material-icons">info_outline</i></div>
            <div className="contents">
              <pre>
                {description}
              </pre>
            </div>
          </div>
        </div>
    );
  }
  
  export default Card;
  