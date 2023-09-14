import './App.css';

import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Chatbot } from "./pages/Chatbot"
import { Display } from "./pages/Display"
import axios from 'axios'
import React from 'react'



class App extends React.Component {

  state = {details: [], } 

  componentDidMount() {

  let data;
  axios.get('http://localhost:8000')
  .then(res => {
    data = res.data;
    this.setState({
      details: data
    });
  })
  .catch(err => { })
}

render() {
  return( 
    <div>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Chatbot />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </div>


    </div>
  )
}

}
export default App;




/*
This Code should be entered below the div that is below Routes
      {this.state.details.map((output, id) => (
        <div>
          <h2> {output.title} </h2>
          <h3> {output.content} </h3>
        </div>
      ))}

*/

/* This code is how to link Routers
        <h1>
          <Link to="/" > Home </Link>
        </h1>

*/