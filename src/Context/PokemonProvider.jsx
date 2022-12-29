import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PokemonContext } from './PokemonContext';

/**
 * provider which contains all the pokemon data and the home page navigation
 * @param {Object} children 
 * @returns all pokemon data
 */

const PokemonProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [filtered, setFiltered] = useState([]);
    const [filteredSelect, setFilteredSelect] = useState([]);
    const [cardsPerPage, setCardsPerPage] = useState(24);
    const [loading, setLoading] = useState(true)
    const lastCardIndex = currentPage * cardsPerPage
    const firstCardIndex = lastCardIndex - cardsPerPage
    const currentCards = filtered.slice(firstCardIndex, lastCardIndex)
    const currentCardsSelect = filteredSelect.slice(firstCardIndex, lastCardIndex)

    /**
     * Recover the data of all pokemon
     * @returns the data of all pokemon
     */
    const getAllPokemon = async () => {
        try {
            const response = await axios.get('https://pokebuildapi.fr/api/v1/pokemon')
            if (response) {
                setAllPokemon(response.data)
                setFiltered(allPokemon)
                setLoading(false)
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllPokemon()
    }, [])

    return (
        <PokemonContext.Provider
            value={{
                allPokemon,
                loading,
                cardsPerPage,
                setCardsPerPage,
                currentCards,
                setCurrentPage,
                currentPage,
                setAllPokemon,
                filtered,
                setFiltered,
                filteredSelect,
                setFilteredSelect,
                currentCardsSelect,
                firstCardIndex
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider
