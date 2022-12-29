import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import PokemonCard from '../Components/Pokemon/PokemonCard'
import { DetailPokemon } from '../Services/CallAPI'
import { motion } from 'framer-motion'

/**
 * page that displays the details of a selected pokemon
 * @returns the details of a selected pokemon
 */

const Pokemon = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState([])
    const [type1, setType1] = useState()
    const [type2, setType2] = useState()
    const [stat, setStats] = useState([])
    const [preEvolution, setPreEvolution] = useState()
    const [nextEvolution, setNextEvolution] = useState()
    const [loading, setLoading] = useState(true)

    /**
     * send the id to the detailpokemon function to get the detail of a pokemon
     * @returns send the id to the detailpokemon function 
     */

    useEffect(() => {
        const getDetailPokemon = async () => {
            const response = await DetailPokemon(id)
            if (response) {
                setPokemon(response)
                setType2(response?.apiTypes[1]?.name && response?.apiTypes[1]?.name)
                setType1(response?.apiTypes[0]?.name && response?.apiTypes[0]?.name)
                setPreEvolution(response.apiPreEvolution)
                setNextEvolution(response.apiEvolutions)
                setLoading(false)
                setStats([
                    { name: "HP", value: response.stats.HP },
                    { name: "ATT", value: response.stats.attack },
                    { name: "DEF", value: response.stats.defense },
                    { name: "ATT SPEC", value: response.stats.special_attack },
                    { name: "DEF SPEC", value: response.stats.special_defense },
                    { name: "VIT", value: response.stats.speed }
                ])
            }
        }
        getDetailPokemon()
    }, [setType2, setType1, setStats, setPokemon, setNextEvolution, id])

    return (
        <motion.div initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 0.75, ease: "easeOut" }} className={`${loading && 'min-h-screen flex items-center justify-center'}`}>
            {loading ?
                <Loader />
                : <PokemonCard pokemon={pokemon} type1={type1} type2={type2} stats={stat} preEvolution={preEvolution} nextEvolution={nextEvolution} />
            }
        </motion.div>
    )
}

export default Pokemon
