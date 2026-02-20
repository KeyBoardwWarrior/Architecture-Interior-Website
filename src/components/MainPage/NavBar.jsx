export default function NavBar(){
    return(
        <div className="nav-bar">
            <div className="logo-section">
                <p>HomeCanvas</p> 
            </div> 

            <div className="link-section">
                <div className="l1">
                    <a href="#home">Home</a>
                </div>

                <div className="l2">
                    <a href="#team">Team</a>
                </div>

                <div className="l3">
                    <a href="#contact">Contact</a>
                </div>

                <div className="l4">
                    <a href="#about">About</a> 
                </div>
            </div>
        </div>
    )
}