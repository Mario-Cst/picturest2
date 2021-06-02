import logo from '../../assets/minilogo.png'
import './logo.css'
const Logo = function () {
    return (
        <div className="logo_picture">
            <img src={logo} alt=""/>
            <p>Picturest</p>
        </div>
        

    );
};

export default Logo;