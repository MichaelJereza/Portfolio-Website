import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';

function Ncrypt () {
    return (
        <div>
            <span className="row no-gutters justify-content-between">
                <h2>Ncrypt</h2>
                <a className="App-link" target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.mike.android.ncrypt">
                    <FontAwesomeIcon icon={faGooglePlay}/>
                </a>
            </span>
            <p>I developed this Java-based Android application in early 2020, during my week-long spring break. My mom used to store passwords in plaintext on her phone, so I wanted to protect her from being compromised. I had also recently finished the Mobile Development class at OSU, and I wanted to design a "fun" and but useful application for security. The conclusion was an encryption vault that is fun and simple to use.</p>
        </div>
    )
}
export default Ncrypt;