import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./task";
import NavBar1 from "./component1/tailwind.jsx";
import Website from "./component2/task1";
import Form from "./component3/form"
import TodoList from "./component4/TodoList"
import store from './component4/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/component1/tailwind" element={<NavBar1 />} />
        <Route path="/component2/task1" element={<Website />} />
        <Route path="/component3/form" element={<Form />} />
        <Route path="/component4/TodoList" element={<Provider store={store}>
      <TodoList />
    </Provider>} />
      </Routes>
    </>
  );
};

export default App;
