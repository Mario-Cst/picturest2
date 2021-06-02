import './PinCard.css'

const PinCard = ({pin}) => {
    return (
        <div className = "main_Card">
            <img src={pin.imgUrl} alt=""/>
            <br/>
            <span>{pin.name}</span>
        </div>

    );
};

export default PinCard;