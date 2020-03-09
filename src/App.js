import React from 'react';
import unsplash from '../src/api/unsplash';
import 'bootstrap/dist/css/bootstrap.css';
import {apiUrl} from "./defVars";


const GET_PLANET = `
    {
      allPlanets{
        planets {
          name
        }
      }
    }
  `;

class App extends React.Component {
  state = {
    planets: []
  };

  // componentDidMount() {
  //   this.resp();
  // }
  //
  onSubmit = async (term) => {
    const response = await unsplash.post(`${apiUrl}`, {
      query: GET_PLANET
    });
    this.setState({planets: response.data.results})
  };

  getResidents = async (term) => {

    // const promises = [];
    // const planets = this.state.planets;
    // console.log(planets);
    // for(let i  = 0; i < planets.length; i++){
    //   for (let j = 0; j < planets[i].residents.length; j++){
    //     console.log(2);
    //     promises.push(planets[i].residents[j])
    //   }
    // }
  //   console.log(term)
  //   unsplash
  //       .get(`${apiUrl}`, {query: term})
  //       .then(result => console.log(result));
  };

  render(){
    let cont;
    if(!this.state.resident){
      cont = this.state.planets.map(it => {
        return <tr>
          <td scope="row">{it.name}</td>
          <td onClick={this.getResidents}>{it.population}</td>
          <td>{it.terrain}</td>
          <td>{it.climate}</td>
          <td>{it.rotation_period}</td>
          <td>{it.orbital_period}</td>
        </tr>
      });
    }else{
      console.log(this.state.resident);
    // cont = this.state.resident.map(it => {
      let it = this.state.resident;
      cont = <tr>
        <td scope="row">{it.name}</td>
        <td>{it.height}</td>
        <td>{it.mass}</td>
        <td>{it.gender}</td>
        <td>{it.hair_color}</td>
        <td>{it.skin_color}</td>
        <td>{it.eye_color}</td>
        <td>{it.birth_year}</td>
      </tr>;
      return cont;
    // });

    }


    return (
      <div className="App">
        <table className='table table-bordered table-dark' style={{marginTop: '10px'}}>
          <thead>
            <tr>
              <th scope="col">Planet title</th>
              <th scope="col">Planet Population</th>
              <th scope="col">Planet Terrain</th>
              <th scope="col">Planet Climate</th>
              <th scope="col">Planet Rotation Period</th>
              <th scope="col">Planet Orbital Period</th>
            </tr>
          </thead>
          <tbody>
          {/*{console.log(cont)}*/}
          {cont}
          </tbody>
        </table>
        <button onClick={this.onSubmit} className="btn btn-secondary" style={{margin: "auto", display: 'flex'}}>Click me to get data!</button>
      </div>
    )
  }

}

export default App;
