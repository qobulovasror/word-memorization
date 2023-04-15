import {Link} from 'react-router-dom'
function Regis() {
    return ( 
        <div className="container">
      <div className="row">
        <div className="col-4 col-md-3"></div>
        <div className="col-4 col-md-6">
          <div className="card mt-5">
            <div className="card-header">
                <h3 className="text-center">Registration</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name='email'
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="repass" className="form-label">
                    confirm password
                  </label>
                  <input
                    name='repass'
                    type="password"
                    className="form-control"
                    id="repass"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
                <span className='text-center my-2'>I already registration <Link to="/login">login</Link></span >
            </div>
          </div>
        </div>
        <div className="col-4 col-md-3"></div>
      </div>
    </div>
     );
}

export default Regis;