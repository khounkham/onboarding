import {NEWONBOARDING_CAPTUREDATA_SUCCESS,NEWONBOARDING_CAPTUREDATA_FAIL} from '../actions/types';

const initialState ={
  companyprofile: '',
  teamprofile:'',
  onboardercharacteristic:'',
  loading: true,
  error:{}
}

export default function(state =initialState, action) {
  const {type, payload} = action;
  switch(type) {
    case NEWONBOARDING_CAPTUREDATA_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false
      }
    case NEWONBOARDING_CAPTUREDATA_FAIL:
      return {
        ...state,
        loading:false,
      }
    default:
      return state;

  }
}