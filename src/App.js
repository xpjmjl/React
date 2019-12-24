import React, {Component} from 'react'

class App extends Component {
  render(){
    return(
      // <div>
      //   Holle JSPang
      // </div>

      //jsx
      <ul className="my-list">
        <li>{false?'jspang.com':"技术群"}</li>
        <li>i love react</li>
      </ul>
    )
  }
}
export default App;
