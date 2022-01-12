import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login__container'>
            <div className="login__wrapper">
                <div className="login__wrapper-left">
                    <h2 className="login__wrapper-connect-title">Spain Alpha Social Media</h2>
                    <p className='login__wrapper-left-subtitle'>Connect with friends and the world</p>
                    <Link to="/register">
                        <button className=" btn login__wrapper-btn ">Create an Account</button>
                    </Link>
                </div>
                <div className="login__wrapper-right">
                    <h2 className='login__wrapper-title'>Login In</h2>   
                    <div className="login__wrapper-form-control">
                        <label className="login__wrapper-label">Email</label>
                        <input type="text" className="login__wrapper-input" placeholder='Enter email' />
                    </div>
                    <div className="login__wrapper-form-control">
                        <label className="login__wrapper-label">Password</label>
                        <input type="password" className="login__wrapper-input" placeholder='Enter password' />
                    </div>
                    <button className=" btn login__wrapper-btn ">Login</button>
                    <Link to="/">Forgot password ?</Link>
                </div>
            </div>

        </div>
    )
}

export default Login
