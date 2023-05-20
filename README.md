# CRUD Blog API

This is a CRUD Blog API built with Express.js, MongoDB, Mongoose, TypeScript, and JWT authentication.

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Create a `.env` file in the project root and provide the required environment variables (refer to the `.env.example` file).
4. Start the server with `npm run dev`.

## Usage

### Register a User

**Endpoint:** `/auth/register`

**Method:** `POST`

**Request Body:**

```json
{
  "username": "example",
  "password": "password"
}
```

### Login

**Endpoint:** `/auth/login`

**Method:** `POST`

**Request Body:**

```json
{
  "username": "example",
  "password": "password"
}
```

### Create a Blog

**Endpoint:** `/blogs`

**Method:** `POST`

**Request Body:**

```json
{
  "title": "Example Blog",
  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}
```

### Get all Blogs

**Endpoint:** `/blogs`

**Method:** `GET`

### Get a Blog by ID

**Endpoint:** `/blogs/:id`

**Method:** `GET`

### Update a Blog

**Endpoint:** `/blogs/:id`

**Method:** `PUT`

**Request Body:**

```json
{
  "title": "Updated Blog",
  "content": "Updated content"
}
```

### Delete a Blog

**Endpoint:** `/blogs/:id`

**Method:** `DELETE`

## License

This project is licensed under the MIT License.
