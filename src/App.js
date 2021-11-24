import "./App.css"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserContext } from "./contexts/User"
import Title from "./components/Title"
import Nav from "./components/Nav"
import Home from "./components/Home"
import Articles from "./components/Articles"
import SingleArticle from "./components/SingleArticle"
import Users from "./components/Users"
import CreatePost from "./components/CreatePost"

const App = () => {
  const [user, setUser] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <BrowserRouter>
    <UserContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}>
    <div className="App">
    <Title />
    <Nav />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/articles" element={<Articles/>}/>
    <Route path="/articles/:article_id" element={<SingleArticle/>}/>
    <Route path="/users" element={<Users/>}/>
    <Route path="/create_post" element={<CreatePost/>}/>
    </Routes>
    </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
