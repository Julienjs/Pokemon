import React from 'react'

/**
 * component that displays the main image of the pokemon
 * @param {Object} pokemon 
 * @returns  the main image of the pokemon
 */

const Image = ({ pokemon }) => {
    return (
        <article className='w-full xl:w-11/12 relative flex flex-col' >
            <div className="w-60 md:w-[28rem] absolute right-0 md:bottom-2 xl:right-20 2xl:right-1/4 xl:bottom-0">
                <svg viewBox="0 0 206 208" fill="none">
                    <g opacity="0.1">
                        <path
                            d="M127.762 104C127.762 117.676 116.676 128.762 103 128.762C89.3244 128.762 78.2381 117.676 78.2381 104C78.2381 90.3244 89.3244 79.2381 103 79.2381C116.676 79.2381 127.762 90.3244 127.762 104Z"
                            fill="white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M103 208C155.393 208 198.738 169.257 205.947 118.857H145.035C138.917 136.169 122.407 148.571 103 148.571C83.5933 148.571 67.0835 136.169 60.9648 118.857H0.0532056C7.26233 169.257 50.6067 208 103 208ZM60.9648 89.1429H0.0532056C7.26233 38.7431 50.6067 0 103 0C155.393 0 198.738 38.7431 205.947 89.1429H145.035C138.917 71.8314 122.407 59.4286 103 59.4286C83.5933 59.4286 67.0835 71.8314 60.9648 89.1429ZM127.762 104C127.762 117.676 116.676 128.762 103 128.762C89.3244 128.762 78.2381 117.676 78.2381 104C78.2381 90.3244 89.3244 79.2381 103 79.2381C116.676 79.2381 127.762 90.3244 127.762 104Z"
                            fill="white"
                        />
                    </g>
                </svg>
            </div>
            <div className="flex relative top-14 xl:top-14 items-center justify-center self-center">
                <img src={pokemon.image} alt={pokemon.name} className="w-4/5 xl:w-5/6 object-contain z-50" />
            </div>
        </article>
    )
}

export default Image
