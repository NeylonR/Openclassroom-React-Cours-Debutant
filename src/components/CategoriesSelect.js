export default function CategoriesSelect({categories, onChange, onClick}) {
    return (
        <>
        <select onChange={onChange}>
            <option key={'select0'} value='all'>Toute les plantes</option>
            {categories.map((category, i) => (
                <option key={i+category} value={category}>{category}</option>
            ))}
        </select>
        <button onClick={onClick}>Réinitialiser</button>
        </>
    )
}