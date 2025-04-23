import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience,Feedbacks,Resume,Hero,Navbar,Tech,Works,StarsCanvas, CodingProfiles} from'./components';
function App() {
  return (
 <BrowserRouter>
 <div className="relative z-0 bg-primary">
  <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
    <Navbar/>
    <Hero/>

 </div>
  <About/>
 <Experience/>

 <Tech/>
 <Works/>

 <Feedbacks/>

  <Resume/>
  <CodingProfiles/>
 <div className="relative z-0">
  <Contact/>
  <StarsCanvas/>

 </div> 
 </div>
 </BrowserRouter>
  )
}

export default App
