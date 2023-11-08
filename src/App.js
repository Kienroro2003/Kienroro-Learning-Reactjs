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
import Photos2 from "./components/photo/Photos2"


function App() {
 
  return (
    <div>
      {/* <ThemeProvider theme={theme}>
      </ThemeProvider> */}
        {/* <GlobalStyle></GlobalStyle> */}
      {/* <Photos></Photos> */}
      <Photos2></Photos2>
      {/* <Counter></Counter> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* <HackNews></HackNews> */}
      {/* <Counter></Counter> */}
    </div>
  );
}

export default App;
