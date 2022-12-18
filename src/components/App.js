import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [welcomepart, setWelcomepart] = useState(true);
  const [aboutpart, setAboutpart] = useState(false);

  const togglethis = () => {
    setWelcomepart(!welcomepart);
    setAboutpart(!aboutpart);
  }
  return (

    <div id="main">
      {
        welcomepart ?
          <div id="welcome-div">
            <h1>Welcome to Newton School!!</h1>
          </div> : null
      }

      {
        aboutpart ?
          <div id="about-div">


            <h1>
              Newton School is a neo-university providing highly immersive tech
              learning to millions of students, to tap into new-age tech
              opportunities.
            </h1>
          </div> : null
      }
      <button id="toggle" onClick={togglethis}>Toggle</button>
    </div>
  );
};

export default App;