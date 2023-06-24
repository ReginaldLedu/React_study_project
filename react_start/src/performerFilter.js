import { useState, useEffect } from 'react'
import { performers } from './performers.js'



function PerformerPopUp(){
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

function PerformerFilter(){
	const [chosen, setChosen] = useState(false)
	useEffect(() => {setChosen(chosen)})
	function chosenShow(){setChosen(!chosen)
	console.log(chosen)}
useEffect(()=>{setChosen(chosen)
	console.log(chosen)} )
	return(
<div className="filter__button button-author _btn-text" onClick={chosenShow}>
          исполнителю
			{ chosen === false ? " " : <PerformerPopUp/>}
        </div>
	)
}

export default PerformerFilter