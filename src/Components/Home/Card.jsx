import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * display of all pokemon
 * @param {Object} pokemon 
 * @returns  all pokemon
 */
const Card = ({ pokemon }) => {
    const navigate = useNavigate()

    /**
     * function that allows to navigate to the detail page of a pokemon
     * @param {Number} id 
     * @returns vers la page detail d'un pokemon
     */
    const handleClick = (id) => {
        navigate(`/Detail/${id}`)
    }

    return (
        <motion.article layout
            animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleClick(pokemon.id)}
            className={`border cursor-pointer overflow-hidden rounded-lg ${pokemon?.apiTypes[1]?.name ? pokemon?.apiTypes[1]?.name : pokemon?.apiTypes[0]?.name} xxs:w-[9.2rem] xxs:h-44 xs:w-[11rem] w-[11.4rem] h-52 xl:w-60 xl:h-96 flex flex-col items-center bg-white font-extralight justify-between`}
        >
            <div className="flex justify-between w-full py-1 px-2 ">
                <div className="flex w-1/4">
                    {pokemon?.apiTypes[1]?.image &&
                        <img src={pokemon?.apiTypes[1]?.image} alt={pokemon?.apiTypes[1]?.name} className="w-4 object-contain" />
                    }
                    <img src={pokemon?.apiTypes[0]?.image} alt={pokemon?.apiTypes[0]?.name} className="w-4 object-contain" />
                </div>
                <p className="text-right w-full">{`#${pokemon?.id}`}</p>
            </div>
            <img src={pokemon?.image} alt={pokemon?.name} className="w-3/4" />
            <div className={`py-1 px-2 w-full h-16 flex items-center justify-center text-white bg_${pokemon?.apiTypes[1]?.name ? pokemon?.apiTypes[1]?.name : pokemon?.apiTypes[0]?.name} text-center`}>
                <p className="xl:text-xl">{pokemon.name}</p>
            </div>
        </motion.article>
    )
}

export default Card

