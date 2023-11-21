// import { ThemeProvider } from "styled-components";
// import "./App.css";
// import CardList from "./components/card/CardList";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Counter from "./components/counter/Counter";
import CounterUseCallback from "./components/counter/CounterUseCallback";
import HackNews from "./components/news/HackNews";
// import CardTailwind from "./components/card/CardTailwind";
import Photos from "./components/photo/Photos";
import Photos2 from "./components/photo/Photos2";
// import Game from "./components/tictactoe/Game";
import Game from "./components/tictactoe-reducer/Game";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import PhotoClone from "./components/photo/PhotoClone";
import HackNewsReducer from "./components/news/HackNewsReducer";
import SimpleClock from "./components/clock/SimpleClock";
// import Input from "./components/input/Input";
import TextareaAutoResize from "./components/textarea/TextareaAutoResize";
import Dropdown from "./components/dropdown/Dropdown";
import Blog from "./components/blog/Blog";
import BlogCustomHook from "./components/blog/BlogCustomHook";
import { useState } from "react";
import HackNewCustomHook from "./components/news/HackNewCustomHook";
import DropdownCustomHook from "./components/dropdown/DropdownCustomHook";
import useClickOutSide from "./hooks/useClickOutSide";
import SidebarMenu from "./components/sidebar/SidebarMenu";
import Form from "./form/Form";
import Form2 from "./form/Form2";
import MovieSearchApp from "./components/movie/MovieSearchApp";
import SignUpForm from "./form/SignUpForm";
import SignUpFormYup from "./form/SignUpFormYup";
import SignUpFormV2 from "./form/SignUpFormV2";
import SignUpFormFinal from "./form/SignUpFormFinal";
import SignUpFormFinalV2 from "./form/SignUpFormFinalV2";
import SignUpFormHook from "./form/SignUpFormHook";
import SignUpFormHookV2 from "./form/SignUpFormHookV2";
import SignUpFormHookV3 from "./form/SignUpFormHookV3";
import Modal from "./components/modal/Modal";
import ModalPropTypes from "./components/modal/ModalPropTypes";

function App() {
  const [show, setShow] = useState(false);
  // const { show, nodeRef, setShow } = useClickOutSide();
  return (
    <div>
      {/* <button onClick={() => setShow(!show)}>Toggle show</button>
      {show && <HackNewCustomHook></HackNewCustomHook>} */}
      {/* <div className="text-lg text-center">Hello World</div> */}
      {/* <ThemeProvider theme={theme}>
      </ThemeProvider> */}
      {/* <GlobalStyle></GlobalStyle> */}
      {/* <button
        className="p-2 text-white bg-blue-500"
        onClick={() => {
          console.log("Click");
          setShow(!show);
        }}
      >
        Primary button
      </button> */}
      {/* <Button secondary>Secondary button</Button> */}
      {/* <Card></Card> */}
      {/* <Photos></Photos> */}
      {/* <PhotoClone></PhotoClone> */}
      {/* <CounterUseCallback></CounterUseCallback> */}
      {/* <Photos2></Photos2> */}
      {/* <Counter></Counter> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* <HackNews></HackNews> */}
      {/* <HackNewsReducer></HackNewsReducer> */}
      {/* <SimpleClock></SimpleClock> */}
      {/* <Input></Input> */}
      {/* <TextareaAutoResize></TextareaAutoResize> */}
      {/* <Counter></Counter> */}
      {/* <Dropdown></Dropdown> */}
      {/* <Blog></Blog> */}
      {/* <BlogCustomHook></BlogCustomHook> */}
      {/* <DropdownCustomHook ></DropdownCustomHook> */}
      {/* <SidebarMenu show={show} ref={nodeRef}></SidebarMenu> */}
      {/* <Form></Form> */}
      {/* <Form2></Form2> */}
      {/* <MovieSearchApp></MovieSearchApp> */}
      {/* <SignUpForm></SignUpForm> */}
      {/* <SignUpFormYup></SignUpFormYup> */}
      {/* <SignUpFormV2></SignUpFormV2> */}
      {/* <SignUpFormFinal></SignUpFormFinal> */}
      {/* <SignUpFormFinalV2></SignUpFormFinalV2> */}
      {/* <SignUpFormHook></SignUpFormHook> */}
      {/* <SignUpFormHookV2></SignUpFormHookV2> */}
      {/* <SignUpFormHookV3></SignUpFormHookV3> */}
      <ModalPropTypes open={show}></ModalPropTypes>
      <button
        onClick={() => setShow(true)}
        className="p-5 m-3 text-white bg-purple-500 rounded-lg"
      >
        Show button
      </button>
    </div>
  );
}

export default App;
