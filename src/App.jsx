import { MotionConfig } from "framer-motion";
import Portfolio from "./pages/Portfolio";

// reducedMotion="user" makes every framer-motion animation honor the OS "reduce motion" setting.
const App = () => (
  <MotionConfig reducedMotion="user">
    <Portfolio />
  </MotionConfig>
);

export default App;
