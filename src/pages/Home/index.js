import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <h1>Bem vindo home</h1>
      <br/><br/>
      <Link to ="/sobre" >Sobre</Link>
      <br/><br/>
      <Link to ="/contato" >contato</Link>
    </div>


  );
}

export default Home;
