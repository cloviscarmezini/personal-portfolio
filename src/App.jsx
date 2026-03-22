import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas
} from "./components"

import { StatsigProvider, useClientAsyncInit } from '@statsig/react-bindings';
import { StatsigAutoCapturePlugin } from '@statsig/web-analytics';
import { StatsigSessionReplayPlugin } from '@statsig/session-replay';
import { MotionConfig } from "framer-motion";

const STATSI_KEY = import.meta.env.VITE_STATSI_KEY;

function App() {
  const { client } = useClientAsyncInit(
    STATSI_KEY,
    { plugins: [new StatsigAutoCapturePlugin(), new StatsigSessionReplayPlugin()] },
  );

  return (
    <MotionConfig reducedMotion="user">
      <StatsigProvider client={client} loadingComponent={<div>Loading...</div>}>
        <BrowserRouter>
          <div className="relative z-0 bg-primary">
            <div className="bg-contain bg-no-repeat bg-left">
              <Navbar />
              <Hero />
            </div>
            <main>
              <About />
              <Experience />
              <Tech />
              <Works />
            </main>
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </BrowserRouter>
      </StatsigProvider>
    </MotionConfig>
  )
}

export default App
