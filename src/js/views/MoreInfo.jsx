import React, {useContext,useEffect,useState} from 'react'
import { Context } from '../store/appContext'
import { Link, useNavigate } from 'react-router-dom'

const MoreInfo = () => {

  const {store, actions} = setContext(Context);

  return (
    <div className='container d-flex flex-column'>
      <div className='row d-flex flex-row'>
        <div className='col-7'>IMAGEN</div>
        <div className='col-5'>{store.currentObj.properties.name}</div>
      </div>
      

    </div>
  )
}

export default MoreInfo