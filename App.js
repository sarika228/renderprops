import React, { Component } from 'react'
import User from "./components/User"
import Counter from "./components/Counter"
import ClickCounter from "./components/ClickCounter"
import HoverCounter from "./components/HoverCounter"


class App extends Component {
  render() {
    return (
      <div>
        <Counter>
          {(count,incrementCount)=> (
            <ClickCounter count={count} incrementCount={incrementCount}/>
          )}
        </Counter>
         <Counter>
         {(count,incrementCount)=> (
        <HoverCounter count={count} incrementCount={incrementCount}/>
        )}
        </Counter>
         {/* <User render={(isLoggedIn)=> isLoggedIn ? "Sarika" : "Guest"}/> */}
      </div>
    )
  }
}

export default App
