import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div className="conatiner">
            <div className="header">
                <div className="d-flex flex-row justify-content-between">
                    <h2 className="login"><Link to="/">Word memorization</Link> </h2>
                    <ul className="nav">
                        <li></li>
                    </ul>
                    <div>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    )
}