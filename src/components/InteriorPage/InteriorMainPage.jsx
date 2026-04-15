import './interiormainpage.css';
import { Link } from 'react-router-dom';
export default function InteriorMainPage(){
    return(
        <div className="interiorPage">
            <div className="arch-navbar">
                <div className="button-section">
                    <button style={{backgroundColor:"transparent",border:"none"}}> 
                        <Link to="/">
                            <img src={import.meta.env.BASE_URL+"images/arrow-left-direction-white-icon.webp"} alt="back" style={{width:"35px",height:"auto"}}/>
                        </Link>
                    </button> 
                </div>
            </div>

            <div className="arch-hero-section-interior">
                <div className="arch-heading">
                    <p>Interior Design Projects</p>  
                </div> 
                <div className="arch-description">
                    <p>Thoughtfully curated spaces blending comfort, function, and refined aesthetics.</p>
                </div>
            </div>

            <div className="arch-main">
                <div className="content-container">
                    <div className="content-image">
                        <img src={import.meta.env.BASE_URL+"images/InteriorPage/LivingRoom-unsplash.jpg"} alt="image1" />
                    </div> 

                    <div className="content-description">
                        <div className="heading">
                            <p>Contemporary Living Space</p>  
                        </div> 

                        <div className="description">
                            <p>A balanced composition of textures, lighting, and clean lines creating a warm yet modern gathering environment.</p>
                        </div>
                    </div>
                </div> 

                <div className="content-container">
                    <div className="content-description">
                        <div className="heading">
                            <p> Luxury Bedroom Interior</p>  
                        </div> 

                        <div className="description">
                            <p>Soft materials, layered lighting, and calming tones designed to deliver comfort, privacy, and quiet elegance.</p>
                        </div>
                    </div>

                    <div className="content-image">
                        <img src={import.meta.env.BASE_URL+"images/InteriorPage/spacejoy-nEtpvJjnPVo-unsplash.jpg"} alt="image1" />
                    </div> 
                </div> 

                <div className="content-container">
                    <div className="content-image">
                        <img src={import.meta.env.BASE_URL+"images/InteriorPage/kitchen-unsplash.jpg"} alt="image1" />
                    </div> 

                    <div className="content-description">
                        <div className="heading">
                            <p>Modern Modular Kitchen</p>  
                        </div> 

                        <div className="description">
                            <p>Efficient layout planning combined with durable finishes and smart storage for a seamless everyday cooking experience.</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}