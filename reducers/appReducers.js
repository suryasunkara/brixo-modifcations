export default function reducer(state = {
  debitorsList: [],
  getDebitorsErr:null,
  selectedLanguage:"",
  showPaymemtPopUp:false,
  debitorsListFiltered:[],
  tableLoader:true,
}, action) {

  switch (action.type) {
    case "SAVE_DEBITORS_LIST_ON_SUCCESS":
      {
        return {
          ...state,
          debitorsList: action.list
        }
      }
      break;
      case "SAVE_DEBITORS_LIST_ON_FILTER":
      {
        return {
          ...state,
          debitorsListFiltered: action.list
        }
      }
      break;
      case "FETCH_DEBITORS_FAILED":
      {
        return {
          ...state,
          getDebitorsErr: action.err
        }
      }
      break;
      case "UPDATE_SELECTED_LANGUAGE":
      {
        return {
          ...state,
          selectedLanguage: action.val
        }
      }
      break;
      case "SELECTED_POPUP_VALUE":
      {
        return {
          ...state,
          showPaymemtPopUp: action.val
        }
      }
      break;
      case "SHOW_TABLE_LOADER":
      {
        return {
          ...state,
          tableLoader: action.flag
        }
      }
      break;
  }
  
  return state
}