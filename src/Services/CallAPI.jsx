import axios from "axios"

/**
 * retrieve data from a pokemon with an id
 * @param {Number} id
 * @returns data from a pokemon
 */

export const DetailPokemon = async (id) => {
    try {
        const response = await axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}