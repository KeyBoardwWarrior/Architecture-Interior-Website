import MainPage from './components/MainPage/MainPage';
import TeamPage from './components/TeamPage/TeamPage';
import ContactPage from './components/ContactPage/ContactPage';
import AboutPage from './components/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';

export default function HomePage(){
    return(
        <>
            <div id="#">
                <MainPage/>
            </div>

            <div id="team">
                <TeamPage/> 
            </div>

            <div id="contact">
                <ContactPage></ContactPage>
            </div>
            
            <div id="about">
                <AboutPage></AboutPage>
            </div>

            <Footer></Footer>
        </>
    );
}
