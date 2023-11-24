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
import Portal from "./components/Portal";
import ModalBase from "./components/modal/ModalBase";
import ModelAdvanced from "./components/modal/ModelAdvanced";

function App() {
  // const [show, setShow] = useState(false);
  // const { show, nodeRef, setShow } = useClickOutSide();
  const [openModalBase, setOpenModalBase] = useState(false);
  const [openModalBase2, setOpenModalBase2] = useState(false);
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
      {/* <ModalPropTypes open={show}></ModalPropTypes> */}
      <button
        onClick={() => setOpenModalBase(true)}
        className="p-5 m-3 mr-5 text-white bg-purple-500 rounded-lg"
      >
        Show button
      </button>
      <button
        onClick={() => setOpenModalBase2(true)}
        className="p-5 m-3 text-white bg-purple-500 rounded-lg"
      >
        Show button2
      </button>
      {/* <Portal visible={true}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia
        ipsum amet voluptates modi quas hic dolore quia reprehenderit, at quo
        quasi accusamus explicabo itaque facilis consectetur repudiandae. Amet,
        commodi!
      </Portal> */}
      {/* <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="p-10 bg-white rounded-lg w-[350px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          tempore sequi et libero iusto at! Perspiciatis illum ad eius
          consequatur. Voluptas quidem, expedita amet quia laudantium quae
          architecto asperiores aperiam.
        </div>
      </ModalBase> */}
      <ModelAdvanced
        visible={openModalBase2}
        onClose={() => setOpenModalBase2(false)}
      >
        <div className="relative z-10 w-full p-10 bg-white rounded-lg modal-content max-w-[482px]">
          <span
            className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer -translate-y-2/4 translate-x-2/4"
            onClick={() => setOpenModalBase2(false)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
                fill="#84878B"
              />
            </svg>
          </span>
          <h2 className="mb-5 text-4xl font-medium text-center text-black">
            Welcome Back!
          </h2>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="email" className="text-sm cursor-pointer">
              Email address
            </label>
            <input
              type="email"
              className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="password" className="text-sm cursor-pointer">
              Password
            </label>
            <input
              type="password"
              className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full p-4 text-base font-semibold text-white bg-[#316BFF] rounded-lg">
            Sign in
          </button>
        </div>
      </ModelAdvanced>
    </div>
  );
}

export default App;
