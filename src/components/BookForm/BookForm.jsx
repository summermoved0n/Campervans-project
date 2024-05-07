import React from 'react';

export default function BookForm() {
  return (
    <div>
      <form>
        <p>Book your campervan now</p>
        <p>Stay connected! We are always ready to help you.</p>
        <input type="text" placeholder="Name" />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <input type="date" placeholder="Booking date" />
        <br />
        <textarea name="" rows="3" cols="20" placeholder="Comment"></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
