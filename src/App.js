import React from 'react';
import unsplash from '../src/api/unsplash';
import 'bootstrap/dist/css/bootstrap.css';
import {apiUrl} from "./defVars";

class App extends React.Component {
  state = {
    planets: [],
    resident: []
  };

  onSubmit = async (term) => {
    const response = await unsplash.get(`${apiUrl}/planets`, {
      params: {query: term}
    });
    this.setState({planets: response.data.results})
  };

  getResidents = async (term) => {
    // const resp = await unsplash.get(`${this.state.planets.map(i => {
    //   if(i.residents){
    //     return i.residents[0];
    //   }
    // })}`, {
    //   params: {query: term}
    // });
    const resp = await unsplash.get(`https://swapi.co/api/people/5/`, {
      params: {query: term}
    });
    console.log(resp.data);
    this.setState({resident: resp.data})
  };

  render(){
    let cont;
    // if(this.state.resident){
      // cont = this.state.resident.map(it => {
      // console.log(this.state.resident)

      // let it = this.state.resident[0];
      // return <tr>
        {/*<td scope="row">{it.name}</td>*/}
        {/*<td onClick={this.getResidents}>{it.height}</td>*/}
        {/*<td>{it.mass}</td>*/}
        {/*<td>{it.gender}</td>*/}
        {/*<td>{it.hair_color}</td>*/}
        {/*<td>{it.skin_color}</td>*/}
        {/*<td>{it.eye_color}</td>*/}
        {/*<td>{it.birth_year}</td>*/}
      // </tr>
      // });
    // }else{
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
    // }


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
          {cont}
          </tbody>
        </table>
        <button onClick={this.onSubmit} className="btn btn-secondary" style={{margin: "auto", display: 'flex'}}>Click me to get data!</button>
      </div>
    )
  }

}

export default App;
