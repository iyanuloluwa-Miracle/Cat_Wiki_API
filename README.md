
# Cat_Wikipedia API

An Intermediate level Api where you can browse throught different breeds of cats and get lots of information about them, search for a cat breed, view photos and also add endpoints like top friendly Cats and Intelligent Cats.

## Table of Contents

- [Introduction](#introduction)
- [Base URL](#base-url)
- [Endpoints](#endpoints)
- [Parameters](#parameters)
- [Response Format](#response-format)
- [Error Handling](#error-handling)
- [Examples](#examples)
- [Running the Project Locally](#running-the-project-locally)
- [Contact](#contact)

## Introduction

The Cat Wiki API allows you to retrieve information about various cat breeds, including their details, photos, and search capabilities.

## Base URL

The base URL for accessing the Cat Wiki API is: `https://api.catwiki.com/v1`

## Endpoints

The Cat Wiki API provides the following endpoints:

- `GET /breeds`: Retrieves a list of cat breeds.
- `GET /breeds/:id`: Retrieves detailed information about a specific cat breed.
- `GET /breeds/search?name={breedName}`: Searches for cat breeds based on the provided name.

## Parameters

The Cat Wiki API endpoints use the following parameters:

- For the `/breeds` endpoint: No additional parameters required.
- For the `/breeds/:id` endpoint:
  - `id` (required): The ID of the breed to fetch details for.
- For the `/breeds/search` endpoint:
  - `name` (required): The name of the breed to search for.

## Response Format

The responses from the Cat Wiki API are returned in JSON format. The structure of the response depends on the endpoint being accessed.

## Error Handling

In case of errors, the Cat Wiki API may return appropriate status codes and error messages. Refer to the documentation for each endpoint to understand the possible error scenarios.

## Examples

Examples of API requests and responses can be found in the [examples.md](examples.md) file.

## Running the Project Locally

To run the Cat Wiki API project locally, follow these steps:

1. Install the project dependencies using npm:

   ```bash
   npm install

2. Set up the required environment variables, such as database connection details or API keys.

3. Start the API.
   ```bash
   npm start

4. The Cat Wiki API will now be accessible at http://localhost:3000/api/breeds. Use tools like cURL or Postman to test the API endpoints.   

## Tech Stack

**Server:** Node, Express


## Deployment

To run this project locally

```bash
  npm install
```

