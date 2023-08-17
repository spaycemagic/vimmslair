import React, { Component } from "react";


class Emulair extends Component {
  render() {
    return (
      <div>
        <h2>Click Here! To view our Emulators!</h2>
          <a href="https://vimm.net/?p=emulate">
            <img src={require('./vimlogo2.png')} />
          </a>
      </div>
    );
  }
}



export default Emulair;