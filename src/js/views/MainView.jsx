import React, {useContext, useEffect, useState} from 'react'
import Context from "../store/appContext"
import rigoImage from "../../img/rigo-baby.jpg";


const MainView = () => {

    const {store, actions} = useContext(Context)

    useEffect(()=>{
        actions.getCaracteres();
    }, [])



  return (
    

    <div classNameName='container-fluid'>

        <div classNameName='row d-flex flex-row flex-nowrap'>

          


           
        </div>


    </div>
           
           
           

  );

}

        
export default MainView