import { useEffect, useState } from "react";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import Skeleton from "../skeleton/Skeleton";
import PropTypes from 'prop-types';

import './charInfo.scss';

const CharInfo = (props) => {

	const [character, setCharacter] = useState(null);

	const {loading, error, getCharacter, clearError} = useMarvelService();

	useEffect(() => {
		updateCharacter();
	}, [props.characterId])


	const onCharacterLoaded = (character) => {
		setCharacter( character);
	};

	const updateCharacter = () => {
		const {characterId} = props;
		if (!characterId) {
			return;
		}
		clearError();
		getCharacter(characterId)
			.then(onCharacterLoaded)
	};

	const skeleton = character || loading || error ? null : <Skeleton/>;
	const errorMessage = error ? <ErrorMessage/> : null;
	const loadingSpinner = loading ? <Spinner/> : null;
	const content = !(loading || error || !character) ? <View character={ character }/> : null;

	return (
		<div className="char__info">
			{ skeleton }
			{ errorMessage }
			{ loadingSpinner }
			{ content }
		</div>
	)
};

const View = ({character}) => {

	const {name, description, thumbnail, homePage, wikiPage, comics} = character;
	let imgStyle = {'objectFit': 'contain'};
	if (thumbnail.includes('not_available')) {
		imgStyle = {'objectFit': 'contain'}
	}
	return (
		<>
			<div className="char__basics">
				<img src={ thumbnail } alt={ name } style={ imgStyle }/>
				<div>
					<div className="char__info-name">{ name }</div>
					<div className="char__btns">
						<a href={ homePage } className="button button__main">
							<div className="inner">homepage</div>
						</a>
						<a href={ wikiPage } className="button button__secondary">
							<div className="inner">Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<div className="char__descr">
				{ description }
			</div>
			<div className="char__comics">Comics:</div>
			<ul className="char__comics-list">
				{ comics.length > 0 ? null : "There are no comics" }

				{
					comics.map((item, index) => {

						return (
							<li key={ index } className="char__comics-item">
								{ item.name }
							</li>
						)
					})
				}
			</ul>
		</>
	)
}

CharInfo.propTypes = {
	characterId: PropTypes.number
}

export default CharInfo;