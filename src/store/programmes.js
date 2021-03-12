import { programmesdata } from "@/components/common/data";

export const programmes = {
  state: {
    programmes : []
  },
  mutations: {
    PROGRAMME_LIST(state, programmeitem) {
        state.programmes = programmeitem
      },
  },
  actions: { 
    // Load all available programmes
    programmes({ commit }) {
        var programmeitem =  programmesdata
        commit('PROGRAMME_LIST', programmeitem)
    },
  },
  getters : {
    getProgrammes: (state) => {
        return state.programmes
      },
  }    

};