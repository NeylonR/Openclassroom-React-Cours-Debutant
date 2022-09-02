import CareScale from './CareScale'

export default function PlantItem({ id, cover, name, water, light }) {
    function handleClick(plantName) {
        alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
    }
	return (
		<li key={id} className='lmj-plant-item'>
			<img onClick={() => handleClick(name)} className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}