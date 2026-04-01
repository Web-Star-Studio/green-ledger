# GreenLedger Monorepo

Bootstrap inicial do MVP do GreenLedger em um monorepo polyglot sem `turbo`.

## Stack

- `apps/api`: FastAPI, SQLAlchemy, Alembic, LangGraph stub, testes com `pytest`, gerenciado por `uv`
- `apps/web`: Next.js App Router com TypeScript e ESLint, gerenciado por `pnpm`
- Postgres local via Docker Compose

## Estrutura

```text
.
├── apps
│   ├── api
│   └── web
├── docker-compose.yml
├── Makefile
└── pnpm-workspace.yaml
```

`packages/` nao foi criado por design. Ele so deve surgir quando existir compartilhamento real entre apps.

## Runtime alvo

- Python `3.12`
- Node `22 LTS`

## Configuracao de ambiente

1. Copie `.env.example` para `.env`
2. Ajuste valores se necessario

Variaveis principais:

- `DATABASE_URL`: conexao usada pelo backend
- `NEXT_PUBLIC_API_BASE_URL`: URL base que o frontend usa para validar integracao com a API
- `POSTGRES_*`: credenciais e porta do banco no Docker Compose

O app web carrega o `.env` da raiz via `@next/env`, entao nao e necessario manter um `.env.local` separado so para o bootstrap.

## Setup

```bash
make setup
make db-up
make migrate
```

## Desenvolvimento

API:

```bash
make dev-api
```

Web:

```bash
make dev-web
```

API + Web:

```bash
make dev
```

## Validacao

Healthcheck da API:

```bash
curl http://localhost:8000/health
curl http://localhost:8000/ready
```

Testes e checks:

```bash
make test-api
make lint-web
make typecheck-web
```

## Flow / backlog

A task de bootstrap existe como `GL-41` no ciclo `Foundation do produto e tenancy`. O bootstrap considera esse item bloqueante para o ciclo 1.
