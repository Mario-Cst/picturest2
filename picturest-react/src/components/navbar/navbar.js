import Button from '../Button/button'
import Logo from '../logo/logo'
import Usermenu from '../usermenu/usermenu'
import './navbar.css'

const NavBar = () => {
    return(
        <div >
            <div className="navbar">
                <Logo/>
                <div className = "button_Home">
                    <Button  text="Home" color="#FFFFFF" path="/"/>
                    <Button  text="Pins" color="#FFFFFF" path="/pins"/>
                    <Button  text="Board" color="#FFFFFF" path="/board"/>
                    
                    <Button  text="User" color="#FFFFFF" path="/user"/>
                </div>
                <Button  text="Login" color="#FFFFFF" path="/login"/>
                <Usermenu/>
            </div>
        </div>
    );
};

export default NavBar;