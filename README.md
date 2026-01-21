## Groupa ERP API (NestJS + PostgreSQL)

Backend API built with NestJS, TypeScript, TypeORM and PostgreSQL for the Groupa ERP project.

## Project setup

```bash
pnpm install
```

## Environment configuration

This project uses a local PostgreSQL database configured via environment variables in a `.env` file at the project root.

- `TYPEORM_DB_HOST` – database host (e.g. `localhost`)
- `TYPEORM_DB_PORT` – database port (e.g. `5432`)
- `TYPEORM_DB_USERNAME` – database user (e.g. `USER`)
- `TYPEORM_DB_PASSWORD` – database password (e.g. `PASSWORD`)
- `TYPEORM_DB_NAME` – database name (e.g. `GroupaERP`)
- `TYPEORM_DB_SSL` – whether to use SSL (`true` | `false`)
- `TYPEORM_DB_LOGGING` – enable TypeORM logging (`true` | `false`)
- `TYPEORM_DB_SYNCHRONIZE` – auto sync schema in dev (`true` | `false`)

You can use `.env.example` as a template:

```env
TYPEORM_DB_HOST=localhost
TYPEORM_DB_PORT=5432
TYPEORM_DB_USERNAME=USER
TYPEORM_DB_PASSWORD=PASSWORD
TYPEORM_DB_NAME=GroupaERP
TYPEORM_DB_SSL=false
TYPEORM_DB_LOGGING=true
TYPEORM_DB_SYNCHRONIZE=true
```

## Run the project

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev

# production (requires build)
pnpm run build
pnpm run start:prod
```

