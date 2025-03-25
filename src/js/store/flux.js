const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			caracteres:[],
			planetas:[],
			vehiculos:[],
			caracterUrl:[],
			planetaUrl:[],
			vehiculoUrl:[],

		},
		actions: {

			getCaracteres: async() =>{
				try {
					const result = await fetch("https://www.swapi.tech/api/people/")
					
					if(!result.ok){
						throw new Error("Algo salio mal!");
					}

					let data = await result.json();

					setStore({...getStore(),caracteres:data.results})


					
				} catch (error) {
					console.error(error)
					
				}
			}



		}
	};
};

export default getState;
