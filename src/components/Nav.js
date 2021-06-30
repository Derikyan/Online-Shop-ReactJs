import drone from '../images/drone.png';
import Basket from './Basket';

function Nav({basData}) {  
  console.log(basData)
    return (
      <div className="header">
        <img src={drone} className="logo" alt="logo"/>
        <nav className="nav">
          <div className="navBar">
          <a href="#">Mavic</a>
          <a href="#">Inspire</a>
          <a href="#">DJL FVP</a>
          <a href="#">Enterprice</a>
          <a href="#">Ryze Tech</a>
          <div class="animation start-home"></div>
          </div>
        </nav>
        <Basket basData={basData}/>
      </div>
    );
  }
  
  export default Nav;
  