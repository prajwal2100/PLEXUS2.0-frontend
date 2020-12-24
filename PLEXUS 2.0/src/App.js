import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import "./App.css";
import CoverPage from "./Components/CoverPage";
import Login from "./Components/Login";
import Home from "./Components/Home";
import SignupPage from "./Components/SignupPage";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import Card3 from "./Components/Card3";
import Dashboard from "./Components/Dashboard";
import Leaderboard from "./Components/Leaderboard";
import AboutEvent from "./Components/AboutEvent";
import Editprofile from "./Components/Editprofile";
import SelectionPage from "./Components/SelectionPage";

function App() {
  return (
    <div>
      <Switch>
        {/* <Route exact path="/" component={SelectionPage} /> */}
        <Route exact path="/" component={CoverPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/card1" component={Card1} />
        <Route exact path="/card2" component={Card2} />
        <Route exact path="/card3" component={Card3} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/event" component={AboutEvent} />
        <Route exact path="/profile" component={Editprofile} />
      </Switch>
    </div>
  );
}

export default App;

// import React from "react";
// import { Route, Switch } from "react-router-dom";

// import "./App.css";
// import LandingPage from "./Pages/LandingPage";
// import OpeningMsg from "./Pages/OpeningMsg";
// import Blind from "./Pages/Blind";
// import Deaf from "./Pages/Deaf";
// import Programme from "./Pages/Programme";
// import Books from "./Pages/Books";
// import BlindGoogle from "./Pages/BlindGoogle";

// function App() {
//   return (
//     <div>
//       <Switch>
//         <Route exact path="/" component={OpeningMsg} />
//         <Route exact path="/landingpage/" component={LandingPage} />
//         <Route exact path="/blind/" component={Blind} />
//         <Route exact path="/deaf/" component={Deaf} />
//         <Route exact path="/programme/" component={Programme} />
//         <Route exact path="/book/" component={Books} />
//         <Route exact path="/blindgoogle/" component={BlindGoogle} />
//       </Switch>
//     </div>
//   );
// }

// export default App;
