import { plantList } from '../data/plantList.js';
import PlantItem from './PlantItem.js';


export default function ShoppingList() {
    return (
        <ul className='lmj-plant-list'>
            {plantList.map((plant, i) => {
                if(i > 0 && plantList[i-1].category === plant.category){
                    return (
                    <PlantItem 
                        id={plant.id}
                        cover={plant.cover}
                        name={plant.name}
                        water={plant.water}
                        light={plant.light}
                    />
                    );
                };
                return (
                <>
                    <h3 key={plant.category}>{plant.category}</h3>
                    <PlantItem 
                        id={plant.id}
                        cover={plant.cover}
                        name={plant.name}
                        water={plant.water}
                        light={plant.light}
                    />
                </>
                );
            })}
        </ul>
    )
}