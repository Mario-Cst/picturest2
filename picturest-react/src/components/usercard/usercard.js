//import userpic from '../../assets/minilogo.png'
import './usercard.css';
import {useState, useEffect} from 'react';


const UserCard = () => {
    const urlPins = 'http://localhost:5000/pins/';
    const [pins, setPins] = useState('');
    

    useEffect (() => {
        fetch(urlPins)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error (response.statusText);
            }
        })
        .then ((data)=>{
            setPins(data);
            console.log(data);
        })
        .catch((error)=>{
            console.error(error);
        });

    }, []);
    return (
        <div className="userCard">
            <img src="https://robohash.org/consecteturnobisdolores.bmp?size=50x50&set=set1" alt=""/>
            <p className="userCardName">User Name</p>
            <p className="userCardID">User Id</p>
            <p className="userCardFollowers">User Followers</p>
        </div>

    )
}

export default UserCard;