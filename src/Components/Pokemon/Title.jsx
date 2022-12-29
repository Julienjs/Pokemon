import React from 'react'
import { useNavigate } from 'react-router-dom';


/**
 * component of the pokemon that displays the name, its position in the pokedex and a button to return to the home page
 * @param {Object} pokemon
 * @returns the name, its position in the pokedex and a button to return to the home page
 */
const Title = ({ pokemon }) => {
    const navigate = useNavigate()
    return (
        <article className="flex justify-between items-end text-white w-[98%] ">
            <div className="flex text-2xl md:text-4xl cursor-pointer font-bold items-center justify-between">
                <span onClick={() => navigate('/')} className="active:scale-95 duration-200 flex items-center justify-start">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </span>
                <h1 className=" ml-5 text-left">{pokemon.name}</h1>
            </div>
            <p className='text-xl md:text-3xl mr-1'>{`#${pokemon.id}`}</p>
        </article>
    )
}

export default Title
