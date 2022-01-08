import './Home.css'
import Feedbar from "../../components/feedbar/Feedbar"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"


function Home() {
    return (
        <>
            <Topbar />
            <div className="home__container">
            <Sidebar />
            <Feedbar />
            <Rightbar />
            </div>
        </>
    )
}

export default Home
