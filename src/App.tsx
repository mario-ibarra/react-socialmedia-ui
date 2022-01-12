import './App.css'
import Home from './pages/home/Home'
import Layout from './layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from './pages/profile/Profile';


const App = () => {
    return (
        
        <Router>
                 <Routes>
                    <Route  path="/" element= {<Layout />} > 
                        <Route  index element={<Home />} />         
                        <Route path="profile" element={<Profile />} />
                    </Route>
                </Routes>
        </Router>
       
    )
}

export default App
