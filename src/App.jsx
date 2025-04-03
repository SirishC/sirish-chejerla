import React from "react";
import "./App.css"
import Portfolio from "./pages/Portfolio";
import SpotlightCard from "./components/ui/SpotlightCard";


const App = () => {
  return (
    <SpotlightCard>
      <Portfolio/>
    </SpotlightCard>
  );
};

export default App;