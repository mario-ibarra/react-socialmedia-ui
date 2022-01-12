import './Home.css'
import Feedbar from "../../components/feedbar/Feedbar"
import Rightbar from "../../components/rightbar/Rightbar"



function Home() {
    return (
                <div className="home__container">
                    <Feedbar />
                    <Rightbar />
                </div>  
    )
}

export default Home
