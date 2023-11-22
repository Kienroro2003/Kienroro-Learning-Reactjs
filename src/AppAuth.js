// import { ThemeProvider } from "styled-components";
// import "./App.css";
// import CardList from "./components/card/CardList";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Timer from "./components/Timer";
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
import { CountProvider, useCount } from "./components/context/countContext";
import { Routes, Route } from "react-router-dom";
import HeaderMain from "./components/HeaderMain";
import { useAuth, AuthProvider } from "./components/context/auth-context";

function CountDisplay() {
  const [count] = useCount();
  // console.log("CountDisplay ~ context", context);
  return <div>The count is: {count}</div>;
}

function Counter() {
  const [, setCount] = useCount();
  // const setCount = () => {};
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      onClick={increment}
      className="p-4 font-semibold text-white bg-purple-500 rounded-lg"
    >
      Increment count
    </button>
  );
}

function AppAuth() {
  return (
    // <div className="flex items-center justify-center p-5 gap-x-5">
    //   <CountProvider>
    //     <CountDisplay></CountDisplay>
    //     <Counter></Counter>
    //   </CountProvider>
    // </div>
    <AuthProvider>
      <HeaderMain></HeaderMain>
    </AuthProvider>
  );
}

export default AppAuth;
