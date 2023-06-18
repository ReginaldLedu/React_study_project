
import { useState } from 'react'
import { performers } from './performers.js'
import { genres } from './performers.js'
import { years } from './performers.js'

/*function Filter(){
	const [activeIndex, setActiveIndex] = useState(false)
	function showMenu (){setActiveIndex((activeIndex))}
	return(
		<div className='centerblock__filter filter'
		onClick={()=>{showMenu}}>
			<div className='filter__title'>Искать по: </div>
			<PerformerMenu></PerformerMenu>
			<YearMenu></YearMenu>
			<GenreMenu></GenreMenu>
			</div>
			)}

function PerformerMenu (){
	const [activeIndex, setActiveIndex] = useState(false)
	function showPerformers (){setActiveIndex((!activeIndex))}
	return (
		<div className="filter__button button-author _btn-text"
		title="исполнителю"
		onClick={showPerformers}
		>исполнителю
		{activeIndex === false ? " " : List ("исполнителю")}
		</div>
	)
}

function GenreMenu (){
	const [activeIndex, setActiveIndex] = useState(false)
	function showGenres (){setActiveIndex((!activeIndex))}
	return (
		<div className="filter__button button-author _btn-text"
		title="жанру"
		onClick={showGenres}
		>жанру
		{activeIndex === false ? " " : List ("жанру")}
		</div>
	)
}

function YearMenu (){
	const [activeIndex, setActiveIndex] = useState(false)
	function showYears (){setActiveIndex((!activeIndex))}
	return (
		<div className="filter__button button-author _btn-text"
		title="году выпуска"
		onClick={showYears}
		>году выпуска
		{activeIndex === false ? " " : List ("году выпуска")}
		</div>
	)
}*/


function Filter(){
	const [activeIndex, setActiveIndex] = useState(false)
return(
	<div className='centerblock__filter filter'>
		<div className='filter__title'>Искать по:</div>
		<FiltersShow
		className="filter__button button-author _btn-text"
		title="исполнителю"
		isActive={activeIndex === true}
		onShow={()=>{
			{setActiveIndex(!activeIndex)}}}
			>
		</FiltersShow>
		<FiltersShow
			className='filter__button button-year _btn-text'
			title="году выпуска"
			isActive={activeIndex === false}
			onShow={()=>{
			{setActiveIndex(!activeIndex)}}}
			>
			</FiltersShow>
		<FiltersShow
		className="filter__button button-genre _btn-text"
		title="жанру"
		isActive={activeIndex === false}
		onShow={()=>{
			{setActiveIndex(!activeIndex)}}}
		>	
	</FiltersShow>
	</div>
)
}

function FiltersShow( {
	/* eslint-disable */  title,
	/* eslint-disable */  isActive,
	/* eslint-disable */  onShow 
}){ return(
		<div className='filter__button button-author _btn-text' onClick={onShow}>{title}
		{isActive ? " " : List (title)}</div>
		)	
}

function List (title){
	const filters = ["исполнителю", "жанру", "году выпуска"]
	if(title === filters[0]){
		return (
			<div className='filter__pop-up'>
			<p>{performers[0]} </p>
			<p>{performers[1]}</p>
			<p>{performers[2]}</p>
			<p>{performers[3]}</p>
			<p>{performers[4]}</p>
		</div>
		)
	} else if (title === filters[1])
	{
		return (
			<div className='filter__pop-up'>
			<p>{genres[0]} </p>
			<p>{genres[1]}</p>
			<p>{genres[2]}</p>
			<p>{genres[3]}</p>
			<p>{genres[4]}</p>
		</div>
		)
	} 
	else if (title === filters[2])
	{
		return (
			<div className='filter__pop-up'>
			<p>{years[0]} </p>
			<p>{years[1]}</p>
			
		</div>
		)
	} 
}

export default Filter

