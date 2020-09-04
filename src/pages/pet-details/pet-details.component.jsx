import React, { Component } from "react";
import { connect } from "react-redux";
import { selectAnimalDetails } from "../../redux/pets/pets.selectors";
import { getAnimalDetailsStart } from "../../redux/pets/pets.actions";
import { createStructuredSelector } from "reselect";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./pets-details-page.scss";

import { IoIosCheckmark, IoIosClose } from "react-icons/io";

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
          <p className="status">{details.status.toUpperCase()}</p>
        </div>
        <div className="details-container">
          <h1 className="title">{details.name}</h1>
          <p className="breed-and-location">
            {details.breeds.primary} &mdash; {details.gender} &mdash;{" "}
            {details.age} &mdash; {details.size}
          </p>
          {details.tags.length > 0 ? (
            <div className="tags-container">
              {details.tags.map((tag) => (
                <p className="tag">{tag}</p>
              ))}
            </div>
          ) : null}

          <p className="description">
            {details.description ? details.description : null}
          </p>
          <div className="detail-lists-container">
            <div className="environment-container">
              <div className="attribute">
                {details.attributes.house_trained ? (
                  <IoIosCheckmark className="status" />
                ) : (
                  <IoIosClose className="status" />
                )}
                <p>House trained</p>
              </div>
              <div className="attribute">
                {details.attributes.spayed_neutered ? (
                  <IoIosCheckmark className="status" />
                ) : (
                  <IoIosClose className="status" />
                )}
                <p className="name">Spayed neutered</p>
              </div>
              <div className="attribute">
                {details.attributes.special_needs ? (
                  <IoIosClose className="status" />
                ) : (
                  <IoIosClose className="status" />
                )}
                <p className="name">Special needs</p>
              </div>
            </div>
            <div className="environment-container">
              <div className="attribute">
                {details.environment.cats ? (
                  <IoIosCheckmark className="status" />
                ) : (
                  <IoIosClose className="status" />
                )}
                <p>Cats</p>
              </div>
              <div className="attribute">
                {details.environment.children ? (
                  <IoIosCheckmark className="status" />
                ) : (
                  <IoIosClose className="status" />
                )}
                <p className="name">Children</p>
              </div>
              <div className="attribute">
                {details.environment.dogs ? (
                  <IoIosClose className="status" />
                ) : (
                  <IoIosClose className="status" />
                )}
                <p className="name">Dogs</p>
              </div>
            </div>
          </div>
          <p className="status-text">
            This pet is ready to be adopted, if you want more info please click
            <a className="text-button" href={details.url} target="_blank">
              here
            </a>
          </p>
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
