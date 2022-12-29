import React from 'react'

/**
 * component that displays the statistics of the pokemon
 * @param {Object} stats
 * @param {String} type1,type2
 * @returns pokemon statistics
 */

const States = ({ stats, type1, type2 }) => {
    return (
        <article className="mt-10 w-11/12">
            <h2 className={`${type2 ? type2 : type1} text-center text-2xl font-bold mb-5`}>Statistiques</h2>
            {stats.map((stat, index) => (
                <div key={index} className="flex items-center">
                    <p className={`w-24 ${type2 ? type2 : type1} text-sm xl:text-base font-semibold`}>{stat.name}</p>
                    <p className="text-slate-500">{stat.value}</p>
                    <div className="border rounded-full w-4/5 ml-2 overflow-hidden h-3">
                        <div style={{ width: `${stat.value}%` }} className={` bg_${type2 ? type2 : type1}  h-full`}></div>
                    </div>
                </div>
            ))}
        </article>
    )
}

export default States
