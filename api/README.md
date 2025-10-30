# Auth Gateway

A lightweight authentication gateway for managing user access to microservices.

## Features

- JWT-based authentication
- Role-based access control (RBAC)
- Rate limiting
- Logging and monitoring

## Prerequisites

- Node.js 18+
- npm 9+
- Redis (for session storage)

## Installation

```bash
npm install
cp .env.example .env
```

## Configuration

Edit the `.env` file with your configuration:

```ini
PORT=3000
JWT_SECRET=your-secret-key
REDIS_URL=redis://localhost:6379
```

## Usage

Start the server:

```bash
npm start
```

Run tests:

```bash
npm test
```

## API Endpoints

| Method | Path           | Description               |
|--------|----------------|---------------------------|
| POST   | /auth/login    | User login                |
| POST   | /auth/register | User registration         |
| GET    | /auth/verify   | Token verification        |

## License

MIT