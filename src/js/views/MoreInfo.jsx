import React, {useContext,useEffect,useState} from 'react'
import { Context } from '../store/appContext'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/moreinfo.css'


export const MoreInfo = () => {

  const {store, actions} = useContext(Context);


  return (
    <div className='container d-flex flex-column'>
      <div className='row d-flex flex-row mb-2'>
        <div className='col-7 d-flex justify-content-center'><img src={store.caracterFoto[store.currentObj.uid]} className='w-75 caracter-img' /></div>
        <div className='col-5 d-flex justify-content-center'><h1 className='text-center'>{store.currentObj.properties.name}</h1></div>
      </div>
      <div className='row d-flex flex-row mt-3 mb-2'>
        <div className='col-1'>
          <h6>Gender</h6>
          <p>{store.currentObj.properties.gender}</p>
        </div>
        <div className='col-1'>
          <h6>Skin Color</h6>
          <p>{store.currentObj.properties.skin_color}</p>
        </div>
        <div className='col-1'>
          <h6>Hair Color</h6>
          <p>{store.currentObj.properties.hair_color}</p>
        </div>
        <div className='col-1'>
          <h6>Height</h6>
          <p>{store.currentObj.properties.height}</p>
        </div>
        <div className='col-1'>
          <h6>Eye Color</h6>
          <p>{store.currentObj.properties.eye_color}</p>
        </div>
        <div className='col-1'>
          <h6>Weight</h6>
          <p>{store.currentObj.properties.mass}</p>
        </div>
        <div className='col-1'>
          <h6>Birth Year</h6>
          <p>{store.currentObj.properties.birth_year}</p>
        </div>
        <div className='col-2'>
          <h6>Planet</h6>
          <p>{store.currentObj.properties.homeworld}</p> 
        </div>

      </div>
      <Link to="/">
        <button className='btn btn-danger'>Go Back</button>
      </Link>
      
    </div>
  )
}

