import React from 'react'

/**
 * component that displays the different types of pokemon
 * @param {String} type1,type2
 * @returns the different types of pokemon
 */

const Types = ({ type1, type2 }) => {
    return (
        <article className="flex items-center justify-center mt-2">
            {type2 &&
                <p className={`rounded-full bg_${type2} py-1 px-2 text-white mr-2`}>{type2}</p>}
            <p className={`rounded-full bg_${type1} py-1 w-max px-3 text-white`}>{type1}</p>
        </article>
    )
}

export default Types
