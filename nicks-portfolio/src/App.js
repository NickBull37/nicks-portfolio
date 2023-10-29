import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from "./components";

function App() {
  return (

    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<HomePage />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
