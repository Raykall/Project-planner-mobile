# plann.er - Backend (Fastify + Prisma)

This is the backend for the plann.er project, built with Fastify, TypeScript, and Prisma (SQLite). It includes API documentation via Swagger and email sending with Nodemailer (Ethereal for tests).

## Requirements
- Node.js 18+
- PNPM, NPM or Yarn
- SQLite (already shipped via the `db.sqlite` file)

## Environment Setup
Create a `.env` file in the project root `server/` with the variables below:

```
# HTTP server port
PORT=3333

# SQLite database (local file)
DATABASE_URL="file:./prisma/db.sqlite"

# Base URLs (adjust for your deployment)
API_BASE_URL="http://localhost:3333"
WEB_BASE_URL="http://localhost:3000"
```

- Variables are validated by `zod` in `src/env.ts`.
- Prisma uses the `DATABASE_URL` defined in `.env`.

## Installation

With NPM:
```bash
npm install
```

With PNPM:
```bash
pnpm install
```

## Available Scripts

- `npm run dev`: starts the server with reload (uses `tsx` and `.env`).
- `npm run build`: compiles TypeScript with `tsup` in ESM format (outputs to `dist/`).
- `npm start`: runs the compiled version (`dist/http/server.mjs`).
- `npm run db:migrate`: runs Prisma migrations in development mode.
- `npm run db:studio`: opens Prisma Studio at `http://localhost:5556`.

## Database (Prisma)

- The schema is at `prisma/schema.prisma` using `sqlite` provider.
- Main models: `Trip`, `Participant`, `Activity`, `Link`.
- Migrations live at `prisma/migrations/`.
- Optional: seed in `prisma/seed.ts` (configured in `package.json` via `prisma.seed`).

Useful commands:
```bash
# Apply migrations
npm run db:migrate

# Open Prisma Studio
npm run db:studio
```

## Running the Server

Development:
```bash
npm run dev
```
Access API docs: `http://localhost:3333/docs`

Production (after build):
```bash
npm run build && npm start
```

## API Documentation (Swagger)

- Swagger is enabled in `src/http/app.ts` with `@fastify/swagger` and `@fastify/swagger-ui`.
- UI available at `/docs`.
- The API uses validation and typing via `zod` and `fastify-type-provider-zod`.

## Available Routes

- [x] Create new trip (`POST /trips`)
- [x] Register user (`POST /users`)
- [x] Authenticate via magic link (`GET /authenticate`)
- [x] Confirm trip (`PATCH /trips/:id/confirm`)
- [x] Trip details (`GET /trips/:id`)
- [x] Update trip (`PUT /trips/:id`)
- [x] Get trip activities (`GET /trips/:id/activities`)
- [x] Create trip activity (`POST /trips/:id/activities`)
- [x] Get trip links (`GET /trips/:id/links`)
- [x] Create trip link (`POST /trips/:id/links`)
- [x] Get trip participants (`GET /trips/:id/participants`)
- [x] Create a new invite (`POST /trips/:id/invites`)
- [x] Get user confirmation status for trip (`GET /trips/:id/confirmation-status`)

Note: input/output validations are defined in handlers under `src/http/routes/`.

## CORS

- Configured in `src/http/app.ts` with `@fastify/cors` allowing `origin: "*"` and `credentials: true`.

## Emails (Nodemailer)

- Implemented in `src/mail/index.ts` with `nodemailer`.
- Uses `Ethereal` (auto-generated test account) to inspect emails in development environment.

## Project Structure

```
server/
  src/
    http/
      app.ts           # Registers plugins, Swagger, CORS and routes
      server.ts        # Starts the Fastify server
      routes/          # API route handlers
      errors.ts        # Error handler
    lib/
      prisma.ts        # Prisma client
      dayjs.ts         # Date configuration
    mail/
      index.ts         # Email client (Ethereal)
    env.ts             # Environment variables validation
  prisma/
    schema.prisma      # Database schema
    migrations/        # Prisma migrations
    seed.ts            # (Optional) Data seed
  db.sqlite            # Local database (when present)
```

## Deployment

- Set `DATABASE_URL`, `API_BASE_URL`, `WEB_BASE_URL` and `PORT` correctly in the environment.
- Build and start the app:
```bash
npm run build
npm start
```
- In serverless/container environments, ensure the SQLite file is persisted or switch the provider to another RDBMS.

## License

ISC. See `package.json`.
