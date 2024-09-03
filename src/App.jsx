import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import KelasPage from './pages/KelasPage'
import FaqPage from './pages/FaqPage'
import SKPage from './pages/SKPage'
import TestimonialPage from './pages/TestimonialPage'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'

HomePage
function App() {
  return <div>
    <NavbarComponent />

    <Routes>
      <Route path='/' Component={HomePage}/>
      <Route path='/kelas' Component={KelasPage}/>
      <Route path='/Testimonial' Component={TestimonialPage}/>
      <Route path='/FAQ' Component={FaqPage}/>
      <Route path='/SnK' Component={SKPage}/>
    </Routes>

    {/* <FooterComponent /> */}
  </div>
}

export default App
