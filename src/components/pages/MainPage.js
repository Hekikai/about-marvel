import { useState } from "react";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import CharSearchForm from "../charSearchForm/CharSearchForm";
import { Helmet } from "react-helmet";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {

	const [selectedCharacter, setChar] = useState(null);

	const onCharacterSelected = (id) => {
		setChar(id);
	};

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Marvel information portal"
				/>
				<title>Marvel information</title>
			</Helmet>
			<ErrorBoundary>
				<RandomChar/>
			</ErrorBoundary>
			<div className="char__content">
				<ErrorBoundary>
					<CharList onCharSelected={ onCharacterSelected }/>
				</ErrorBoundary>
				<div>
					<ErrorBoundary>
						<CharInfo characterId={ selectedCharacter }/>
					</ErrorBoundary>
					<ErrorBoundary>
						<CharSearchForm/>
					</ErrorBoundary>
				</div>

			</div>
			<img className="bg-decoration" src={ decoration } alt="vision"/>
		</>
	);
};

export default MainPage;