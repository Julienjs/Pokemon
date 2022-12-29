import React, { useContext, useState } from 'react'
import { PokemonContext } from '../../Context/PokemonContext'

/**
 * list that allows to filter the pokemons according to their types
 * @returns  filter pokemons according to type
 */
const CheckboxList = () => {
    const [typeSelected, setTypesSelected] = useState({
        Plante: false,
        Poison: false,
        Feu: false,
        Vol: false,
        Eau: false,
        Insecte: false,
        Normal: false,
        Électrick: false,
        Sol: false,
        Psy: false,
        Combat: false,
        Roche: false,
        Spectre: false,
        Fée: false,
        Glace: false,
        Ténèbres: false,
        Acier: false,
        Dragon: false,
    })
    const pokemonContext = useContext(PokemonContext)

    /**
  * @param {Object} filteredSelect,allPokemon
  * @param {Function} setFilteredSelect
  */

    const { filteredSelect, setFilteredSelect, allPokemon } = pokemonContext
    const types = ["Plante", "Poison", "Feu", "Vol", "Eau", "Insecte", "Normal", "Électrik", "Sol", "Psy", "Combat", "Roche", "Spectre", "Fée", "Glace", "Ténèbres", "Acier", "Dragon"]

    /**
     * function that allows to filter pokemons when you click on an item in the list
     * @param {Object} e 
     */

    const handleSelect = (e) => {
        setTypesSelected({
            ...typeSelected,
            [e.target.name]: e.target.checked
        })
        if (e.target.checked) {
            const filteredResult =
                allPokemon.filter((pokemon) =>
                    pokemon.apiTypes
                        .map(type => type.name)
                        .includes(e.target.name)
                );
            setFilteredSelect([...filteredSelect, ...filteredResult]);
        } else {
            const filteredResult = filteredSelect.filter((pokemon) =>
                !pokemon.apiTypes
                    .map(type => type.name)
                    .includes(e.target.name)
            );
            setFilteredSelect([...filteredResult]);
        }
    }
    return (
        <ul className="bg-white mt-2 flex flex-wrap justify-center xl:justify-start">
            {types.map((type, index) => (
                <label key={index} htmlFor={type} className="w-max cursor-pointer mr-2 mb-2 flex">
                    <input type="checkbox" name={type} id={type} onChange={handleSelect}
                        className="peer sr-only " />
                    <p className={`rounded-full bg_${type} grayscale duration-500 peer-checked:grayscale-0 text-white peer-checked:border-blue-700 px-3 py-1`}>{type}</p>
                </label>
            ))}
        </ul>
    )
}

export default CheckboxList
