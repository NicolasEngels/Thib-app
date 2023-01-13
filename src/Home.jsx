import { Link} from "react-router-dom";

const Home = () => {
  return (
    <body className="h-screen w-screen flex flex-col items-center justify-center bg-bggrad bg-cover bg-no-repeat box-border font-orbitron">

      <div id="main"></div>

       <div id="glassbox" className="w-[30%] h-[80%] flex flex-col items-center justify-center">

        <div id="logofull" className="w-full h-[60%] mt-[5%] flex flex-col items-center justify-start font-audiowide">

          <img id="logomed" className="h-[70%]" src={require("../img/logomed.png")}alt="funny medusa logo"/>

          <div id="ashun" className="w-full h-[30%] flex flex-col items-center justify-center">

            <h1 id="logothib" className="">
              THIB
            </h1>

          </div>

        </div>

        <div className="w-[60%] h-[30%] mb-[5%] flex flex-col items-center justify-end">

          <div id="inputcontainer"className="w-full h-[40%] flex flex-col items-center justify-end">

            <input type="text" id="myinput" placeholder="Your Nickname" className="text-center" />

          </div>

          <div id="container" className="w-full h-[60%] flex flex-col items-center justify-end" >

            <div id="btn">
              <Link to="/lobby">CREATE A LOBBY</Link>
            </div>

          </div>

        </div>

      </div>
      
    </body>
  );
};

export default Home;

{/* <div id="body">
  <div id="bg"></div>
  <main id="main">
    <img src={require("./../img/thiblebg.png")} id="logo"></img>

    <h1 id="title">THIB</h1>

    <form id="form">
      <p>Choose a Nickname</p>
      <input type="text"></input>
    </form>

    <div className="container" id="container">
      <div className="btn">
        <Link to="/lobby">CREATE A LOBBY</Link>
      </div>
    </div>
  </main>
</div>; */}
