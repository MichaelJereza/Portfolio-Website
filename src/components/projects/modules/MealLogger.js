import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function MealLogger () {
    return (
        <div>
            <span className="row no-gutters justify-content-between">
                <h2>Meal Logger</h2>
                <a className="App-link" target="_blank" rel="noreferrer" href="https://github.com/MichaelJereza/final-project-meal-logger">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </span>
            <div className="row">
                <div className="col-md-4 col-sm-12 text-left">
                    <p>Meal Logger provides an interface for tracking meals. Recording food items adds to a grand total for the meal's total nutritional value, which can be exported as a nutrition label. The interface also allows the user to capture an image and determines the appropriate meal based on recording time.</p>
                </div>

                <img alt="Meal Logger Food Label" className="img-fluid col-md-auto col-sm-12" src="https://raw.githubusercontent.com/MichaelJereza/final-project-meal-logger/master/images/meal_label.png"/>
            </div>
        </div>
    )
}
export default MealLogger;