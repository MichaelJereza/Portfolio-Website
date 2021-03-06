import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function MealLogger () {
    return (
        <div>
            <div className="row no-gutters align-items-center justify-content-center pb-1">
                <a className="App-link row align-items-center" target="_blank" rel="noreferrer" href="https://github.com/MichaelJereza/final-project-meal-logger">
                    <FontAwesomeIcon icon={faGithub}/>
                    <h2 className="pl-3">Meal Logger</h2>
                </a>
            </div>
            <div className="row">
                <div className="col-lg-5 ml-auto col-sm-12 text-left">
                    <p>Meal Logger allows a user to record their meal items, calculating the total nutritional value for the meal. The application uses the USDA Food Data Central API to query food names and their nutritional values.A user can export their meal in the form of a nutritional label. The logging interface also allows the user to capture an image and determines the appropriate meal based on recording time.</p>
                </div>
                <div className="col-lg-5 mr-auto col-sm-12 text-center">
                    <img alt="Meal Logger Food Label" className="img-fluid rounded" src="https://raw.githubusercontent.com/MichaelJereza/final-project-meal-logger/master/images/meal_label.png"/>
                </div>
            </div>
        </div>
    )
}
export default MealLogger;