import React from 'react';

export default function Filter() {
  return (
    <>
      <div>
        <p>Location</p>
        <input type="text" />
      </div>
      <form>
        <p>Filters</p>
        <p>Vehicle equipment</p>
        <hr />
        <label>
          <input type="checkbox" />
          AC
        </label>
        <label>
          <input type="checkbox" />
          Automatic
        </label>
        <label>
          <input type="checkbox" />
          Kitchen
        </label>
        <br />
        <label>
          <input type="checkbox" />
          TV
        </label>
        <label>
          <input type="checkbox" />
          Shower/WC
        </label>
        <p>Vehicle type</p>
        <label>
          <input type="checkbox" />
          Van
        </label>
        <label>
          <input type="checkbox" />
          Fully Integrated
        </label>
        <label>
          <input type="checkbox" />
          Alcove
        </label>
      </form>
      <button>Search</button>
    </>
  );
}
