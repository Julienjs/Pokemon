import React from 'react'
import { useNavigate } from 'react-router-dom'
import Pikachu from '../assets/pikachu-pleure.gif'
import Pokemon from '../assets/Pokémon_logo.png'

/**
 * error page that appears when a wrong url is entered
 * @returns error page 
 */

const Error = () => {
    const navigate = useNavigate()
    return (
        <section className='min-h-screen flex flex-col items-center justify-between'>
            <img src={Pokemon} alt="Pokemon" className="w-64 mt-5" />
            <div className='flex flex-col justify-center items-center mb-48'>
                <img src={Pikachu} alt="Pikachu en pleure" className="" />
                <h1 className="text-4xl border-t-4 text-[#3166B1] py-5 px-8 rounded-t border-t-[#3166B1] uppercase">Il n'y a pas de Pokemon sur cette page ...</h1>
                <button onClick={() => navigate('/')} className="mt-10 border w-60 border-[#3166B1] px-3 py-2 text-[#3166b1] hover:bg-[#3166b1] hover:text-white font-semibold duration-500">Accueil</button>
            </div>
        </section>
    )
}

export default Error
