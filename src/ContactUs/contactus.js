import React, { Component } from 'react'

import { NetlifyForm, Honeypot } from 'react-netlify-forms'

const ContactUs = () => {
  
  return(
  <form
    name="simpleContactForm"
    method="POST"
    data-netlify="true"
    data-netlify-recaptcha="true"
    id="simple-contact-form"
    class="contact-form"
>
    <p class="form-row">
        <label id="contact-form-name-label" for="contact-form-name" class="form-label">Name</label>
        <input type="text" name="name" id="contact-form-name" aria-labelledby="contact-form-name-label" class="form-input" />
    </p>
    <p class="form-row">
        <label id="contact-form-email-label" for="contact-form-email" class="form-label">Email address</label>
        <input type="email" name="email" id="contact-form-email" aria-labelledby="contact-form-email-label" class="form-input" />
    </p>
    <p class="form-row">
        <label id="contact-form-message-label" for="contact-form-message" class="form-label">Message</label>
        <textarea
            name="message"
            id="contact-form-message"
            aria-labelledby="contact-form-message-label"
            class="form-textarea"
            rows="7"
        ></textarea>
    </p>
    <div data-netlify-recaptcha="true" class="form-row"></div>
    <p class="form-row form-submit">
        <button type="submit" class="button">Send Message</button>
    </p>
</form>

)}

// <NetlifyForm name='Contact' action='/submit/' honeypotName='bot-field'>
  //   {({ handleChange, success, error }) => (
  //     <>
  //       <Honeypot />
  //       {success && <p>Thanks for contacting us!</p>}
  //       {error && (
  //         <p>Sorryyyyyy, we could not reach our servers. Please try again later. god yes this works!!!!!!!!!!!!!!</p>
  //       )}
  //       <div>
  //         <label htmlFor='name'>Name:</label>
  //         <input type='text' name='name' id='name' onChange={handleChange} />
  //       </div>
  //       <div>
  //         <label htmlFor='message'>Message:</label>
  //         <textarea
  //           type='text'
  //           name='message'
  //           id='message'
  //           rows='4'
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         <button type='submit'>Submit</button>
  //       </div>
  //     </>
  //   )}
  // </NetlifyForm>

  





export default ContactUs;

