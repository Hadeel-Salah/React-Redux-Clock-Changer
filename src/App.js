import React, { Component } from "react";
import "./App.css";
import store from './store';
import { setType, setIncrease, setDecrease } from './actions';

class App extends Component {

  render() {
    const { days, hours, minutes, seconds, activeSession } = store.getState();


    const setActiveSession = e => {
      store.dispatch(setType(e.target.value))
    };

    const handleIncreaseTime = e => {
      store.dispatch(setIncrease(e.target.dataset.type,activeSession))
    };
    const handleDecreaseTime = e => {
      store.dispatch(setDecrease(e.target.dataset.type,activeSession))
    };
    return (
      <div className="App">
        <header>
          <h4 className="App__subheader">BOOK NAME</h4>
          <h1 className="App__header">Understanding Redux - 1</h1>
        </header>

        <section className="Counter">
          <h4 className="App__subheader">TRY THE APP NOW</h4>

          <main className="Counter--main">
            <div className="Counter--main__session">
              <span className="Counter__text--grey">ACTIVE SESSION: </span>
              <select
                className="Counter__text--grey"
                onChange={setActiveSession}
                value={activeSession}
              >
                <option>DAYS</option>
                <option>HOURS</option>
                <option>MINUTES</option>
                <option>SECONDS</option>
              </select>
            </div>

            <div className="Counter--main__values">
              <div>
                <span className="App__text--white Counter__text--large">
                  {days}
                </span>
                <span className="Counter__text--grey">DAYS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {hours}
                </span>
                <span className="Counter__text--grey">HOURS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {minutes}
                </span>
                <span className="Counter__text--grey">MINUTES</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {seconds}
                </span>
                <span className="Counter__text--grey">SECONDS</span>
              </div>
            </div>
          </main>
          <div className="App__buttons">
            <button
              className="App__text--white"
              data-type="INCREASE"
              onClick={handleIncreaseTime}
            >
              INCREASE
            </button>
            <button
              className="App__text--white"
              data-type="DECREASE"
              onClick={handleDecreaseTime}
            >
              DECREASE
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
