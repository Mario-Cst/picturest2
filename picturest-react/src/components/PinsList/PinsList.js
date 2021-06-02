
import PinCard from '../PinCard/PinCard';
import './PinsList.css'

const { useState,useEffect } = require("react")

const PinsList = () => {
    const [pins, setPins] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const url = "http://localhost:5000/pins"
        fetch(url)
        .then (res => res.json())
        .then((json) => setPins(json))
        .catch((err) => console.log(err));
    }, [refresh]);

    const [body, setBody] = useState({
        name: "",
        user: 74,
        imgUrl: "",
        numberOfLikes: 8,
        description: "kdnfs",
        url: "",
        id: 55
    });

    const createPin = (event) => {
        event.preventDefault(); //No hagas el comportamiento por defecto.
        fetch("http://localhost:5000/pins", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then (res => res.json())
        .then((json) => setPins(json))
        .catch((err) => console.log(err));
    };
    return (
        <div className="main">
            <div className="heather_pins_list">
                <span className= "pinsList_tittle"> Pins</span>   
            </div>
            <div className="board">
                {pins.map((pin)=> <PinCard pin={pin} key={pin.id}/>)}    
            </div>
            <div>
                <form>
                    <h3>Crear Pin</h3>
                    <input placeholder="Nombre del Pin" onChange={(event) => setBody({...body, name:event.target.value})}></input>
                    <br/>
                    <input placeholder="Url de la foto" onChange={(event) => setBody({...body, imgUrl:event.target.value})}></input>
                    <br/>
                    <button onClick={(event) => createPin(event)}>Create</button>
                </form>   
            </div>   
        </div>
    );
};

export default PinsList;