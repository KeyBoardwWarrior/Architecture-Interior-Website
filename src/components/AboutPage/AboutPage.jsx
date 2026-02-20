import AboutMain from './AboutMain';
import Aboutright from './Aboutright';
import Aboutleft from './Aboutleft';
import './aboutpage.css';

export default function AboutPage(){
    return(
        <div className="about-page">
            <Aboutleft />
            <AboutMain/>
            <Aboutright />
        </div>
    ); 
}