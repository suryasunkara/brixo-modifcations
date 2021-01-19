
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch,useSelector } from "react-redux";
import {SelectedPaymentPopup} from "../../Actions/appActions"

const PaymentPlans  = (props) => {
  const dispatch = useDispatch();
  let  dataFromStore = useSelector(state => state);
  const selectedLanguage=dataFromStore.appreducers.selectedLanguage
  return (
    <div>
      <Modal style={{width:'115%'}}isOpen={dataFromStore.appreducers.showPaymemtPopUp === props.showId} >
        <ModalHeader >{selectedLanguage=="Swedish"?"Betalningsplaner":"Payment Plans"}</ModalHeader>
        <ModalBody>
         <table class="table table-responsive-sm table-hover table-outline mb-1">
          <thead style={{ backgroundImage: 'linear-gradient(160deg, rgb(103, 183, 225) 25%, rgb(15, 105, 153))'}}>
            <tr>
              <th style={{color:'white',verticalAlign:'middle'}}>{selectedLanguage=="Swedish"?'Amortering':'Amortization'}</th>
              <th style={{color:'white',verticalAlign:'middle'}}>{selectedLanguage=="Swedish"?'Ränta':'Interest Rate'}</th>
              <th style={{color:'white',verticalAlign:'middle'}}>{selectedLanguage=="Swedish"?'Fakturavgift':'Invoice Fee'}</th>
              <th style={{color:'white',verticalAlign:'middle'}}>{selectedLanguage=="Swedish"?'Totalt betalat ToBe':'Total ToBe Paid'}</th>
              <th style={{color:'white',verticalAlign:'middle'}}>{selectedLanguage=="Swedish"?'Balansrapport':'Debit Balance'}</th>
            </tr>
          </thead>
         <tbody>
         {props.paymentDetails.paymentPlan.map((res, id) => {
            return (
              <tr key={id}>
                <td>{res.amortization}</td>
                <td>{res.interestRate}</td>
                <td>{res.invoiceFee}</td>
                <td>{res.totalToBePaid}</td>
                <td>{res.debitBalance}</td>
              </tr>
            );
          })}
         </tbody>
         </table>
        </ModalBody>
        <ModalFooter>
        <Button  style={{backgroundImage: 'linear-gradient(160deg, rgb(103, 183, 225) 25%, rgb(15, 105, 153))',border:'none',color:"white"}}  onClick={(e) => dispatch(SelectedPaymentPopup(null))} >Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PaymentPlans;