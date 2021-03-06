const state = () => ({
  errors: [],
})

const getters = {
  errors: (state) => state.errors,
}

const actions = {
  getAlert: ({ commit }, res) => {
    if (res.status === 500) {
      return commit('pushError', 'Oops! An error occured from our end.')
    } else {
      Object.keys(res.data.errors).forEach((key) => {
        return commit('pushError', res.data.errors[key][0])
      })
    }
  },
}

const mutations = {
  pushError: (state, data) => {
    return state.errors.push(data)
  },
  pushMessage: (state, data) => {
    return state.success.push(data)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
