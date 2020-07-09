import axios from 'axios';
import {setAlert} from './alert';
import {
  NEWONBOARDING_CAPTUREDATA_SUCCESS,
  NEWONBOARDING_CAPTUREDATA_FAIL
} from './types';

// Capturing data of newonboarder 
export const onboarding = ({ 
    companyName,
    companyDescription,
    collectionList,
    methodologyList,
    programingList,
    frameworkList,
    databaseList,
    developmenttechList}) => async dispatch =>{

        const config = {
          headers: {
              'Content-Type': 'application/json'
          }
        }

        const body =JSON.stringify({companyName,
          companyDescription,
          collectionList,
          methodologyList,
          programingList,
          frameworkList,
          databaseList,
          developmenttechList});
          
          try {
              const res =await axios.post('/api/users',body,config);
              dispatch ({
                  type: NEWONBOARDING_SAVEDATA_SUCCESS,
                  payload: res.data
              });

              //dispatch(loadUser());

          } catch (err) {
              const errors = err.response.data.errors;

              if (errors) {
                  errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
              }      
              dispatch({
                  type: NEWONBOARDING_SAVEDATA_FAIL
              })
          }
}
