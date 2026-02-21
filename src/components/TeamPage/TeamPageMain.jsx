import { team_items,left_click,right_click } from "./buttonFunction";
import { useState } from "react";


export default function TeamPageMain(){
    const [indexes, setIndexes] = useState({ left: 0, mid: 1, right: 2 });
    const handleLeft = () => {
        setIndexes(prev => left_click(prev, team_items.one.length));
    };
    const handleRight = () => {
        setIndexes(prev => right_click(prev, team_items.one.length));
    };

    return(
        <div className="teampage-main">
            <div className="image-cards-section">
                <div className="left-card">
                    <img src={team_items.one[indexes.left][0]} alt="left" />
                </div> 

                <div className="main-card">
                    <div>
                        <img src={team_items.one[indexes.mid][0]} alt="main" />
                    </div>
                    <div className="card-description">
                            <div className="card-name">{team_items.one[indexes.mid][2][0]}</div> 
                            <div className="person-designation">{team_items.one[indexes.mid][2][1]}</div>
                    </div>
                </div> 

                <div className="right-card">
                    <img src={team_items.one[indexes.right][0]} alt="right" />
                </div> 
            </div>

            <div className="buttons-section">
                <div className="left-btn">
                    <button onClick={handleLeft}><img src="/src/assets/images/arrow-left-direction-white-icon.webp" alt="left-img"/></button> 
                </div>
                <div className="right-btn">
                    <button onClick={handleRight}><img src="/src/assets/images/arrow-left-direction-white-icon.webp" alt="right-img" style={{rotate:'180deg'}}></img></button> 
                </div>
            </div>
        </div>
    );
}