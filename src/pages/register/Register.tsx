import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='register__container'>
            <div className="register__wrapper">
                <div className="register__wrapper-right">
                    <h2 className='register__wrapper-title'>Sing Up</h2>   
                    <div className="register__wrapper-form-control">
                        <label className="register__wrapper-label">Username</label>
                        <input type="text" className="register__wrapper-input" placeholder='Enter Username' />
                    </div>
                    <div className="register__wrapper-form-control">
                        <label className="register__wrapper-label">Email</label>
                        <input type="text" className="register__wrapper-input" placeholder='Enter email' />
                    </div>
                    <div className="register__wrapper-form-control">
                        <label className="register__wrapper-label">Password</label>
                        <input type="password" className="register__wrapper-input" placeholder='Enter password' />
                    </div>
                    <div className="register__wrapper-form-control">
                        <label className="register__wrapper-label"> Confirm Password</label>
                        <input type="password" className="register__wrapper-input" placeholder='confirm password' />
                    </div>
                    <button className=" btn register__wrapper-btn ">Register</button>
                </div>
            </div>

        </div>
    )
}

export default Register
