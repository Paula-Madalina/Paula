import logo from './logo.svg';
import Ticket from './components/ticket.js';
import Button from './components/button.js';
import './App.css';
import Greet from './components/greet.js';
import Welcome from './components/welcome.js';
import Hello from './hello.js';
import Incrementor from './components/incrementor.js';
import Input from './components/input.js';
import Inc from './components/inc.js';
import Comments from './components/comments.js';


const message = "Hello from React";
const message2 = "bravoo";
const User = {name:"Paula", surname:"Madalina"};
const ticket = [
  {name:"Paula", concertName:"BauBau", time:"12:20"},
  {name:"Madalina", concertName:"ADB", time:"14:40"}
]


// function random() {
//   return Math.random() * 100;
// }


// function Wellcome(props) {
//   return <h1>Hello, {props.name=="Paula"?"Hello":"La"} {props.surname}</h1>
// }

function App() {
  return (
    <div>
   
      {/* <Ticket name={ticket[0].name} concertName={ticket[0].concertName} time={ticket[0].time}></Ticket> */}
      {/* <Ticket name={ticket[1].name} concertName={ticket[1].concertName} time={ticket[1].time}></Ticket> */}
      {/* {ticket.map(tick=> {
      return <Ticket name={tick.name} concertName={tick.concertName} time={tick.time}></Ticket>
        
      })}
      <Greet name="Bruce" heroname = "Batman"><p>This is children props</p></Greet>
      <Greet name="Clark" heroname = "Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroname = "Wonderful Woman"></Greet>
      <Welcome name="Bruce" heroname = "Batman"></Welcome>
      <Welcome name="Clark" heroname = "Superman"></Welcome>
      <Welcome name="Diana" heroname = "Wonderful Woman"></Welcome> */}
      {/* <Hello></Hello> */}

      {/* <Incrementor></Incrementor> */}
      {/* <Input></Input> */}
      {/* <Inc></Inc> */}
      <Comments></Comments>
      
      
   </div>
  );
}

export default App;
