import React from 'react'
import CheckboxList from './CheckboxList'
import SearchBar from './SearchBar'

/**
 * component that returns the two components used to filter the pokemons
 * @returns the two components used to filter the pokemons
 */

const Filter = () => {
    return (
        <section className='flex flex-col items-center xl:items-start w-[98%] relative xl:w-[78%] mx-auto'>
            <SearchBar />
            <CheckboxList />
        </section>
    )
}

export default Filter
