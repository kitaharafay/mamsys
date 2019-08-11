export default {
  namespaced: true,
  state: {
    navCollapse: false
  },
  mutations: {
    changeNavCollapse(state) {
      state.navCollapse = !state.navCollapse;
    }
  },
  actions: {
    navCollapseClick(ctx) {
      ctx.commit('changeNavCollapse')
    }
  }
}
