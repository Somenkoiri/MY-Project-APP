import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterSection from "./component/footer_section/FooterSection";
import NavbarSection from "./component/navber_section/NavbarSection";
import ProjectBox from "./component/project_box/ProjectBox";
import LiveCode from "./component/live_code/LiveCode";
import LocalCode from "./component/local_code/LocalCode"
import GitHubPageSection from "./all_pages_layout/local_code_page/GitHubPageSection";
import DeveloperCodeLocal from "./all_pages_layout/local_code_page/DeveloperCodeLocal";
import YoutubeCloneLocal from "./all_pages_layout/local_code_page/YoutubeCloneLocal";
import MainCareLocal from './all_pages_layout/local_code_page/MainCareLocal';
import CarBookingWebLoca from './all_pages_layout/local_code_page/CarBookingWebLoca';
import HospitalJavaLocal from './all_pages_layout/local_code_page/HospitalJavaLocal';
import NetflixCloneLocal from "./all_pages_layout/local_code_page/NetflixCloneLocal";
import DeveloperCodeLive from "./all_pages_layout/live_pages/DeveloperCodeLive";
import YoutubeCloneLive from './all_pages_layout/live_pages/YoutubeCloneLive';
import NetflixCloneLive from "./all_pages_layout/live_pages/NetflixCloneLive";
import YoutubeProfile from "./all_pages_layout/live_pages/YoutubeProfile";
import MyProfileSite from "./all_pages_layout/live_pages/MyProfileSite";
 

function App() {
  return (
    <Router>
      <NavbarSection />

      <Routes>
        <Route path="/" element={<ProjectBox />} />
        <Route path="/live-code" element={<LiveCode />} />
        <Route path="/local-code" element={<LocalCode />} />
        <Route path="/my-profile-github" element={<GitHubPageSection />} />
        <Route path="/developer-code-work-local" element={<DeveloperCodeLocal />} />
        <Route path="/youtube-clone-code" element={<YoutubeCloneLocal />} />
        <Route path="/main-care-local" element={<MainCareLocal />} />
        <Route path="/car-booking-website" element={<CarBookingWebLoca />} />
        <Route path="/hospital-java-local" element={<HospitalJavaLocal />} />
        <Route path="/netflix-clone" element={<NetflixCloneLocal />} />
        <Route path="/developer-code-work-live" element={<DeveloperCodeLive />} />
        <Route path="/youtube-clone-live" element={<YoutubeCloneLive />} />
        <Route path="/netflix-clone-live" element={<NetflixCloneLive />} />
        <Route path="/youtube-profile" element={<YoutubeProfile />} />
       <Route path="/my-profile-site" element={<MyProfileSite />} />
     

      </Routes>

      <FooterSection />
    </Router>
  );
}

export default App;
