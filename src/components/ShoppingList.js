import { plantList } from '../data/plantList.js';
import PlantItem from './PlantItem.js';
import CategoriesSelect from './CategoriesSelect.js';
import { useState } from 'react';


export default function ShoppingList({cart, setCart}) {
    // const categories = [...new Set(plantList.map(plant => plant.category))];
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	);
    const [visibleList, setVisibleList] = useState(plantList);

    function filterList(e){
        if(e.target.value === 'all') return setVisibleList(plantList);

        const filteredList = plantList.reduce(
            (acc, plant) =>
            plant.category === e.target.value ? acc.concat(plant) : acc,[]
        );
        setVisibleList(filteredList);
    }

    function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name);
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			);
			setCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			]);
		} else {
			setCart([...cart, { name, price, amount: 1 }]);
		}
	}
    return (
        <div className='lmj-shopping-list'>
            <CategoriesSelect 
                onChange={filterList} 
                onClick={() => setVisibleList(plantList)}
                categories={categories}
            />
            <ul>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {visibleList.map((plant) => {
                    return (
                        <div key={plant.id} >
                            <PlantItem 
                                id={plant.id}
                                cover={plant.cover}
                                name={plant.name}
                                water={plant.water}
                                light={plant.light}
                            />
                            <button onClick={() => addToCart(plant.name, plant.price)}>
                                Ajouter
                            </button>
                        </div>
                    );
                })}
            </ul>
        </div>     
    )
}

