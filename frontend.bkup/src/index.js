import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SpacexPastTable from "./pages/spacex-past-table/index"
import SpacexFutureTable from "./pages/spacex-future-table/index"
import SpacexLatestTable from "./pages/spacex-latest-table/index"
import SpacexNextTable from "./pages/spacex-next-table/index"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SpacexPastTable/>} exact />
      <Route path="/proximos" element={<SpacexFutureTable/>} exact />
      <Route path="/proximo" element={<SpacexNextTable/>} exact />
      <Route path="/ultimos" element={<SpacexPastTable/>} exact />
      <Route path="/ultimo" element={<SpacexLatestTable/>} exact />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
