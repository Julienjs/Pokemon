import React from 'react'
import Pokeball from '../assets/pikachu-pokemon.gif'

/**
 * displays the loading of the page
 * @returns  the loading of the page
 */

const Loader = () => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <img src={Pokeball} alt={Pokeball} className="w-60 " />
        </div>
    )
}

export default Loader
