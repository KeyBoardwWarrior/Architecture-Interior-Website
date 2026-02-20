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
                <a href="#">
                    <div className="image-container">
                        <img src="/src/assets/images/lance-anderson-QdAAasrZhdk-unsplash.jpg" alt="architecture-image" /> 
                        <p>Check our Architecture Designs</p>
                    </div>
                </a>

                <a href="#">
                    <div className="image-container">
                        <img src="/src/assets/images/3d-rendering-modern-dining-room-living-room-with-luxury-decor.jpg" alt="interior-image" /> 
                        <p>Check our Interior Designs</p>
                    </div>
                </a>
            </div>
        </div>
    );
}