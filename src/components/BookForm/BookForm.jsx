import React, { useState } from 'react';
import Notiflix from 'notiflix';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_red.css';

import css from './BookForm.module.css';
// import { CalendarIcon } from 'Icons/Calendar';

export default function BookForm({ setModalIsOpen }) {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputComment, setInputComment] = useState('');
  const [date, setDate] = useState('');

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setInputName(value);
        break;
      case 'email':
        setInputEmail(value);
        break;
      case 'comment':
        setInputComment(value);
        break;
      case 'calendar':
        setDate(value);
        break;

      default:
        return;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const data = {
      name: inputName,
      email: inputEmail,
      date,
      comment: inputComment,
    };
    // console.log(data);
    const isValidated = validationForm(data);

    if (!isValidated) {
      return Notiflix.Notify.failure('All fields should be fill in😴');
    }

    formCleaner();
    setModalIsOpen(false);
    Notiflix.Notify.success(
      'Sent successful! Our manager will connect with you soon🥰'
    );
  };

  const validationForm = data => {
    const dataValues = Object.values(data);
    return dataValues.every(item => item !== '');
  };

  const formCleaner = () => {
    setInputName('');
    setInputEmail('');
    setDate('');
    setInputComment('');
  };

  return (
    <div className={css.book_conteiner}>
      <form onSubmit={onFormSubmit}>
        <h2 className={css.book_title}>Book your campervan now</h2>
        <p className={css.book_text}>
          Stay connected! We are always ready to help you.
        </p>
        <input
          className={css.book_input}
          name="name"
          value={inputName}
          type="text"
          placeholder="Name"
          onChange={onInputChange}
        />
        <input
          className={css.book_input}
          name="email"
          value={inputEmail}
          type="email"
          placeholder="Email"
          onChange={onInputChange}
        />
        <Flatpickr
          options={{
            enableTime: false,
            time_24hr: true,
            defaultDate: new Date(),
            minuteIncrement: 1,
          }}
          className={css.book_calendar}
          placeholder="Booking date"
          value={date}
          onChange={([date]) => {
            const currentDate = new Date();
            if (date < currentDate) {
              setDate('');
              return Notiflix.Notify.failure(
                'Please choose a date in the future'
              );
            }
            const dateValue = `${date.getDate()}-${
              date.getMonth() + 1
            }-${date.getFullYear()}`;
            setDate(dateValue);
          }}
        />

        <textarea
          className={css.book_input_comment}
          name="comment"
          value={inputComment}
          placeholder="Comment"
          onChange={onInputChange}
        />
        <button className={css.book_send_button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
