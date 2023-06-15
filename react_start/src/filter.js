
import { useState } from 'react'
import { performers } from './performers.js'
import { genres } from './performers.js'



function Filter(){
	const [activeIndex, setActiveIndex] = useState(0)

return(
	<div className='centerblock__filter filter'>
		<div className='filter__title'>Искать по:</div>
		<FiltersShow
		className="filter__button button-author _btn-text"
		title="исполнителю"
		isActive={activeIndex === 0}
		onShow={
			()=>setActiveIndex(1)}
		>
			{performers[0]}
			{performers[1]}
			{performers[2]}
			{performers[3]}
			{performers[4]}
		</FiltersShow>
			<div className='filter__button button-year _btn-text'>году выпуска</div>
		<FiltersShow
		className="filter__button button-genre _btn-text"
		title="жанру"
		isActive={activeIndex === 1}
		onShow={()=>setActiveIndex(0)}
		>
		{genres[0]}
		{genres[1]}
		{genres[2]}
		{genres[3]}
		{genres[4]}	
		</FiltersShow>
	</div>
)
}

function FiltersShow({
	/* eslint-disable */ title, 
	/* eslint-disable */ children, 
	/* eslint-disable */ isActive, 
	/* eslint-disable */ onShow
}){
	
	return(
		<div className='filter__button button-author _btn-text' onClick={onShow}>{title}
		{isActive ? <p> {children} </p> : " "}
		</div>
		)	
}
export default Filter