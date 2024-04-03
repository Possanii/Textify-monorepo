# Textify API

This repository contains the source code for Textify API, a simple API built with Express.js and Mongoose, designed to handle text-related operations.

## Installation

To install the dependencies, make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed. Then, run the following command:

```bash
yarn install
```

# Configuration

The application uses environment variables for configuration. Change the name of`.env.exemplo` to `.env` in the root directory of the api and define the following variables:

- `API_PORT`: Port to call the api (**default: 3001**).
- `DATABASE_URL`: URI for connecting to your MongoDB database.
- `SECRET`: Your secret key to create [JWT tokens](https://jwt.io/).

## Usage

To start the server, run:

```bash
yarn dev
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
