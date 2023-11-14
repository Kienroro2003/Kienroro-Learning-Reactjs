// import { ThemeProvider } from "styled-components";
// import "./App.css";
// import CardList from "./components/card/CardList";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Counter from "./components/counter/Counter";
import HackNews from "./components/news/HackNews";
// import CardTailwind from "./components/card/CardTailwind";
import Photos from "./components/photo/Photos";
import Photos2 from "./components/photo/Photos2";
// import Game from "./components/tictactoe/Game";
import Game from "./components/tictactoe-reducer/Game";
import Button from "./components/button/Button";
import Card from "./components/card/Card";

function App() {
  return (
    <div>
      <Card></Card>
      {/* <ThemeProvider theme={theme}>
      </ThemeProvider> */}
      {/* <GlobalStyle></GlobalStyle> */}
      {/* <Game></Game> */}
      {/* <Button>Primary button</Button>
      <Button secondary>Secondary button</Button> */}
      {/* <Photos></Photos> */}
      {/* <Photos2></Photos2> */}
      {/* <Counter></Counter> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* <HackNews></HackNews> */}
      {/* <Counter></Counter> */}
    </div>
  );
}

export default App;
