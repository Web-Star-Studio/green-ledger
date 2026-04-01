SHELL := /bin/bash

ROOT_DIR := $(CURDIR)
API_DIR := $(ROOT_DIR)/apps/api
WEB_DIR := $(ROOT_DIR)/apps/web
PYTHON_VERSION := 3.12

.PHONY: setup db-up db-down migrate dev-api dev-web dev test-api lint-web typecheck-web

setup:
	cd "$(API_DIR)" && uv sync --python $(PYTHON_VERSION)
	cd "$(ROOT_DIR)" && pnpm install

db-up:
	cd "$(ROOT_DIR)" && docker compose up -d postgres

db-down:
	cd "$(ROOT_DIR)" && docker compose down

migrate:
	cd "$(API_DIR)" && uv run alembic upgrade head

dev-api:
	cd "$(API_DIR)" && uv run uvicorn greenledger_api.main:app --reload --host 0.0.0.0 --port 8000

dev-web:
	cd "$(ROOT_DIR)" && pnpm --filter @greenledger/web dev

dev:
	cd "$(API_DIR)" && uv run uvicorn greenledger_api.main:app --reload --host 0.0.0.0 --port 8000 & \
	API_PID=$$!; \
	trap "kill $$API_PID" EXIT INT TERM; \
	cd "$(ROOT_DIR)" && pnpm --filter @greenledger/web dev

test-api:
	cd "$(API_DIR)" && uv run pytest

lint-web:
	cd "$(ROOT_DIR)" && pnpm --filter @greenledger/web lint

typecheck-web:
	cd "$(ROOT_DIR)" && pnpm --filter @greenledger/web typecheck
