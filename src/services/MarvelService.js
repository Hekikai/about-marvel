import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
	const {loading, error, request, clearError, process, setProcess} = useHttp();

	const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
	const _apiKey = 'apikey=3b46640549182f2ab56a8cc596f5e343';
	const _baseOffset = 215;

	const getAllCharacters = async(offset = _baseOffset) => {
		const result = await request(`${ _apiBase }characters?limit=9&offset=${ offset }&${ _apiKey }`);
		return result.data.results.map(_transformCharacter);
	}

	const getCharacter = async(id) => {
		const result = await request(`${ _apiBase }characters/${ id }?${ _apiKey }`);
		return _transformCharacter(result.data.results[0]);
	}

	const getCharacterByName = async(name) => {
		const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
		return res.data.results.map(_transformCharacter);
	}

	const getAllComics = async(offset = 0) => {
		const result = await request(`${ _apiBase }comics?orderBy=issueNumber&limit=8&offset=${ offset }&${ _apiKey }`);
		return result.data.results.map(_transformComics);
	}

	const getComic = async(id) => {
		const result = await request(`${ _apiBase }comics/${ id }?${ _apiKey }`);
		return _transformComics(result.data.results[0]);
	}

	const _transformComics = (comics) => {
		return {
			id: comics.id,
			title: comics.title,
			description: comics.description || 'There is no description',
			pageCount: comics.pageCount ? `${ comics.pageCount } p.` : 'No information about the' +
				' number of pages',
			thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
			language: comics.textObjects.language || 'en-us',
			price: comics.prices.price ? `${ comics.prices.price }$` : 'not available'
		}
	}

	const _transformCharacter = (character) => {
		return {
			id: character.id,
			name: character.name,
			description: character.description
				? `${ character.description.slice(0, 210) }...`
				: 'There is no description for this character',
			thumbnail: character.thumbnail.path + '.' +
				character.thumbnail.extension,
			homePage: character.urls[0].url,
			wikiPage: character.urls[1].url,
			comics: character.comics.items.slice(0, 10)
		}
	}

	return {
		loading,
		error,
		clearError,
		process,
		setProcess,
		getAllCharacters,
		getCharacter,
		getAllComics,
		getComic,
		getCharacterByName
	}
}

export default useMarvelService;