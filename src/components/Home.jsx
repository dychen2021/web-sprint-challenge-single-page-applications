import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div id="page">
      <header>
        <h1>Bloomtech</h1>
        <div id="spacer1"></div>
        <a href="/">Home</a>
        <a href="/">Help</a>
      </header>
      <div id="top">
        <h2>Your Favorite Food Delivered While Coding</h2>
        <a href="/Form" id="order-pizza">Pizza?</a>
      </div>
      <div id="shop-title">
        <h3>Food Delivery in Gotham City</h3>
      </div>
      <div id="bot">
        <div id="store">
          <h4>Store 1</h4>
          <img src="../public/logo192.png"/>
          <p>$ - American - Fast Food - Burgers</p>
          <div><p>20-30 Min</p></div> <div><p>$5.99 Delivery Fee</p></div>
        </div>
        <div id="store">
          <img></img>
          <h4>Store 2</h4>
          <p>$ - American - Fast Food - Burgers</p>
          <div><p>20-30 Min</p></div> <div><p>$5.99 Delivery Fee</p></div>
        </div>
        <div id="store">
          <img></img>
          <h4>Store 3</h4>
          <p>$ - American - Fast Food - Burgers</p>
          <div><p>20-30 Min</p></div> <div><p>$5.99 Delivery Fee</p></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
