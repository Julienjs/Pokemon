import React from 'react'

/**
 * component that allows to display towards the previous or next pokemon
 * @param {Number} count
 * @param {Function} handleChangePokemon
 * @returns displays the previous or next pokemon
 */

const Navigation = ({ count, handleChangePokemon }) => {
    return (
        <article className="h-20 absolute w-11/12 xl:w-2/3 2xl:w-1/3 flex justify-between z-50 top-1/4 xl:top-1/2 2xl:top-1/3 ">
            <button onClick={() => count === 1 ? handleChangePokemon(count) : handleChangePokemon(count - 1)} className={`${count === 1 && 'opacity-50'} text-2xl md:text-6xl text-white duration-500 active:scale-75`}><ion-icon name="chevron-back-outline"></ion-icon></button>
            <button onClick={() => count === 898 ? handleChangePokemon(count) : handleChangePokemon(count + 1)} className={`${count === 898 && 'opacity-50'} text-2xl md:text-6xl text-white duration-500 active:scale-75`}><ion-icon name="chevron-forward-outline"></ion-icon></button>
        </article>
    )
}

export default Navigation
