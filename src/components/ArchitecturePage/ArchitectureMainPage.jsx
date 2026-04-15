import './architecturepage.css';
import { Link } from 'react-router-dom';
export default function ArchitectureMainPage(){
    return(
        <div className="architecturePage">
            <div className="arch-navbar">
                <div className="button-section">
                    <button style={{backgroundColor:"transparent",border:"none"}}> 
                        <Link to="/">
                            <img src={import.meta.env.BASE_URL+"images/arrow-left-direction-white-icon.webp"} alt="back" style={{width:"35px",height:"auto"}}/>
                        </Link>
                    </button> 
                </div>
            </div>

            <div className="arch-hero-section">
                <div className="arch-heading">
                    <p>Architecture Projects</p>  
                </div> 
                <div className="arch-description">
                    <p>A selection of thoughtfully designed residential and commercial spaces.</p>
                </div>
            </div>

            <div className="arch-main">
                <div className="content-container">
                    <div className="content-image">
                        <img src={import.meta.env.BASE_URL+"images/ArchitecturePage/huy-phan-JbE3wBQCjm0-unsplash.jpg"} alt="image1" />
                    </div> 

                    <div className="content-description">
                        <div className="heading">
                            <p>Contemporary Café Architecture</p>  
                        </div> 

                        <div className="description">
                            <p>A warm and inviting space blending textures, lighting, and spatial flow to create a memorable social atmosphere.</p>
                        </div>
                    </div>
                </div> 

                <div className="content-container">
                    <div className="content-description">
                        <div className="heading">
                            <p>Compact Urban Home</p>  
                        </div> 

                        <div className="description">
                            <p>Efficient spatial planning combined with minimal aesthetics to create a comfortable and functional city residence.</p>
                        </div>
                    </div>

                    <div className="content-image">
                        <img src={import.meta.env.BASE_URL+"images/ArchitecturePage/felix-P21wf6KAykw-unsplash.jpg"} alt="image1" />
                    </div> 
                </div> 

                <div className="content-container">
                    <div className="content-image">
                        <img src={import.meta.env.BASE_URL+"images/ArchitecturePage/webaliser-_TPTXZd9mOo-unsplash.jpg"} alt="image1" />
                    </div> 

                    <div className="content-description">
                        <div className="heading">
                            <p>Modern Villa Residence</p>  
                        </div> 

                        <div className="description">
                            <p>A contemporary residential design focused on clean geometry, natural light, and seamless indoor–outdoor living.</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}