import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="card mt-5">
            <div className="card-header">
                <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button> <br/>
                <span className="text-center">I am not registered. <Link to="/regis">regis</Link></span >
              </form>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default Login;
