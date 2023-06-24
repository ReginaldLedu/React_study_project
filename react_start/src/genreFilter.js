import { useState } from 'react'
import { genres } from './performers.js'
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

function GenreFilter(){
	const chosenState  = useState(false)
		const chosen = chosenState[0];
		const setChosen = chosenState[1];
		function chosenShow (){
			setChosen(!chosen)}
	return(
		<div className="filter__button button-genre _btn-text" onClick={chosenShow}>жанру
			{ chosenState[0]=== false ? " " : <GenresPopUp/>}
        </div>
	)
}

export default GenreFilter