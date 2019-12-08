import React, { Component } from "react";
import "./styles.scss";

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <div className="banner-1">
          <img
            src={require("../../Assets/Images/back-1.jpg")}
            className="banner-1-img"
          />

          <div className="banner-1-heading-wrapper">
            <h1 className="banner-1-heading">Unique Herbal Beauty Parlour</h1>
            <div className="contact-us-btn-wrapper" onClick={()=>alert("contact us")}>
                <a className="contact-us-btn">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
