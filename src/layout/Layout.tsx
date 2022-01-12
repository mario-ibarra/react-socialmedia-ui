import './Layout.css';
import { Outlet } from 'react-router-dom';
import Topbar from '../components/topbar/Topbar';
import Sidebar from '../components/sidebar/Sidebar';


const Layout = (props:any) => {
    return (
        <>
            <Topbar />
            <div className="layout__container">
                <Sidebar  />
                <Outlet />    
            </div>
        
           
        </>
    )
}
export default Layout
