# Project Name

A concise Express-based web application (API + server-rendered pages) with modular controllers, repositories, middleware, and simple JSON seed data.

## Project Link

https://roadmap.sh/projects/personal-blog

## Quick links

- Entry: [server.js](server.js)
- Config: [src/config/db.config.js](src/config/db.config.js), [src/config/keys.js](src/config/keys.js)
- Controllers: [src/controllers/article.controller.js](src/controllers/article.controller.js), [src/controllers/auth.controller.js](src/controllers/auth.controller.js)
- Middlewares: [src/middlewares/authMiddleware.js](src/middlewares/authMiddleware.js), [src/middlewares/exposeAuthState.js](src/middlewares/exposeAuthState.js), [src/middlewares/guestOnlyMiddleware.js](src/middlewares/guestOnlyMiddleware.js)
- Repositories: [src/repositories/base.repository.js](src/repositories/base.repository.js), [src/repositories/article.repository.js](src/repositories/article.repository.js), [src/repositories/admin.repository.js](src/repositories/admin.repository.js)
- Routes: [src/routes/](src/routes/)
- Views / Static: [src/views/](src/views/), [public/css/](public/css/)
- Database seed: [database/admin/collection.json](database/admin/collection.json), [database/article/collection.json](database/article/collection.json)
- Tests & requests: [test/](test/), [requests/](requests/)
- Project file list: [package.json](package.json), [.env.example](.env.example)

## Features

- Server entry at [server.js](server.js).
- Modular request handling via controllers in [src/controllers/](src/controllers/).
- Data access encapsulated in repository classes in [src/repositories/](src/repositories/).
- Authentication and route guarding using middleware in [src/middlewares/](src/middlewares/).
- Configurable DB and secrets in [src/config/](src/config/).
- Seed JSON collections located in [database/](database/).

## Prerequisites

- Node.js (LTS)
- pnpm or npm

## Setup

1. Copy environment template:
   ```sh
   cp .env.example .env
   ```
2. Install dependencies:
   ```sh
   pnpm install
   # or
   npm install
   ```
3. Run the development server:
   ```sh
   pnpm dev
   # or
   npm run dev
   ```
4. Access the app at `http://localhost:8080`.

## Testing

- Tests are located in the [test/](test/) directory.
- To run tests, use:
  ```sh
  pnpm test
  # or
  npm test
  ```

## API Documentation

- API endpoints are documented within the code, using JSDoc comments.
- To generate API documentation, run:
  ```sh
  pnpm docs
  # or
  npm run docs
  ```
- View documentation at `docs/index.html`.

## Troubleshooting

- Common issues are listed in the [FAQ](FAQ.md).
- For further assistance, check the [GitHub Issues](https://github.com/your-repo/issues) or contact the maintainer.

## Contributing

- Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details..

## Acknowledgments

- Inspired by [Project Name or Idea Source].
- Thanks to [Contributors, Libraries, etc.].
