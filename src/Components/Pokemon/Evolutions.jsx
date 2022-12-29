import React from 'react'

/**
 * component that displays the different evolution of the pokemon
 * @param {Object} pokemon,prevEvolution,evolution
 * @param {String} type1,type2
 * @param {Function} handleChangePokemon
 * @returns the different evolution of pokemon
 */

const Evolutions = ({ pokemon, prevEvolution, evolution, type1, type2, handleChangePokemon }) => {
    return (
        <article className="mt-10">
            <h2 className={`${type2 ? type2 : type1} text-center text-2xl font-bold mb-5`}>Évolution</h2>
            {!prevEvolution.length && !evolution.length ?
                <h3 className="text-center mt-10">Il n'y a aucune évolution pour ce type de pokemon ...</h3>
                : <div className="flex relative items-center w-full  self-center">
                    {prevEvolution &&
                        prevEvolution.map((prev, index) => (
                            <div key={index} onClick={() => handleChangePokemon(prev.id)} className="w-full flex flex-col cursor-pointer items-center justify-center">
                                <img key={index} src={prev.image} alt={prev.name} className={`w-1/2 object-contain`} />
                                <p className={`${type2 ? type2 : type1} font-semibold`}>{prev.name}</p>
                            </div>
                        ))
                    }
                    <div className="w-full scale-105 duration-300 flex flex-col  items-center justify-center">
                        <img src={pokemon.image} alt={pokemon.name} className="w-2/3 object-contain" />
                        <p className={`${type2 ? type2 : type1} font-semibold`}>{pokemon.name}</p>
                    </div>
                    {evolution &&
                        evolution.map((next, index) => (
                            <div key={index} onClick={() => handleChangePokemon(next.id)} className="w-full flex flex-col items-center cursor-pointer justify-center">
                                <img key={index} src={next.image} alt={next.name} className={`w-1/2 object-contain`} />
                                <p className={`${type2 ? type2 : type1} font-semibold`}>{next.name}</p>
                            </div>
                        ))
                    }
                </div>
            }
        </article>
    )
}

export default Evolutions
