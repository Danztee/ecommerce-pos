# ECommerce POS

This is a Nuxt.js application built with Pinia for state management, Axios for HTTP requests, and Tailwind CSS for styling.

## Running the Application Locally

To run this application locally, follow these steps:

### Prerequisites

- Node.js installed on your machine (version 14.x or higher)
- npm or yarn package manager

### Installation

1. Clone this repository to your local machine

```bash
git clone https://github.com/Danztee/ecommerce-pos.git
```

2. Navigate into the project directory:

3. Install dependencies using npm or yarn:

```bash
npm install
or
yarn install
```

### Running the Application

Once the dependencies are installed, you can run the application in development mode with the following command:

```bash
npm run dev
or
yarn dev
```

This will start the development server and you should be able to access the application at `http://localhost:3000` in your web browser.

### Building the Application

To build the application for production, you can use the following command:

```bash
npm run build
or
yarn build
```

This will generate a production-ready build of your application in the `dist` directory.

### Generating Static Files

If you want to generate static files for hosting your application, you can use the following command:

```bash
npm run generate
or
yarn generate
```

This will create a `dist` directory containing all the static files that can be deployed to any static hosting service.

## Dependencies

- [@pinia/nuxt](https://github.com/posva/pinia/tree/main/packages/nuxt): ^0.5.1
- [axios](https://axios-http.com/): ^1.6.7
- [nuxt](https://nuxtjs.org/): ^3.10.3
- [pinia](https://pinia.esm.dev/): ^2.1.7
- [vue](https://v3.vuejs.org/): ^3.4.19
- [vue-router](https://router.vuejs.org/): ^4.3.0

## Development Dependencies

- [autoprefixer](https://github.com/postcss/autoprefixer): ^10.4.18
- [postcss](https://postcss.org/): ^8.4.35
- [tailwindcss](https://tailwindcss.com/): ^3.4.1
