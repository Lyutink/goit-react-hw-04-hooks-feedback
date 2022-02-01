import React, { Component } from "react";

import Section from "./Components/Section/Section";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Statistics from "./Components/Statistics/Statistics";
import NotificationFeedback from "./Components/NotificationFeedback/NotificationFeedback";

class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  handleChange = (event) => {
    const leaveItem = event.currentTarget.textContent;
    this.setState((prevState) => ({ [leaveItem]: prevState[leaveItem] + 1 }));
  };

  countTotalFeedback() {
    let total = 0;
    Object.values(this.state).map((value) => (total += value));
    return total;
  }

  countPositiveFeedback() {
    const goodFeedback = this.state.Good;
    const total = this.countTotalFeedback();
    return Math.round((goodFeedback / total) * 100);
  }

  render() {
    //const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleChange}
          ></FeedbackOptions>
        </Section>

        <Section title={"Statistics"}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              options={this.state}
              totalFeedbak={this.countTotalFeedback()}
              positivFeedback={this.countPositiveFeedback()}
            ></Statistics>
          ) : (
            <NotificationFeedback message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
