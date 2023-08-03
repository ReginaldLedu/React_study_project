
import { performers } from './performers.js'
import { genres } from './performers.js'

function PopUp(){
	return(
		<div className="filter__pop-up">
			<p className="pop-up__item">{performers[0]}</p>
			<p className="pop-up__item">{performers[1]}</p>
			<p className="pop-up__item">{performers[2]}</p>
			<p className="pop-up__item">{performers[3]}</p>
			<p className="pop-up__item">{performers[4]}</p>
		</div>
	)
}

function GenresPopUp(){
	return(
		<div className="filter__pop-up">
			<p className="pop-up__item">{genres[0]}</p>
			<p className="pop-up__item">{genres[1]}</p>
			<p className="pop-up__item">{genres[2]}</p>
			<p className="pop-up__item">{genres[3]}</p>
			<p className="pop-up__item">{genres[4]}</p>
		</div>
	)
}

export {PopUp, GenresPopUp}
