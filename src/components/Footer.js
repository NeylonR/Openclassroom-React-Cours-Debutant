import { useState } from 'react'

function Footer() {
	const [inputValue, setInputValue] = useState('');

	function handleClickBlur(){
		if(!inputValue.includes('@')){
			alert('Il manque un @');
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionnés de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<form>
				<input 
				onChange={(e) => {
					setInputValue(e.target.value);
				}} 
				value={inputValue}
				placeholder='Entrez votre mail'
				onBlur={handleClickBlur} />
			</form>
		</footer>
	)
}

export default Footer