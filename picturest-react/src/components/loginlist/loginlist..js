

const LoginList = ({user}) => {
    return(
        <div>
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.password}</span>
        </div>
    );
};

export default LoginList;