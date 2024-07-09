import "../styles/CreateListing.scss";
import Navbar from "../components/Navbar";
import { categories, types, facilities } from "../data";
import { Switch } from '@mui/material';
import variables from "../styles/variables.scss";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { IoIosImages } from "react-icons/io";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer"

const CreateListing = () => {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  /* LOCATION */
  const [formLocation, setFormLocation] = useState({
    streetAddress: "",
    DtSt: "",
    city: "",
    province: "",
    country: "",
  });

  const handleChangeLocation = (e) => {
    const { name, value } = e.target;
    setFormLocation({
      ...formLocation,
      [name]: value,
    });
  };

  /* BASIC COUNTS */
  const [dtcpCertificate, setDtcpCertificate] = useState(false);
  const [absoluteSaleDeed, setAbsoluteSaleDeed] = useState(false);
  const [khataCertificate, setKhataCertificate] = useState(false);
  const [propertyTaxReceipt, setPropertyTaxReceipt] = useState(false);

  /* AMENITIES */
  const [amenities, setAmenities] = useState([]);

  const handleSelectAmenities = (facility) => {
    if (amenities.includes(facility)) {
      setAmenities((prevAmenities) =>
        prevAmenities.filter((option) => option !== facility)
      );
    } else {
      setAmenities((prev) => [...prev, facility]);
    }
  };

  /* UPLOAD, DRAG & DROP, REMOVE PHOTOS */
  const [photos, setPhotos] = useState([]);

  const handleUploadPhotos = (e) => {
    const newPhotos = e.target.files;
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  const handleDragPhoto = (result) => {
    if (!result.destination) return;

    const items = Array.from(photos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPhotos(items);
  };

  const handleRemovePhoto = (indexToRemove) => {
    setPhotos((prevPhotos) =>
      prevPhotos.filter((_, index) => index !== indexToRemove)
    );
  };

  /* DESCRIPTION */
  const [formDescription, setFormDescription] = useState({
    types: "",
    squarefeet: "",
    landfacing: "",
    highlightDesc: "",
    price: 0,
  });

  const handleChangeDescription = (e) => {
    const { name, value } = e.target;
    setFormDescription({
      ...formDescription,
      [name]: value,
    });
  };

  /* CONTACT INFORMATION */
  const [contactInfo, setContactInfo] = useState({
    contactName: "",
    contactPhone: "",
    contactEmail: "",
  });

  const handleChangeContactInfo = (e) => {
    const { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  const creatorId = useSelector((state) => state.user._id);

  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      /* Create a new FormData object to handle file uploads */
      const listingForm = new FormData();
      listingForm.append("creator", creatorId);
      listingForm.append("category", category);
      listingForm.append("type", type);
      listingForm.append("streetAddress", formLocation.streetAddress);
      listingForm.append("DtSt", formLocation.DtSt);
      listingForm.append("city", formLocation.city);
      listingForm.append("province", formLocation.province);
      listingForm.append("country", formLocation.country);
      listingForm.append("dtcpCertificate", dtcpCertificate);
      listingForm.append("absoluteSaleDeed", absoluteSaleDeed);
      listingForm.append("khataCertificate", khataCertificate);
      listingForm.append("propertyTaxReceipt", propertyTaxReceipt);
      listingForm.append("amenities", amenities);
      listingForm.append("types", formDescription.types);
      listingForm.append("squarefeet", formDescription.squarefeet);
      listingForm.append("landfacing", formDescription.landfacing);
      listingForm.append("highlightDesc", formDescription.highlightDesc);
      listingForm.append("price", formDescription.price);
      listingForm.append("contactName", contactInfo.contactName);
      listingForm.append("contactPhone", contactInfo.contactPhone);
      listingForm.append("contactEmail", contactInfo.contactEmail);

      /* Append each selected photo to the FormData object */
      photos.forEach((photo) => {
        listingForm.append("listingPhotos", photo);
      });

      /* Send a POST request to server */
      const response = await fetch("http://localhost:3001/properties/create", {
        method: "POST",
        body: listingForm,
      });

      if (response.ok) {
        navigate("/");
      }
    } catch (err) {
      console.log("Publish Listing failed", err.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="create-listing">
        <h1>Publish Your Land</h1>
        <form onSubmit={handlePost}>
          <div className="create-listing_step1">
            <h2>Step 1: Tell us about your place</h2>
            <hr />
            <h3>Which of these categories best describes your place?</h3>
            <div className="category-list">
              {categories?.map((item, index) => (
                <div
                  className={`category ${
                    category === item.label ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => setCategory(item.label)}
                >
                  <div className="category_icon">{item.icon}</div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>

            <h3>What type of place will Buyers Want?</h3>
            <div className="type-list">
              {types?.map((item, index) => (
                <div
                  className={`type ${type === item.name ? "selected" : ""}`}
                  key={index}
                  onClick={() => setType(item.name)}
                >
                  <div className="type_text">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="type_icon">{item.icon}</div>
                </div>
              ))}
            </div>

            <h3>Where's your place located?</h3>
            <div className="full">
              <div className="location">
                <p>Street Address</p>
                <input
                  type="text"
                  placeholder="Street Address"
                  name="streetAddress"
                  value={formLocation.streetAddress}
                  onChange={handleChangeLocation}
                  required
                />
              </div>
            </div>

            <div className="half">
              <div className="location">
                <p>District and State</p>
                <input
                  type="text"
                  placeholder="District and State"
                  name="DtSt"
                  value={formLocation.DtSt}
                  onChange={handleChangeLocation}
                  required
                />
              </div>
              <div className="location">
                <p>City</p>
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={formLocation.city}
                  onChange={handleChangeLocation}
                  required
                />
              </div>
            </div>

            <div className="half">
              <div className="location">
                <p>Province</p>
                <input
                  type="text"
                  placeholder="Province"
                  name="province"
                  value={formLocation.province}
                  onChange={handleChangeLocation}
                  required
                />
              </div>
              <div className="location">
                <p>Country</p>
                <input
                  type="text"
                  placeholder="Country"
                  name="country"
                  value={formLocation.country}
                  onChange={handleChangeLocation}
                  required
                />
              </div>
            </div>
            <br/>

            <div className="basics">
              <div className="basic">
                <p>DTCP Certificate</p>
                <Switch
                  checked={dtcpCertificate}
                  onChange={() => setDtcpCertificate(!dtcpCertificate)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': { color: variables.pinkred },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: variables.pinkred,
                    },
                  }}
                />
              </div>

              <div className="basic">
                <p>Absolute sale deed and title deed</p>
                <Switch
                  checked={absoluteSaleDeed}
                  onChange={() => setAbsoluteSaleDeed(!absoluteSaleDeed)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': { color: variables.pinkred },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: variables.pinkred,
                    },
                  }}
                />
              </div>

              <div className="basic">
                <p>Khata Certificate</p>
                <Switch
                  checked={khataCertificate}
                  onChange={() => setKhataCertificate(!khataCertificate)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': { color: variables.pinkred },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: variables.pinkred,
                    },
                  }}
                />
              </div>

              <div className="basic">
                <p>Receipt of property tax</p>
                <Switch
                  checked={propertyTaxReceipt}
                  onChange={() => setPropertyTaxReceipt(!propertyTaxReceipt)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': { color: variables.pinkred },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: variables.pinkred,
                    },
                  }}
                />
              </div>
            </div>
          </div>

          <div className="create-listing_step2">
            <h2>Step 2: Make your place stand out</h2>
            <hr />

            <h3>Tell guests what your place has to offer</h3>
            <div className="amenities">
              {facilities?.map((item, index) => (
                <div
                  className={`facility ${
                    amenities.includes(item.name) ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => handleSelectAmenities(item.name)}
                >
                  <div className="facility_icon">{item.icon}</div>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>

            <h3>Add some photos of your place</h3>
            <DragDropContext onDragEnd={handleDragPhoto}>
              <Droppable droppableId="photos" direction="horizontal">
                {(provided) => (
                  <div
                    className="photos"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {photos.length < 1 && (
                      <>
                        <input
                          id="image"
                          type="file"
                          style={{ display: "none" }}
                          accept="image/*"
                          onChange={handleUploadPhotos}
                          multiple
                        />
                        <label htmlFor="image" className="alone">
                          <div className="icon">
                            <IoIosImages />
                          </div>
                          <p>Upload from your device</p>
                        </label>
                      </>
                    )}

                    {photos.length >= 1 && (
                      <>
                        {photos.map((photo, index) => (
                          <Draggable
                            key={index}
                            draggableId={index.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                className="photo"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <img
                                  src={URL.createObjectURL(photo)}
                                  alt="place"
                                />
                                <button
                                  type="button"
                                  onClick={() => handleRemovePhoto(index)}
                                >
                                  <BiTrash />
                                </button>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        <input
                          id="image"
                          type="file"
                          style={{ display: "none" }}
                          accept="image/*"
                          onChange={handleUploadPhotos}
                          multiple
                        />
                        <label htmlFor="image" className="together">
                          <div className="icon">
                            <IoIosImages />
                          </div>
                          <p>Upload from your device</p>
                        </label>
                      </>
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>

            <h3>What makes your place attractive and exciting?</h3>
            <div className="description">
              <p>Land and Soil Type</p>
              <input
                type="text"
                placeholder="Land and Soil Type"
                name="types"
                value={formDescription.types}
                onChange={handleChangeDescription}
                required
              />
              <p>Square feet </p>
              <textarea
                type="text"
                placeholder="Square feet"
                name="squarefeet"
                value={formDescription.squarefeet}
                onChange={handleChangeDescription}
                required
              />
              <p>Land Facing Direction</p>
              <input
                type="text"
                placeholder="Land Facing Direction"
                name="landfacing"
                value={formDescription.landfacing}
                onChange={handleChangeDescription}
                required
              />
              <p>Highlight details</p>
              <textarea
                type="text"
                placeholder="Highlight details"
                name="highlightDesc"
                value={formDescription.highlightDesc}
                onChange={handleChangeDescription}
                required
              />
              <p>Now, set your PRICE</p>
              <span>₹</span>
              <input
                type="number"
                placeholder="100"
                name="price"
                value={formDescription.price}
                onChange={handleChangeDescription}
                className="price"
                required
              />
            </div>
          </div>

          <div className="create-listing_step3">
            <h2>Step 3: Add your contact information</h2>
            <hr />
            <div className="contact-info">
              <div className="contact-field">
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  name="contactName"
                  value={contactInfo.contactName}
                  onChange={handleChangeContactInfo}
                  required
                />
              </div>
              <div className="contact-field">
                <p>Phone Number</p>
                <input
                  type="tel"
                  placeholder="Contact Phone"
                  name="contactPhone"
                  value={contactInfo.contactPhone}
                  onChange={handleChangeContactInfo}
                  required
                />
              </div>
              <div className="contact-field">
                <p>Email Id</p>
                <input
                  type="email"
                  placeholder="Email"
                  name="contactEmail"
                  value={contactInfo.contactEmail}
                  onChange={handleChangeContactInfo}
                  required
                />
              </div>
            </div>
          </div>

          <button className="submit_btn" type="submit">
            CREATE YOUR LISTING
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default CreateListing;
