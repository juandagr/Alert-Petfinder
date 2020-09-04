import React, { Component } from "react";
import { connect } from "react-redux";
import { selectAnimalDetails } from "../../redux/pets/pets.selectors";
import { getAnimalDetailsStart } from "../../redux/pets/pets.actions";
import { createStructuredSelector } from "reselect";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./pets-details-page.scss";

import { IoIosMail, IoMdCall, IoIosPin } from "react-icons/io";
import CarouselDetails from "../../components/carousel/carousel.component";
import DetailLists from "../../components/detail-lists/detail-lists.component";
import { Link } from "react-router-dom";

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
        <CarouselDetails photos={details.photos} status={details.status} />
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
          <DetailLists
            attributes={details.attributes}
            environment={details.environment}
          />
          {details.status === "adoptable" ? (
            <p className="status-text">
              This pet is ready to be adopted, if you want more info please
              click
              <a className="text-button" href={details.url} target="_blank">
                here
              </a>
            </p>
          ) : (
            <p className="status-text">
              This pet was adopted, but don't be discouraged, you can see more
              pets in
              <Link className="text-button" to="/">
                our page
              </Link>
              , you sure will find the rigth for you
            </p>
          )}
          <h2 className="contact-info">Contact info</h2>
          <div className="contact-container">
            {details.contact.email ? (
              <div className="contact-container__detail">
                <IoIosPin className="icon" />
                <div className="address-text">
                  <p className="text">{details.contact.address.address1}</p>
                  <p className="text">
                    {details.contact.address.city},{" "}
                    {details.contact.address.state}{" "}
                    {details.contact.address.postcode}
                  </p>
                </div>
              </div>
            ) : null}

            {details.contact.email ? (
              <div className="contact-container__detail">
                <IoIosMail className="icon" />
                <p className="text">{details.contact.email}</p>
              </div>
            ) : null}

            {details.contact.phone ? (
              <div className="contact-container__detail">
                <IoMdCall className="icon" />
                <p className="text">{details.contact.phone}</p>
              </div>
            ) : null}
          </div>
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
