import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    render(){
        return(
            <div>
              <h1>Welcome to React</h1>
              <p>Learn react with webpack</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
