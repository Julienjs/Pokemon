import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PokemonContext } from '../../Context/PokemonContext'
import Evolutions from './Evolutions'
import States from './States'
import Navigation from './Navigation'
import Title from './Title'
import Image from './Image'
import Types from './Types'

/**
 * main component of the pokemon page
 * @param {Object} pokemon,prevEvolution,nextEvolution,stats,allPokemon
 * @param {String} type1,type2
 * @returns pokemon details
 */

const PokemonCard = ({ pokemon, type1, type2, stats, preEvolution, nextEvolution }) => {
    const { allPokemon } = useContext(PokemonContext)
    const [prevEvolution, setPrevEvolution] = useState([])
    const [evolution, setEvolution] = useState([])
    const [count, setCount] = useState()

    /**
     * function that allows you to navigate to a pokemon
     */
    const navigate = useNavigate()
    const handleChangePokemon = (id) => {
        navigate(`/Detail/${id}`)
    }

    useEffect(() => {
        if (preEvolution) {
            const preEvolution1 = allPokemon.filter((pokemons) => pokemons.name.includes(preEvolution && preEvolution?.name))
            const preEvolution2 = allPokemon.filter((pokemons) => pokemons.name.includes(preEvolution1[0] && preEvolution1[0]?.apiPreEvolution?.name))
            setPrevEvolution([...preEvolution2, ...preEvolution1])
        }
        if (nextEvolution) {
            const evolution1 = allPokemon.filter((pokemons) => pokemons.name.includes(nextEvolution[0] && nextEvolution[0]?.name))
            const evolution2 = allPokemon.filter((pokemons) => pokemons.name.includes(evolution1[0] && evolution1[0]?.apiEvolutions[0]?.name))
            setEvolution([...evolution1, ...evolution2])
        }
        setCount(pokemon.id)
    }, [allPokemon, preEvolution, nextEvolution, setPrevEvolution, setEvolution, setCount])

    return (
        <section className={`w-full flex justify-center xl:bg_${type2 ? type2 : type1}`}>
            <Navigation count={count} handleChangePokemon={handleChangePokemon} />
            <article className={`w-[99%] h-min m-1 xl:m-0 rounded-md xl:rounded-none xl:w-full flex flex-col items-center pt-5 xl:px-5 bg_${type2 ? type2 : type1}`}>
                <Title pokemon={pokemon} />
                <Image pokemon={pokemon} />
                <article className="bg-white xl:w-2/5 xl:h-min py-11 rounded-md m-1 flex flex-col items-center">
                    <Types type1={type1} type2={type2} />
                    <States stats={stats} type1={type1} type2={type2} />
                    <Evolutions pokemon={pokemon} prevEvolution={prevEvolution} evolution={evolution} type1={type1} type2={type2} handleChangePokemon={handleChangePokemon} />
                </article>
            </article>
        </section >
    )
}

export default PokemonCard
