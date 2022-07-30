
import "./app.css"
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Hotel from "./Pages/SingleHotel/Hotel";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/hotel" element={<List />}></Route>
            <Route path="/hotel/:id" element={<Hotel />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
