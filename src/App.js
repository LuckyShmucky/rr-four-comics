import logo from './logo.svg';
import './App.css';
import UserInterface from "./user-interface"
import StylesContext from "./styles-context";
import {StylesProvider} from "./styles-context"



function App() {

  return (
    <main>
     <StylesProvider>
     <h1
          style={{
            color: "#FEE001",
            fontFamily: "Luminari, fantasy",
            fontSize: 50
          }}
          >
          Welcome to Comics Galore!
        </h1>
        <UserInterface />
          </StylesProvider>
    </main>
  );
}

export default App;
