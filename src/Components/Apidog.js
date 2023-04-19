import React from "react";


export default class Apidog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagenPerro: ""
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({
          imagenPerro: result.message
        });
      });
  }

  render() {
    return (
      <>
        {this.state.imagenPerro && (
          <img className="imgApi" src={this.state.imagenPerro} alt="Perro" />
        )}
      </>
    );
  }
}