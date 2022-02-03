import React from "react";
import "./artist-card.css";
import { Link } from "react-router-dom";
class ArtistCard extends React.Component {
  render() {
    return (
      <div className="col-md-2">
        <Link to={"./artista?" + this.props.titulo}>
          <div className="item">
            <img className="pic" src={this.props.img} alt="" />
            <p className="titulo">{this.props.titulo}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default ArtistCard;
