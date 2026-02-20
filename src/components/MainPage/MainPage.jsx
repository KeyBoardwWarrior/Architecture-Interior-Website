import NavBar from "./NavBar";
import MainContent from "./MainContent";
import './mainpage.css';
import './mainanimations.css';

export default function MainPage(){
    return(
       <div className="main-page">
        <NavBar />
        <MainContent />
       </div> 
    );
}