/*
Parcel Functionalities 
  1.HMR- Hot Module Reload
  - File Watcher Alogirtms(Written in C++)
  2.BUNDLING
  3.MINIFYING
  4.Cleaning our Code
  5.Provides different enviroments DEV,SIT,PROD
  6.Super Fast build Algorithm
  7.Image Optimization
  8.Caching while development
  9.HTTPS support use --https
  10.Compression
  11.Makes Old browser compatibilty 
  12.Port number
  13.Consistent Hashing
*/


import App from "next/app";
import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/Header";
import { BodyComponent } from "./components/Body";
import { FooterComponent } from "./components/Footer";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { Cart } from "./components/Cart";
import { About } from "./components/About";
import { NotFound } from "./components/NotFound";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { HeaderProvider } from "./context/HeaderContext";


const AppLayout = () => (
  <>
    <HeaderProvider>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </HeaderProvider>

  </>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BrowserRouter>
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<BodyComponent />}></Route>
      <Route path="/about/" element={<About />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/restaurant/:id" element={<RestaurantMenu />}></Route>
    </Route>
  </Routes>
</BrowserRouter>);