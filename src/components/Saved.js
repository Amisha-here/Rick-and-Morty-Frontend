import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';

import { getCards } from '../actions/cards';
import SavedCardGrid from './SavedCard/SavedCardGrid';

function Saved() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCards());
  },[dispatch])

  return (
    <> 
      <SavedCardGrid />
      
    </>
  )
}

export default Saved