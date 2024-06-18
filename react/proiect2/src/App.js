import Header from "./components/Header";

function App() {
  const name = "Paula";
  const buttonArray = [{handelClick: (e) => {alert(e.target)}, text: "Home"},
                      {handelClick: (e) => {alert(e.target)}, text: "Contact"}];
  return (
   <div>
      <Header buttonArray={buttonArray} name={name}></Header>
    </div>
  );
}

export default App;