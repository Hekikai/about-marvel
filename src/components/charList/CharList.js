import { useState, useEffect } from "react";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import PropTypes from "prop-types";

import './charList.scss';

const CharList = (props) => {

	const {loading, error, getAllCharacters} = useMarvelService();

	const [characters, setCharacters] = useState([]);
	const [newCharLoading, setNewCharLoading] = useState(false);
	const [offset, setOffset] = useState(1541);
	const [charEnded, setCharEnded] = useState(false);

	useEffect(() => {
		onRequest(offset, true);
	}, [])

	const onRequest = (offset, initial) => {
		initial ? setNewCharLoading(false) : setNewCharLoading(true);
		getAllCharacters(offset)
			.then(onCharListLoaded)
	}

	const onCharListLoaded = (newCharacters) => {
		let ended = false;
		if (newCharacters.length < 9) {
			ended = true;
		}

		setCharacters((characters) => [...characters, ...newCharacters]);
		setNewCharLoading(false);
		setOffset((offset) => offset + 9);
		setCharEnded(ended);
	};

	const renderItems = (array) => {
		const items = array.map((elem) => {
			let imgStyle = {'objectFit': 'cover'};
			if (elem.thumbnail.indexOf('not_available')) {
				imgStyle = {'objectFit': 'fill'}
			}
			return (
				<li
					className="char__item"
					tabIndex={ 0 }
					key={ elem.id }
					onFocus={ () => props.onCharSelected(elem.id) }>
					<img
						src={ elem.thumbnail }
						alt={ elem.name }
						style={ imgStyle }/>
					<div className="char__name">{ elem.name }</div>
				</li>
			);
		});

		return (
			<ul className="char__grid">
				{ items }
			</ul>
		);
	};

	const elements = renderItems(characters);

	const errorMessage = error ? <ErrorMessage/> : null;
	const loadingSpinner = loading && !newCharLoading ? <Spinner/> : null;

	return (
		<div className="char__list">
			{ errorMessage }
			{ loadingSpinner }
			{ elements }
			<button className="button button__main button__long"
					disabled={ newCharLoading }
					style={ {'display': charEnded ? 'none' : 'block'} }
					onClick={ () => onRequest(offset) }>
				<div className="inner">load more</div>
			</button>
		</div>
	)
};

CharList.propTypes = {
	onCharSelected: PropTypes.func.isRequired
}

export default CharList;