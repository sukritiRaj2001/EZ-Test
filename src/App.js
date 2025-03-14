import React from "react";
import BusinessServices from "./components/BusinessServices"; // Import Component
import "./styles.css"; // Import styles
// import EmailForm from "./components/EmailForm"; // Correct path


function App() {
  return (
    <div className="App">
      {/* <EmailForm /> */}
      <BusinessServices /> {/* Now it's being used */}
      
    </div>
  );
}

export default App;
