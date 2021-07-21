import axios from 'axios'

export const state = () => ({
  jokes: [],
  likedJokes: [],
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
  getLikedJokes(state) {
    return [...state.likedJokes]
  },
}

export const mutations = {
  setJokes(state, payload) {
    state.jokes = payload
  },
  setSearchQuery(state, searchQuery) {
    state.searchQuery = searchQuery
  },
  updateLikedJokes(state, likedJokes) {
    state.likedJokes = likedJokes
    localStorage.setItem('likedJokes', JSON.stringify(likedJokes))
  },
  setLikedJokes(state) {
    state.likedJokes = JSON.parse(localStorage.getItem('likedJokes'))
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
  async addLikedJoke({ getters, commit }, joke) {
    let arr = this.getters.getLikedJokes
    arr.push(joke)
    await this.commit('updateLikedJokes', arr)
  },
  async removeLikedJoke({ getters, commit }, joke) {
    let arr = this.getters.getLikedJokes
    let index = arr.findIndex((item) => item.id == joke.id)
    if (index != -1) {
      arr.splice(index, 1)
      await this.commit('updateLikedJokes', arr)
    }
  },
}
