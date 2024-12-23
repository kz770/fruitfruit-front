import './App.css';
import Main from './pages/Main';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
  );
}

export default App;
