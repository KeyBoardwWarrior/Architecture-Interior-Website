import { Link } from "react-router-dom";
import img1 from "/src/assets/images/MainPage/lance-anderson-QdAAasrZhdk-unsplash.jpg";
import img2 from "/src/assets/images/MainPage/3d-rendering-modern-dining-room-living-room-with-luxury-decor.jpg";
export default function MainContent(){
    return(
        <div className="main">
            <div className="heading-section">
                <div className="title-section">
                    <p className="heading">Where Vision Meets Space</p> 
                    <p className="description">Thoughtful architecture and personalized interiors designed to reflect how you truly live</p> 
                </div>
            </div>

            <div className="options-section">
                    <div className="image-container">
                       <Link to="/architecture">
                        <img src={img1} alt="architecture-image" /> 
                       </Link>                         
                       <p>Check our Architecture Designs</p>
                    </div>

                    <div className="image-container">
                        <Link to="/interior">
                            <img src={img2} alt="interior-image" /> 
                        </Link>
                        <p>Check our Interior Designs</p>
                    </div>
            </div>
        </div>
    );
}