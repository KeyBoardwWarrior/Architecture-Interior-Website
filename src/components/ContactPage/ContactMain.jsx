export default function ContactMain(){
    return(
        <div className="contactpage-main">
            <div className="image-back">
                <div className="form-section">
                    <div className="form-section-name">
                        <label htmlFor="name">
                        Full Name:<br></br>
                        <input type="text" name="name" id="name-field" /> 
                        </label> 
                    </div> 
                    <div className="form-section-phone">
                        Phone Number:<br></br>
                        <label htmlFor="phone">
                        <input type="text" name="phone" id="phone-field" /> 
                        </label> 
                    </div> 
                    <div className="form-section-email">
                        Email Address:<br></br>
                        <label htmlFor="email">
                        <input type="email" name="email" id="email-field" /> 
                        </label> 
                    </div> 
                    <div className="form-section-type">
                        Project Type(Architectural/Interior/Both):<br></br>
                        <label htmlFor="type">
                        <input type="text" name="type" id="type-field" /> 
                        </label> 
                    </div> 
                    <div className="form-section-button">
                        <button className="submit-btn">Submit</button> 
                    </div>
                </div> 


                <div className="quote-section">
                    <div className="quote">
                        <p>Lets Discuss your Project.</p> 
                    </div> 
                </div>
            </div> 
        </div>
    );
}