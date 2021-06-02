import './button.css';
import { useHistory } from "react-router-dom";

const Button = ({text, path, color}) => {
    const history = useHistory();
    console.log(history);
    return (
    <button onClick={() => history.push(path)}  className= "button" style={{backgroundColor: color}}>{text}</button>)
}

export default Button;

