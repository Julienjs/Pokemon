import React, { useContext } from 'react'
import { PokemonContext } from '../../Context/PokemonContext'


/**
 * component that displays the pagination 
 * @returns that displays the pagination 
 */
const Pagination = () => {
    const pokemonContext = useContext(PokemonContext)

    /**
     * @param {Object} filteredSelect, currentCardsSelect, currentCards,filtered
     * @param {Boolean} loading
     * @param {Number} cardsPerPage
     * @param {Function} setCardsPerPage
     */
    const { cardsPerPage, loading, currentCards, setCardsPerPage, filteredSelect, filtered, currentCardsSelect } = pokemonContext

    /**
     * function that allows to display more pokemons
     */
    const next = () => {
        if (filteredSelect.length) {
            if (cardsPerPage < filteredSelect.length) {
                setCardsPerPage(cardsPerPage + 30)
            }
        } else if (cardsPerPage < filtered.length) {
            setCardsPerPage(cardsPerPage + 30)
        }
    }

    /**
 * function that allows to display less pokemons
 */
    const prev = () => {
        if (cardsPerPage === 30) {
            setCardsPerPage(cardsPerPage)
        } else {
            setCardsPerPage(cardsPerPage - 30)
        }
    }

    return (
        !loading &&
        <section className="flex w-full justify-around items-center my-5 ">
            <button className={`border-4 w-8 h-8 flex items-center justify-center border-[#3166B1] bg-[#FFCC01] text-[#3166B1] text-2xl font-bold rounded-full`} onClick={() => prev()}>
                <ion-icon name="remove-outline"></ion-icon>
            </button>
            <p className='text-xl text-[#3166B1]'>
                {filteredSelect.length ?
                    `${currentCardsSelect.length}/${filteredSelect.length}` :
                    `${currentCards.length}/${filtered.length}`
                }
            </p>
            <button className={`border-4 w-8 h-8 flex items-center justify-center border-[#3166B1] bg-[#FFCC01] text-[#3166B1] text-2xl font-extrabold rounded-full`} onClick={() => next()}>
                <ion-icon name="add-outline"></ion-icon>
            </button>
        </section>
    )
}

export default Pagination