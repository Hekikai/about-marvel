import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import './comicsList.scss';

const ComicsList = () => {

	const [comicsList, setComicsList] = useState([]);
	const [newCharLoading, setNewCharLoading] = useState(false);
	const [offset, setOffset] = useState(0);
	const [comicsEnded, setComicsEnded] = useState(false);

	const {loading, error, getAllComics} = useMarvelService();

	useEffect(() => {
		onRequest(offset, true);
	}, [])

	const onRequest = (offset, initial) => {
		initial ? setNewCharLoading(false) : setNewCharLoading(true);
		getAllComics(offset)
			.then(onComicsListLoaded)
	}

	const onComicsListLoaded = (newComicsList) => {
		let ended = false;
		if (newComicsList.length < 8) {
			ended = true;
		}

		setComicsList([...comicsList, ...newComicsList]);
		setNewCharLoading(false);
		setOffset((offset) => offset + 8);
		setComicsEnded(ended);
	};

	const renderItems = (array) => {
		const elements = array.map((elem, index) => {
			return (
				<li className="comics__item" key={ index }>
					<Link to={ `/comics/${ elem.id }` }>
						<img src={ elem.thumbnail } alt={ elem.title }
							 className="comics__item-img"/>
						<div className="comics__item-name">{ elem.title }
						</div>
						<div className="comics__item-price">{ elem.price }</div>
					</Link>
				</li>
			);
		})

		return (
			<ul className="comics__grid">
				{ elements }
			</ul>
		)
	}

	const items = renderItems(comicsList);

	const errorMessage = error ? <ErrorMessage/> : null;
	const loadingSpinner = loading && !newCharLoading ? <Spinner/> : null;
	return (
		<div className="comics__list">
			{ errorMessage }
			{ loadingSpinner }
			{ items }
			<button
				disabled={ newCharLoading }
				style={ {'display': comicsEnded ? 'none' : 'block'} }
				className="button button__main button__long"
				onClick={ () => onRequest(offset) }>
				<div className="inner">load more</div>
			</button>
		</div>
	)
}

export default ComicsList;