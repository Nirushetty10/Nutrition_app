import React, { useEffect } from "react";
import "./ContactUs.scss";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MapComponent from "../MapComponent/MapComponent";
import FaqComponent from "../FaqComponent";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <NavBar />
      <div className="contact-container">
        <div className="contact-details">
          <h1>CONTACT US</h1>
          <div className="contact-form">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 3, width: "60ch" },
              }}
              noValidate
              autoComplete="true"
            >
              <div>
                <TextField
                  inputMode="email"
                  id="outlined-error-helper-text"
                  label="email"
                />
                <br />
                <TextField
                  inputMode="numeric"
                  id="outlined-error-helper-text"
                  label="number"
                />
                <br />
                <TextField
                  variant="outlined"
                  placeholder="Write comments to keep in touch with us..."
                  multiline
                  rows={5}
                  rowsMax={10}
                />
              </div>
            </Box>
          </div>
          <button type="button" className="first_button">Contact Us</button>
        </div>
        <div className="contact-map">
          <MapComponent/>
        </div>
      </div>
      <FaqComponent/>
      <Footer/>
    </>
  );
};

export default ContactUs;
