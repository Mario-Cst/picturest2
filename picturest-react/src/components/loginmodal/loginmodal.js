import ('./loginmodal.css');

const { useState } = require('react');
const { default: LoginList } = require('../loginlist/loginlist.');

const LoginModal = () => {
    const [users, setUsers]= useState([]);
    const [body, setBody] = useState({
        name:"",
        email:"",
        password:""
        
    });
    const createUser = (event) => {
        event.preventDefault(); //No hagas el comportamiento por defecto.
        fetch("http://localhost:5000/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then (res => res.json())
        .then((json) => localStorage.setItem("token", json))//Guarda en local storage el token
        .catch((err) => console.log(err));
    };
    return(
        
        <div className="container">
            <div className="non_form">
                <p className= "tittle">Registro</p>
                <p>Crea tu usuario y disfruta de todas sus ventajas</p>
            </div>
            <form className="form">
                <div>
                    <label>Nombre</label>
                    <input onChange={(event) => setBody({...body, name:event.target.value})}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input onChange={(event) => setBody({...body, email:event.target.value})}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={(event) => setBody({...body, password:event.target.value})}></input>
                </div>
                <button onClick={(event) => createUser(event)}>Login</button>
            </form>
            {users.map((user) => <LoginList user={user} key ={user._id}/>)}
        </div>
        
        

    );
};

export default LoginModal;