import React, {useContext,useEffect,useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Context} from "../store/appContext"
import { Link, useNavigate } from 'react-router-dom'

export const Home = () => {

	const {store, actions} = useContext(Context);
	const navigate = useNavigate();


	const handleMoreInfo = async (url) => {

		try {
			await actions.getUrlInfo(url);
			navigate("./moreinfo");

		} catch (error) {
			console.error(error)		
		}
	}
	useEffect(()=>{
		actions.getCaracteres();
			
	}, []);

	return (
	<div className="container-fluid d-flex flex-column">

		<h1>Characters</h1>
		<div className="row d-flex flex-nowrap scrollmenu">
			{store.caracteres.map((caracter,indx) =>  {
				return(
					<div key={indx} className="card mx-1">
  						<img src={store.caracterFoto[indx+1]} className="card-img-top" />
  						<div className="card-body">
    						<h5 className="card-title">{caracter.name}</h5>
							<div className="d-flex flex-row justify-content-between">
								<button className="btn btn-info me-1" onClick={()=> handleMoreInfo(caracter.url)}>More Info</button>
								<button className="btn btn-warning ms-1">Like</button>
							</div>

  						</div>
					</div>
				)
				
				})}
		</div>
	</div>
);}
