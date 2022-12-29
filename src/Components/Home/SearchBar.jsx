import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../../Context/PokemonContext'

/**
 * component that displays the search system of a pokemon by its name
 * @returns system of searching a pokemon by its name
 */

const SearchBar = () => {
    const { setFiltered, allPokemon } = useContext(PokemonContext)
    const [value, setValue] = useState('')


    /**
     * function that allows to filter the list of pokemons according to the name entered in the search bar
    *@return  the list of filtered pokemons
    */
    useEffect(() => {
        if (value === "") {
            setFiltered(allPokemon);
            return;
        }
        const filtered = allPokemon.filter((item) =>
            item.name.toLowerCase().includes(value)
        );
        setFiltered(filtered);
    }, [value, setFiltered, allPokemon]);


    return (
        <div className='border-4 mb-5 w-2/3 border-[#3166B1] rounded-full px-5 py-3 flex items-center justify-between xl:w-1/3'>
            <input type="text" onChange={(e) => setValue(e.target.value)} placeholder="Recherche ..." className="h-full bg-transparent w-full focus:outline-none" />
            <span className="text-xl flex items-center justify-center"><ion-icon name="search-outline"></ion-icon></span>
        </div>
    )
}

export default SearchBar
