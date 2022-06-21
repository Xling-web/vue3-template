const store = {
  state: {
    token:'1312312',
    name:'',
  },
  getters:{
    tokenVal:({token}) => {
      return token
    }
  },
  mutations: {
    readToken(state:any,payload:any){
        state.token = payload.token
    },
    // SET_TOKEN({token:string},token) {
    //   token = token;
    // },
    // SET_NAME(state) {
    //   state.name = name;
    // },
  }
};

export default store;