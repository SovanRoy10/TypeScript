import "./App.css";
import Button from "./components/Button";
import MyButton1 from "./components/Button1";
// import Form from "./components/Form";

import {CounterProvider} from './provider/Counter'
function App() {
  return (
    <CounterProvider>
      <Button text="Click Me" onClick={()=> alert("Okay")}/>
      {/* <Button text="Click Me Again"/> */}
      {/* <Form/> */}
      <MyButton1 text="Click Me" onClick={()=> alert("Okay")}/>
    </CounterProvider>
  );
}

export default App;
