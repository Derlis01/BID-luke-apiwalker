import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './ShowData.css'

const IdSearch = () => {

    const [person, setPerson] = useState({})
    const [planet, setPlanet] = useState({})
    const {id} = useParams()

    const getRequest = () => {
      axios
        .get(`https://swapi.dev/api/people/${id}`)
        .then((response) => {
          setPerson(response)
          getPlanet(response.data.homeworld);
        })
        .catch((error) => {
            console.log(error)
          });
    };

    const getPlanet = url => {
      axios
          .get(url)
          .then(response => {
              setPlanet(response);
          })
          .catch(error => {
              console.log(error);
          });
  };

    useEffect(() => {
      getRequest()
    }, [])
    

  return (
    <div className='data-container'>
        <h2> <strong> Nombre: </strong>{person.data ? person.data.name : ''}</h2>
        <p><strong>Altura: </strong>{person.data ? person.data.height: ''}</p>
        <p><strong>Color de pelo: </strong>{person.data ? person.data.hair_color: ''}</p>
        <p><strong>Año de nacimiento: </strong>{person.data ? person.data.birth_year: ''}</p>
        <p><strong>Mundo Natal: </strong>{planet.data ? planet.data.name: ''}</p>

    </div>
  )
}

export default IdSearch