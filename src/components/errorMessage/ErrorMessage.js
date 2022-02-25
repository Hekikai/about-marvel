import React from 'react';
import imgError from './error.gif';

const ErrorMessage = () => {
	return (
		<img
			style={{display: 'block', margin: '2rem auto', width: '96px' }}
			src={imgError} alt="Danger icon"/>
	);
};

export default ErrorMessage;