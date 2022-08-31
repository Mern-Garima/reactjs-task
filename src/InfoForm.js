//React uses htmlFor instead
import React, { useState } from "react";
import pencil_icon from "./images/icon-material-edit.png";
import user from "./images/user-img.png";

const InfoForm = () => {
  // name, setName - properties
  const [fname, setfName] = React.useState("");
  const [lname, setlName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [organization, setOrganization] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  const handleChange = (e) => {
    // no exclamations allowed!
    setEmail(e.target.value.replace(/!/g, ""));
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="file-input">
          <input
            type="file"
            name="file-input"
            id="file-input"
            className="file-input__input"
          />
          <label className="file-input__label file_img" for="file-input">
            <img src={user} className="original_img" />
            <span>
              <img src={pencil_icon} className="pencil_icon" />
            </span>
          </label>
        </div>

        <div className="form_fields">
          <div className="form-group">
            <div>
              <label htmlFor="fname">First Name</label>
              <input
                id="fname"
                type="text"
                name="fname"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setfName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="lname">Last Name</label>
              <input
                id="lname"
                type="text"
                name="lname"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setlName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="organization">Organization</label>
              <input
                id="organization"
                type="text"
                name="organization"
                placeholder="Organization Name"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group mb-0">
            <div>
              <label htmlFor="phone">Phone Number</label>
              <div className="form_inline">
                <select>
                  <option value="Code">Code</option>
                  <option value="91">+ 91</option>
                  <option value="11">+ 11</option>
                </select>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-group mb-0">
            <div>
              <label htmlFor="whatsapp">WhatsApp Number</label>
              <div className="form_inline">
                <select>
                  <option value="Code">Code</option>
                  <option value="91">+ 91</option>
                  <option value="11">+ 11</option>
                </select>
                <input
                  id="whatsapp"
                  type="text"
                  name="whatsapp"
                  placeholder="Number"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="buttons_form">
          <div>
            <button type="" className="cancel">
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default InfoForm;
