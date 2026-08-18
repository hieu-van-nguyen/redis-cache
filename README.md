# Redis Cache - GitHub Repos Fetcher

A simple Node.js Express server that fetches a user's public repositories from the GitHub API and provides the foundation for caching those responses using Redis.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Redis](https://redis.io/) server running on `localhost:6379`

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd redis-cache
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`.

2. Fetch repositories for a GitHub user:
   ```bash
   curl http://localhost:5000/repos/your-github-username
   ```

## API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/repos/:username` | Fetches public repositories for the specified GitHub username. |

## Architecture

- **Express**: Handles HTTP requests and routing.
- **Node-fetch**: Performs asynchronous requests to the GitHub REST API.
- **Redis**: Used for caching API responses to reduce latency and avoid GitHub API rate limits.
