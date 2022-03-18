import { useState, useEffect } from "react";

import mjolnir from '../../resources/img/mjolnir.png';
import useMarvelService from "../../services/MarvelService";
import setContent from "../../utils/setContent";

import './randomChar.scss';

const RandomChar = () => {

	const [character, setCharacter] = useState({});
	const {getCharacter, clearError, process, setProcess} = useMarvelService();

	useEffect(() => {
		updateCharacter();
		// const timerId = setInterval(updateCharacter, 5000);

		return () => {
			// clearInterval(timerId);
		}
	}, []);

	const onCharacterLoaded = (character) => {
		setCharacter(character);
	};

	const updateCharacter = () => {
		clearError();
		const id = Math.floor(Math.random() * (1_011_400 - 1_011_000) + 1_011_000);
		getCharacter(id)
			.then(onCharacterLoaded)
			.then(() => setProcess('confirmed'))
	};

	return (
		<div className="randomChar">
			{ setContent(process, View, character) }
			<div className="randomChar__static">
				<p className="randomChar__title">
					Random character for today!<br/>
					Do you want to get to know him better?
				</p>
				<p className="randomChar__title">
					Or choose another one
				</p>
				<button className="button button__main"
						onClick={ updateCharacter }>
					<div className="inner">try it</div>
				</button>
				<img src={ mjolnir } alt="mjolnir" className="randomChar__decoration"/>
			</div>
		</div>
	)
};

const View = ({data}) => {

	const {name, description, thumbnail, homePage, wikiPage} = data;

	let imgStyle = {'objectFit': 'cover'};
	if (thumbnail?.indexOf('not_available')) {
		imgStyle = {'objectFit': 'contain'};
	}
	return (
		<div className="randomChar__block">
			<img src={ thumbnail } alt="Random character" className="randomChar__img"
				 style={ imgStyle }/>
			<div className="randomChar__info">
				<p className="randomChar__name">{ name }</p>
				<p className="randomChar__descr">
					{ description }
				</p>
				<div className="randomChar__btns">
					<a href={ homePage } className="button button__main">
						<div className="inner">homepage</div>
					</a>
					<a href={ wikiPage } className="button button__secondary">
						<div className="inner">Wiki</div>
					</a>
				</div>
			</div>
		</div>
	)
};

export default RandomChar;