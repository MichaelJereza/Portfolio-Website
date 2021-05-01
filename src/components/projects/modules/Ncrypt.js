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
            <p className="m-auto col-md-10 col-sm-12">I developed this Java-based Android application in early 2020, during my week-long spring break. My mom used to store passwords in plaintext on her phone, so I wanted to protect her from being compromised. I had also recently finished the Mobile Development class at OSU, and I wanted to design a "fun" and but useful application for security. The conclusion was an encryption vault that is fun and simple to use.</p>
        </div>
    )
}
export default Ncrypt;