import "./FormStyles.css"


import React from 'react'

const Forms = () => {
  return (
    <div className="form">
        <form action="https://formspree.io/f/mzblyjeo" method="POST">
            <label>Your Name</label>
            <input type="text" name="Name" placeholder="Enter Name" autoComplete="off" required></input>
            <label>Email ID</label>
            <input type="email" name="Email" placeholder="Enter Email" autoComplete="off" required></input>
            <label>Subject</label>
            <input type="text" name="Subject" placeholder="Enter Subject" autoComplete="off" required></input>
            <label>Message</label>
            <textarea rows="6" name="Message" placeholder="Type your Message" autoComplete="off" required/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Forms