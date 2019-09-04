const storage = {
  state: {
    data: {}
  },
  mutations: {
    SAVE_IN_STORAGE: (state, payload) => {
      const { code, value } = payload;
      state.data[code] = value;
    }
  }
};

export default storage;
