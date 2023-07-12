import { Link } from "react-router-dom";


function Sobre() {
    return (
      <div className="Sobre">
        <h1>Sobre</h1>
        <Link to="/">HOME</Link>
        <br/><br/>
      <Link to ="/contato" >contato</Link>
      </div>
    );
  }
  
  export default Sobre;
  