import MainPage from './components/MainPage/MainPage';
import TeamPage from './components/TeamPage/TeamPage';
import ContactPage from './components/ContactPage/ContactPage';
import AboutPage from './components/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import './App.css';
function App() {

  return (
    <div className='single-page'>
      <div id='main'>
        <MainPage/> 
      </div>

      <div id='team'>
      <TeamPage />
      </div>

      <div id='contact'>
      <ContactPage />
      </div>

      <div id='about'>
      <AboutPage/>
      </div>

      <Footer/>
    </div>
  )
}

export default App
