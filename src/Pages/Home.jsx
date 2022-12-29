import React from 'react'
import Title from '../Components/Home/Title'
import Pagination from '../Components/Home/Pagination'
import CardsList from '../Components/Home/CardsList'
import Filter from '../Components/Home/Filter'
import { motion } from 'framer-motion'

/**
 * page that displays all the pokemons
 * @returns all of the pokemons
 */

const Home = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: "easeOut" }}>
            <Title />
            <Filter />
            <CardsList />
            <Pagination />
        </motion.div>
    )
}

export default Home
