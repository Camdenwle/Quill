import {Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { ContractList } from "./pages/ContractList"
import React, {useEffect, useState } from 'react'
import './App.css'
import Posts from './components/Posts'
import PostLoadingComponent from './components/PostLoading'


function App() {
  const PostLoading = PostLoadingComponent(Posts)
  const [appState, setAppState] = useState({
    loading: false, 
    posts: null, 
  })
  useEffect(() => {
    setAppState({ loading: true })
    const apiUrl = 'http://127.0.0.1:8000/api/'
    fetch(apiUrl)
        .then((data) => data.json())
        .then((posts) => {
          setAppState({ loading: false, posts: posts})
        })
      }, [setAppState]);
      return (
        <div className="App">
          <h1>Latest Post</h1>
          <PostLoading isLoading={appState.loading} posts={appState.posts}></PostLoading>
        </div>
      )
}

export default App;


// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/contracts" element={<ContractList />} />
//       <Route path="/example-connection" element={<ConnectionExample />} />
//     </Routes>
    
//   )

// }


// class ConnectionExample extends React.Component {
//   componentDidMount() {
//     const apiUrl = 'http://127.0.0.1:8000/api/';
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }
//   render() {
//     return <div>Example connection</div>
//   }
// }



// export default ConnectionExample
