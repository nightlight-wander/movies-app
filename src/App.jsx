import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { Series } from "./pages/Series/Series";
import { Header } from "./components/Header/Header";
import { BottomNav } from "./components/BottomNav/BottomNav";
import "./App.css";
function App() {
  return (
    <>
    <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/series" element={<Series />}></Route>
        </Routes>
      </div>
      <BottomNav />
    </>
      
  );
}

export default App;
