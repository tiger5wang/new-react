import React from 'react';
import logo from './logo.svg';
// import './App.css';
import {ContextHomePage} from './pages/context & HOC/ContextHomePage'
import HighOrderComp from "./pages/context & HOC/HighOrderComp";


function App() {
  return (
    <div className="App">
        {/*上线文 context*/}
        {/*<ContextHomePage/>*/}

        {/*高阶组件*/}
        <HighOrderComp/>
    </div>
  );
}

export default App;
