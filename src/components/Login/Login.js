import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div class="container my-5">
            <div class="row">
                <div class="col-md-6 login p-5 shadow">
                    <h3 className="text-black text-center">Login</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" className="form-control" placeholder="Din Email *" required autoFocus autoComplete/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" className="form-control" placeholder="Password *" required/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-black w-50" value="Login" />
                        </div>
                        <div className="form-group">
                            <Link to="/" className="text-black">Glemt password?</Link>
                        </div>
                    </form>
                </div>
                <div class="col-md-6 register bg-black text-white p-5 shadow">
                    <h3 className="text-center">Registrer</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email-opret">Email:</label>
                            <input type="email" id="email-opret" className="form-control" placeholder="Din Email *" required autoComplete/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-opret">Password</label>
                            <input type="password" id="password-opret" className="form-control" placeholder="Dit password *" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-confirm">Bekræft Password</label>
                            <input type="password" id="password-confirm" className="form-control" placeholder="Bekræft password *" required/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-white w-50" value="Registrer" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Login;