import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3];

	function careScaleInformation(careType){
		let amount = (scaleValue === 1 && "peu") || (scaleValue === 2 && 'modérement') || (scaleValue === 3 && 'beaucoup');
		// if(scaleValue === 1){
		//  	amount ='peu';
		// } else if(scaleValue === 2){
		//  	amount ='modérement';
		// } else if(scaleValue === 3){
		//  	amount ='beaucoup';
		// }
		alert(`Cette plante requiert ${amount} de ${careType}`);
	}
	const scaleType =
		careType === 'light' ? (
			<img onClick={() => careScaleInformation(careType)} src={Sun} alt='sun-icon' />
		) : (
			<img onClick={() => careScaleInformation(careType)} src={Water} alt='water-icon' />
		)

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale