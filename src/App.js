import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterSection from "./component/footer_section/FooterSection";
import NavbarSection from "./component/navber_section/NavbarSection";
import ProjectBox from "./component/project_box/ProjectBox";
import LiveCode from "./component/live_code/LiveCode";
import LocalCode from "./component/local_code/LocalCode"


function App() {
  return (
    <Router>
      <NavbarSection />

      <Routes>
        <Route path="/" element={<ProjectBox />} />
        <Route path="/live-code" element={<LiveCode />} />
        <Route path="/local-code" element={<LocalCode />} />
      </Routes>

      <FooterSection />
    </Router>
  );
}

export default App;
