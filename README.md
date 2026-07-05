# Campervan Booking

A web application for browsing and choosing campervans. Users can explore the
catalog, filter vehicles, add campervans to favorites, view detailed
information, and complete a booking form.

## Live Demo

[Open Campervans on GitHub Pages](https://summermoved0n.github.io/Campervans-project/)

## Features

- Home page with information about the service
- Campervan catalog loaded from an external API
- Search by location
- Filtering by equipment and vehicle type
- Progressive card loading with the `Load More` button
- Adding and removing campervans from favorites
- Persistent favorites stored in the browser's local storage
- Modal window with campervan photos, description, and specifications
- Reviews and ratings
- Booking form with required-field and future-date validation
- Responsive layout for mobile, tablet, and desktop screens

## Pages

- `/` — home page
- `/catalog` — campervan catalog and filters
- `/favorites` — campervans saved by the user

## Technologies

- React
- React Router
- Redux Toolkit
- React Redux
- Redux Persist
- Axios
- CSS Modules
- Styled Components

## Data

Catalog data is loaded from
[MockAPI](https://6636d78a288fedf6937edb3a.mockapi.io/api/adverts). The catalog,
filters, and favorites are managed with Redux Toolkit. Redux Persist stores the
favorites list between browser sessions.

## Getting Started

An LTS version of [Node.js](https://nodejs.org/) is required.

1. Clone the repository:

   ```bash
   git clone https://github.com/summermoved0n/Campervans-project.git
   ```

2. Go to the project directory:

   ```bash
   cd Campervans-project
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

The application will be available at
[http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm start
```

Starts the local development server.

```bash
npm run build
```

Creates an optimized production build in the `build` directory.

```bash
npm run lint:js
```

Checks JavaScript and JSX files with ESLint.

```bash
npm test
```

Starts the Create React App test runner. Automated tests have not been added to
the project yet.

## Project Structure

```text
src/
├── components/   # Reusable UI components
├── Icons/        # SVG icons implemented as React components
├── images/       # Images used on the home page
├── pages/        # Page components
├── redux/        # Redux store, slice, selectors, and async thunk
└── services/     # API requests and supporting components
```

## Deployment

The project is configured to build and deploy automatically to GitHub Pages
after the `main` branch is updated. The workflow is located at
`.github/workflows/deploy.yml`.

## Limitations

- The API is used as an external demonstration data source.
- The booking form validates the entered data and displays a notification, but
  does not submit the request to a server.
- Automated tests are not currently included.
