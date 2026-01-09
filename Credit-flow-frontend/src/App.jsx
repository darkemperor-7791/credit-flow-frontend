import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate
} from "react-router-dom";


import GetStartedPage from "./Pages/login.jsx";
import VerifyCardPage from "./Pages/card-verify.jsx";


/* ---------------- App Root ---------------- */
export default function App() {
  const [links, setLinks] = useState([]);

  function addLink(title, url) {
    setLinks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        url
      }
    ]);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStartedPage />}/>
        <Route path="/card-verify" element={<VerifyCardPage />}/>
      </Routes>
    </Router>
  );
}
