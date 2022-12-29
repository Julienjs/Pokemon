import React from 'react'
import PokeBall from '../../assets/Pokémon_logo.png'

/**
 * component that displays the page title
 * @returns  the title of the page
 */

const Title = () => {
    return (
        <div className="w-full flex my-5 text-3xl font-bold items-center justify-center">
            <h1 className="-ml-4">
                <img src={PokeBall} alt="Pokemon" className="w-64" />
            </h1>
        </div>
    )
}

export default Title
