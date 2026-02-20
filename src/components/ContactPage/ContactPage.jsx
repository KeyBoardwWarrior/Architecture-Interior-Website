import ContactHeading from "./ContactHeading";
import ContactMain from "./ContactMain";
import './contactpage.css';

export default function ContactPage(){
    return(
        <div className="contact-page">
        <ContactHeading/>
        <ContactMain/>
        </div>
    );
}