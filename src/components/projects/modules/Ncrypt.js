import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';

function Ncrypt () {
    return (
        <div>
            <span className="row no-gutters align-items-center justify-content-center pb-1">
                <a className="App-link row align-items-center" target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.mike.android.ncrypt">
                    <FontAwesomeIcon icon={faGooglePlay}/>
                    <h2 className="pl-3">Ncrypt</h2>
                </a>
            </span>
            <p className="m-auto col-md-10 col-sm-12">I developed this Java-based Android application in early 2020, during my week-long spring break. My mom would store passwords in plaintext on her phone, so I wanted to create a solution that was easy for her to use. I had also recently finished the Mobile Development class at OSU, and I wanted to apply what I had learned to security. The conclusion was an Android encryption vault.</p>

            <div className="row no-gutters justify-content-center">
                <img className="img-fluid" src="https://play-lh.googleusercontent.com/b5zqRDQB4LGRkaFKjSroFoKMn39XGZmXK9gcXxTzg2egU6y8DnS2_eaT2UwhYdR0v5yi=w893-h862"/>
                <img className="img-fluid" src="https://play-lh.googleusercontent.com/17OBstP54iB7AI7xMpt1B4cf3KN6j7F0dRnTQaEwWdQyiR794AJb8gj0wt6kKQy410p-=w893-h862"/>
            </div>

        </div>
    )
}
export default Ncrypt;