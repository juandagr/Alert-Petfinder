import React, { Component } from "react";
import { connect } from "react-redux";
import { selectAnimalDetails } from "../../redux/pets/pets.selectors";
import { getAnimalDetailsStart } from "../../redux/pets/pets.actions";
import { createStructuredSelector } from "reselect";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./pets-details-page.scss";

/**
 * Component that display the details of a pet in a page
 */
class PetsDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { getAnimalDetailsStart } = this.props;
    getAnimalDetailsStart(this.props.match.params.id);
  }

  render() {
    const { details } = this.props;
    console.log(details.photos);
    return (
      <div className="pet-details-page">
        <div className="carousel-container">
          <Carousel autoPlay infiniteLoop stopOnHover showThumbs={false}>
            {details.photos.map((photo) => (
              <div key={photo.large}>
                <img src={photo.large} alt="photo1" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="details-container">
          <h1 className="title">{details.name}</h1>
          <p className="breed-and-location">
            {details.breeds.primary} &mdash; {details.gender}
          </p>
          <p className="description">{details.description}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  details: selectAnimalDetails,
});

const mapDispatchToProps = (dispatch) => ({
  getAnimalDetailsStart: (id) => dispatch(getAnimalDetailsStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsDetails);
