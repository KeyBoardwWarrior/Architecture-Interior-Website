import './footer.css';

export default function Footer(){
    return(
        <div className='footer-page'>
            <div className="footer-up">
                <div className="up-left">
                    <div className="up-left-logo">
                        <p>HomeCanvas</p> 
                    </div> 

                    <div className="up-left-desc">
                        <p>Creating thoughtful architecture and refined interior spaces that balance beauty, function, and timeless design.</p>
                    </div>
                </div> 

                <div className="up-right">
                    <div className="up-right-projects">
                        <div className="footer-heading">
                        <p>Projects</p> 
                        </div> 
                        
                        <div className="footer-values">
                        <div>
                            <p>Architecture Design</p> 
                        </div> 

                        <div>
                            <p>Interior Design</p> 
                        </div> 
                        </div>
                    </div> 

                    <div className="up-right-explore">
                        <div className="footer-heading">
                        <p>Explore</p> 
                        </div> 
                        
                        <div className="footer-values">
                        <div>
                            <a href="#about"><p>About Us</p></a> 
                        </div> 

                        <div>
                            <a href="#team"><p>Our Team</p></a> 
                        </div> 

                        <div>
                            <a href="#contact"><p>Contact Us</p></a> 
                        </div> 
                        </div>
                    </div>

                    <div className="up-right-serviceslist">
                        <div className="footer-heading">
                        <p>Service List</p> 
                        </div> 
                        
                        <div className="footer-values">
                        <div>
                            <p>Interior Projects</p> 
                        </div> 

                        <div>
                            <p>Architecture Projects</p> 
                        </div> 

                        <div>
                            <p>Project Management</p> 
                        </div> 
                        </div>
                    </div>
                </div>
            </div> 

            <div className="footer-down">
                <div className="down-logo"> 
                    <div className="logo">
                        <img src="/src/assets/images/icons8-facebook-50.png" alt="" />
                    </div>
                    <div className="logo">
                        <img src="/src/assets/images/icons8-instagram-50.png" alt="" />
                    </div>
                    <div className="logo">
                        <img src="/src/assets/images/icons8-linkedin-50.png" alt="" />
                    </div>
                    <div className="logo">
                        <img src="/src/assets/images/icons8-whatsapp-50.png" alt="" />
                    </div>
                </div>

                <div className="down-rights-text">
                    <p>© 2026 Home Canvas. All rights reserved.</p> 
                </div>
            </div>
        </div>
    );
}