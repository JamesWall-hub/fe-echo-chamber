import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Title = () => {
    const {currUser, setCurrUser} = useContext(UserContext)
    const handleSignOut = () => {
        setCurrUser()
        localStorage.clear()
    }
    
    return(
        <>
        <div className="Title">
            <div className="LogoAndTitle">
                <img className="Bat" alt="BlueBat" src="https://creazilla-store.fra1.digitaloceanspaces.com/silhouettes/2910/bat-silhouette-4bb7ee-md.png"/>
                <h1>Echo Chamber</h1>
            </div>
        <div className="UserTitle">
        {!!currUser ?
        <>
        <img alt={currUser.username} src={currUser.avatar_url}></img>
        <Link to="/users" style={{ textDecoration: 'none' }}>
            <p>{currUser.username}</p>
        </Link>
        <Link to="edit_user" style={{ textDecoration: 'none' }}>
            <p>Edit user</p>
        </Link>
        <Button variant="outlined" onClick={handleSignOut}>Sign out</Button>
        </>
        :
        <>  
        <p>
            <Link to="/users" style={{ textDecoration: 'none' }}>Sign in</Link>
        </p>
        <p>
            <Link to="/create_user" style={{ textDecoration: 'none' }}>Create user</Link> 
        </p>
        </>

        }
        </div>
        </div>
        </>
    )
}

export default Title;