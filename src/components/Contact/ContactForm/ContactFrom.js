import React, { useRef, useState } from 'react'
import './contactForm.css'
import emailjs from "@emailjs/browser";
import 'bootstrap/dist/css/bootstrap.min.css';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from "@mui/material";







function ContactFrom() {

  const form = useRef();

  const [send,setSend] = useState(false);
  const [open, setOpen] = useState(false);
 

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setSend(false);
  };


  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        "service_vburgs7",
        "template_sgj7aoz",
        
        form.current,
        "74HMJgGxt2imLpLc4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      setSend(true);
      e.target.reset();
  };

  return (

            <form ref={form} id="myForm" onSubmit={sendEmail} className="php-email-form">
              <div className="row">

                <div className="col-md-6 form-group">
                  <input name="user_name" type="text" className="form-control" id="name" placeholder="Your Name" required />
                </div>

                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="text" className="form-control" name="user_email" id="email" placeholder="Your Email" required />
                </div>

              </div>

              <div className="form-group mt-3">
                <input type="text" className="form-control" name="message" id="subject" placeholder="Subject" required />
              </div>

              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>

              <div onClick={handleClick} className="text-center"><button type="submit">Send Message</button></div>


              {send && <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  message sended ✔︎
                </Alert>
              </Snackbar>}

            </form>


  )
}

export default ContactFrom