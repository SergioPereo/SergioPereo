import React from 'react';
import './index.css';
import App from './App';
import * as ReactDOM from "react-dom/client";
import ResponsiveAppBar from './components/ResponsiveAppBar';
import CVPage from './components/CVPage';
import BlogPage from './components/BlogPage';
import "./styles/index.css";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const router = createBrowserRouter([
  {
    path: "/",
    element: <><ResponsiveAppBar/><App/></>,
  },
  {
    path: "/CV",
    element: <><ResponsiveAppBar/><CVPage/></>
  },
  {
    path: "/Blog",
    element: <><ResponsiveAppBar/><BlogPage/></>
  }
],{
  basename: "/SergioPereo/"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
