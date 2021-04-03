import React from "react";
import BrowserInput from '../BrowserInput/BrowserInput';
import "./Browser.css";

const Browser = () => {
  //TODO
  //General styling

  return (
    <div className="BrowserContainer">
      <section className="UnsplashContainer">
        <header className="UnsplashHeader">UNSPLASH</header>
        <p>The Internet's source of freely-usable images</p>
        <p>Powered by creators everywhere</p>
        <BrowserInput />
      </section>
    </div>
  );
};

export default Browser;
