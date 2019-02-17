import React, { Component } from "react";

import twitterLogo from "../twitter.svg";
import "./Timeline.css";

export default class TimeLine extends Component {
  state = {
    newTweete: ""
  };

  handleNewTweet = e => {
    if (e.keyCode !== 13) return;

    const content = this.state.newTweete;
    const author = localStorage.getItem("@GoTwitter:username");

    console.log(content, author);
  };

  handleInputChange = e => {
    this.setState({ newTweete: e.target.value });
  };

  render() {
    return (
      <div className="timeline-wrapper">
        <img height={24} src={twitterLogo} alt="GoTwitter" />
        <form>
          <textarea
            value={this.state.newTweete}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder="O que esta acontecendo?"
          />
        </form>
      </div>
    );
  }
}
