class MarvelService {

	_apiBase = 'https://gateway.marvel.com:443/v1/public/';
	_apiKey = 'apikey=3b46640549182f2ab56a8cc596f5e343';
	_baseOffset = 215;

	getResource = async(url) => {
		const result = await fetch(url);

		if (!result.ok) {
			throw new Error(`Could not fetch ${ url }, status: ${ result.status }`);
		}
		return await result.json();
	}

	getAllCharacters = async(offset = this._baseOffset) => {
		const result = await this.getResource(`${ this._apiBase }characters?limit=9&offset=${ offset }&${ this._apiKey }`);
		return result.data.results.map(this._transformCharacter);
	}

	getCharacter = async(id) => {
		const result = await this.getResource(`${ this._apiBase }characters/${ id }?${ this._apiKey }`);
		return this._transformCharacter(result.data.results[0]);
	}

	_transformCharacter = (character) => {
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
}

export default MarvelService;