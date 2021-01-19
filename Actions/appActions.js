
import axios from "axios";

export function showTableloader(flag) {
  return {
    type: "SHOW_TABLE_LOADER",
    flag
  }
}

export function getDebitors() { 
  return function(dispatch){
    dispatch(showTableloader(true))
    return axios.get('http://gotracrat.in:8055/api/v1/debtor ') 
    .then(({data}) => {
      dispatch(saveDebitorsListOnSuccess(data.response)) 
      dispatch(filteredDebitorsList(data.response))
      dispatch(showTableloader(false))
    }).catch(err =>
      dispatch(getDebitorsFailure(err.message))
    )
  }
}


function getDebitorsFailure(err){
  return{
    type:"FETCH_DEBITORS_FAILED",
    err
  }
}

function saveDebitorsListOnSuccess(list) {
  return {
    type: "SAVE_DEBITORS_LIST_ON_SUCCESS",
    list
  }
}

export function filteredDebitorsList(list) {
  return {
    type: "SAVE_DEBITORS_LIST_ON_FILTER",
    list
  }
}

export function updatSelectedLanguge(val) {
  return {
    type: "UPDATE_SELECTED_LANGUAGE",
    val
  }
}


export function SelectedPaymentPopup(val) {
  return {
    type: "SELECTED_POPUP_VALUE",
    val
  }
}