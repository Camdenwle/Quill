import { Link, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Chatbot } from "./pages/Chatbot"
import { Display } from "./pages/Display"



function App() {
  return (
    <div>
      <h1>
        <Link to="/" > Home </Link>
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Chatbot />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;
