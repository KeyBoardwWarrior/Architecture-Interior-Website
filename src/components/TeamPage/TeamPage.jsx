import HeaderText from "./HeaderText";
import './teampage.css';
import TeamPageMain from "./TeamPageMain";

export default function TeamPage(){
    return(
        <div className="team-page">
            <HeaderText/>            
            <TeamPageMain/>
        </div>
    );
}