import React from 'react';

const Spinner = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg"
			 xmlnsXlink="http://www.w3.org/1999/xlink" version="1.0" width="128px" height="128px"
			 style={ {margin: 'auto auto', display: 'block'} }
			 viewBox="0 0 128 128" xmlSpace="preserve">
			<g>
				<path
					d="M78.75 16.18V1.56a64.1 64.1 0 0 1 47.7 47.7H111.8a49.98 49.98 0 0 0-33.07-33.08zM16.43 49.25H1.8a64.1 64.1 0 0 1 47.7-47.7V16.2a49.98 49.98 0 0 0-33.07 33.07zm33.07 62.32v14.62A64.1 64.1 0 0 1 1.8 78.5h14.63a49.98 49.98 0 0 0 33.07 33.07zm62.32-33.07h14.62a64.1 64.1 0 0 1-47.7 47.7v-14.63a49.98 49.98 0 0 0 33.08-33.07z"
					fill="#9f0013"/>
				<animateTransform attributeName="transform" type="rotate" from="0 64 64"
								  to="-90 64 64" dur="400ms"
								  repeatCount="indefinite"></animateTransform>
			</g>
		</svg>
	);
};

export default Spinner;