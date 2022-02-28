import { useState } from "react";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {

	const [selectedCharacter, setChar] = useState(null);

	const onCharacterSelected = (id) => {
		setChar(id);
	};

	return (
		<>
			<ErrorBoundary>
				<RandomChar/>
			</ErrorBoundary>
			<div className="char__content">
				<ErrorBoundary>
					<CharList onCharSelected={ onCharacterSelected }/>
				</ErrorBoundary>
				<ErrorBoundary>
					<CharInfo characterId={ selectedCharacter }/>
				</ErrorBoundary>
			</div>
			<img className="bg-decoration" src={ decoration } alt="vision"/>
		</>
	);
};

export default MainPage;