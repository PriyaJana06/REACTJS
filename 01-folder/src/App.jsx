import "./App.css";
// import
import Title from "./Title.jsx";

function Description(){
  return <h3>I am the Description!</h3>;
}

function App() {   // App itself is a component.
  return (
    <div>
      <h1>This is my app component</h1>
      <p>inside app component we have:</p>
      <Title/>
      <Description/>
    </div> 
  );
}

export default App
