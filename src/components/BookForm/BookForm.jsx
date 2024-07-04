import React from 'react';

import css from './BookForm.module.css';

export default function BookForm() {
  return (
    <div className={css.book_conteiner}>
      <form>
        <h2 className={css.book_title}>Book your campervan now</h2>
        <p className={css.book_text}>
          Stay connected! We are always ready to help you.
        </p>
        <input className={css.book_input} type="text" placeholder="Name" />
        <input className={css.book_input} type="email" placeholder="Email" />
        <input
          className={css.book_input}
          type="text"
          placeholder="Booking date"
        />
        <textarea className={css.book_input_comment} placeholder="Comment" />
        <button className={css.book_send_button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
