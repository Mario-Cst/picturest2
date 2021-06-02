import ('./loginmodal.css');

const { useState } = require('react');
const { default: LoginList } = require('../loginlist/loginlist.');

const SignInModal = () => {
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
    const getUser = (event) => {
        event.preventDefault();
        fetch("http://localhost:5000/users", {
            method: 'GET',
            headers: {
                'authorization': localStorage.getItem('token')
            },
        })
        .then (res => res.json())
        .then((users) => {
            setUsers(users)
            console.log(users)})
        
    }
    return(
        
        <div className="container">
            <div className="non_form">
                <p className= "tittle">LogIn</p>
                <p>Crea tu usuario y disfruta de todas sus ventajas</p>
            </div>
            <form className="form">
                <div>
                    <label>Email</label>
                    <input onChange={(event) => setBody({...body, email:event.target.value})}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={(event) => setBody({...body, password:event.target.value})}></input>
                </div>
                <button onClick = {(event) => getUser(event)}>Recibir todos Usuarios</button>
                <button onClick={(event) => createUser(event)}>Login</button>
            </form>
            {users.map((user) => <LoginList user={user} key ={user._id}/>)}
        </div>
        
        

    );
};

export default SignInModal;