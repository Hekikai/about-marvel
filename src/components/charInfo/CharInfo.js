import { useEffect, useState } from "react";
import useMarvelService from "../../services/MarvelService";
import setContent from "../../utils/setContent";

import PropTypes from 'prop-types';

import './charInfo.scss';

const CharInfo = (props) => {

	const [character, setCharacter] = useState(null);

	const {getCharacter, clearError, process, setProcess} = useMarvelService();

	useEffect(() => {
		updateCharacter();
	}, [props.characterId])


	const onCharacterLoaded = (character) => {
		setCharacter(character);
	};

	const updateCharacter = () => {
		const {characterId} = props;
		if (!characterId) {
			return;
		}
		clearError();
		getCharacter(characterId)
			.then(onCharacterLoaded)
			.then(() => setProcess('confirmed'))
	};


	return (
		<div className="char__info">
			{ setContent(process, View, character) }
		</div>
	)
};

const View = ({data}) => {

	const {name, description, thumbnail, homePage, wikiPage, comics} = data;
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