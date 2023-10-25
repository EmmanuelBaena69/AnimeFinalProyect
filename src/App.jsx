import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import style from "./styles/style.css";
import PublicLayout from "./layouts/PublicLayout";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route path="" element={<Main />} />

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
