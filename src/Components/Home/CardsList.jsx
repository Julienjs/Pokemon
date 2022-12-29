import React, { useContext } from 'react'
import { PokemonContext } from '../../Context/PokemonContext'
import Loader from '../Loader'
import Card from './Card'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * component that sends data from filtered or unfiltered pokemons to the card component 
 * @returns send the data of the filtered pokemons or not to the card component 
 */

const CardsList = () => {
    const pokemonContext = useContext(PokemonContext)
    /**
     * @param {Object} filteredSelect, currentCardsSelect, currentCards,
     * @param {Boolean} loading
     */
    const { filteredSelect, currentCardsSelect, currentCards, loading } = pokemonContext
    return (
        <section className={`flex flex-col items-center justify-center py-2 flex-wrap mx-auto w-[98%] ${loading ? "min-h-screen" : "min-h-min"}`}>
            {loading ? <Loader /> :
                <motion.div layout
                    animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap gap-2 justify-around w-[98%] xl:w-[80%]"
                >
                    <AnimatePresence>
                        {filteredSelect.length ?
                            currentCardsSelect.map((pokemon) => (
                                <Card pokemon={pokemon} key={pokemon.id} />
                            )) :
                            currentCards.map((pokemon) => (
                                <Card pokemon={pokemon} key={pokemon.id} />
                            ))

                        }
                    </AnimatePresence>
                </motion.div>
            }
        </section>
    )
}

export default CardsList
