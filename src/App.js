import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from './App.module.css';
import {fetchData} from "./api/index";

import coronaImage from './images/image.png'
export default class App extends Component {

  state = {
    data : {},
    country:''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({data:fetchedData})
  }

  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData)
    
    this.setState({data:fetchedData,country:country})
  }
  render() {
    const {data,country} = this.state
    return (
      <div className={styles.container}>
        <img src={coronaImage} className={styles.image} alt="COVID-19"/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
      </div>
    );
  }
}
