export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    // token:"BQCSqUZQ4hOXcIA72vGbtx0lSfEaxYcMHUvkA_bARze4N-JCG35tNbJAJ0BoILus32AkF9e2oi8Psge9EDRubk9YKgYxDO1t_B9GzXPLSw2-PI9ZypfTsw5JdV_Qfp4Qu3rfHlp8mcpoz0gPcGgQHr-Gda-I6wjtNJuRj4pRiv-sA7unfQp7K6hjHuOe7erSzakE63aAbtk2Z3CJ"
  };
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };
  
      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };
  
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
  
      case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
        };
  
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
  
      case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        };
  
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      default:
        return state;
    }
  };
  
  export default reducer;  