const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			caracteres:[],
			planetas:[],
			vehiculos:[],
			caracterFoto:{
				1:"https://img.asmedia.epimg.net/resizer/v2/TVLRIW6H75EYPNO3KBHXFTISDA.jpg?auth=1d2278160753689784a2193684678b480f9df18a8fcb8bfe628520b78f5d0547&width=1472&height=1104&smart=true",
				2:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/04/14/12/c3po-red-arm.jpg?width=1200&height=1200&fit=crop",
				3:"https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/4XRKXFXN3VK37OAOT2HUU3KAYI.jpg",
				4:"https://i.pinimg.com/474x/51/e3/7c/51e37c2b688170cdc07888eba287bfd1.jpg",
				5:"https://nsabers.com/cdn/shop/articles/opolar_httpss.mj.runYCIiyjAv-Ns_A_super_realistic_wallpaper_f_52fe35aa-2d4f-48a8-aff6-53933a84b2dc_3.png?v=1722334487",
				6:"https://i.blogs.es/36d486/joel-edgerton-owen-lars-01/1366_2000.jpeg",
				7:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6TAqFvLNHaNT5SXxdeHV5K2Ge7mcn5dIEg&s",
				8:"https://blog.swgediscord.com/wp-content/webpc-passthru.php?src=https://blog.swgediscord.com/wp-content/uploads/r5-d2-star-wars-mandalorian-930x620.jpg&nocache=1",
				9:"https://static.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406",
				10:"https://static.wikia.nocookie.net/cartoonnetwork/images/0/0e/Obi-Wan_Kenobi_imagen.jpg/revision/latest?cb=20151213033541&path-prefix=es",
			},
			currentObj:{},

		},
		actions: {

			getCaracteres: async() =>{
				try {
					const result = await fetch("https://www.swapi.tech/api/people/")
					
					if(!result.ok){
						throw new Error("Algo salio mal!");
					}
					let data = await result.json();
					console.log(data)
					setStore({...getStore(),caracteres:data.results})
					console.log(getStore().caracteres)					
				} catch (error) {
					console.error(error)
					
				}
			},

			getUrlInfo: async(url) => {
				try {
					const result = await fetch(url);
					if(!result.ok){
						throw new Error("Algo salio mal!");
					}

					let data = await result.json();
					setStore({...getStore(),currentObj:data.result});
					console(getStore().currentObj);

				} catch (error) {
					console.error(error);
				}
			},





		}
	};
};

export default getState;
