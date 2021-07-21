import axios from 'axios'

export const state = () => ({
  jokes: [],
  jokesLimit: 10,
  searchQuery: '',
})

export const getters = {
  getJokes(state) {
    return [...state.jokes]
  },
  getSearchedJokes(state, getters) {
    return getters.getJokes.filter((item) =>
      item.joke.toLowerCase().includes(state.searchQuery.toLowerCase())
    )
  },
}

export const mutations = {
  setJokes(state, payload) {
    state.jokes = payload
  },
  setSearchQuery(state, searchQuery) {
    state.searchQuery = searchQuery
  },
}

export const actions = {
  async fetch({ state, commit }) {
    let response
    try {
      response = await axios.get(
        `https://v2.jokeapi.dev/joke/Any?type=single&amount=${state.jokesLimit}`
      )
    } catch (error) {
      console.log(`Ошибка при попытке получить шутки. Описание: ${error}`)
    }
    let data = response.data
    if (data.error) {
      alert('Sry, we have some troubles with API')
      return
    }
    await commit('setJokes', data.jokes)
  },
}
