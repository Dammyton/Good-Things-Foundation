import { menudata } from "@/components/common/data";

export const menus = {
  state: {
    menus : []
  },
  mutations: {
    MENU_LIST(state, menuitem) {
        state.menus = menuitem
      },
  },
  actions: { 
    // Load menu items
    menuItems({ commit }) {
        var menuitem =  menudata
        commit('MENU_LIST', menuitem)
    },
  },
  getters : {
    getMenuItems: (state) => {
        return state.menus
      },
  }    

};