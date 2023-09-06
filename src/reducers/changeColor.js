const initialState = {
    backgroundColor: 'linear-gradient(#22c55e, #84cc16)', // Set your initial background here
  };
  
  const ChangeColors = (state = initialState, action) => {
    switch (action.type) {
      case "COLOR1":
        return {
          ...state,
          backgroundColor: 'linear-gradient(#22c55e, #84cc16)',
        };
      case "COLOR2":
        return {
          ...state,
          backgroundColor: 'linear-gradient(#ef4444, #f59e0b)',
        };
      case "COLOR3":
        return {
          ...state,
          backgroundColor: 'linear-gradient(#a855f7, #f43f5e)',
        };
      case "COLOR4":
        return {
          ...state,
          backgroundColor: 'linear-gradient(#6366f1, #06b6d4)',
        };
      default:
        return state;
    }
  };
  
  export default ChangeColors;
  