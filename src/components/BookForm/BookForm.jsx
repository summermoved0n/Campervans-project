import React, { useState } from 'react';

import { Calendar } from 'primereact/calendar';

import css from './BookForm.module.css';
import '../../services/styles/calendar.css';
import { CalendarIcon } from 'Icons/Calendar';

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
    console.log(data);
    formCleaner();
    setModalIsOpen(false);
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
        <div className={css.book_data_conteiner}>
          <Calendar
            panelClassName={css.book_calendar}
            inputClassName={css.book_input_date}
            todayButtonClassName={css.book_calendar_today}
            value={date}
            name="calendar"
            placeholder="Booking date"
            onChange={onInputChange}
          />
          <button className={css.book_calendar_btn} type="button">
            <CalendarIcon />
          </button>
        </div>

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
