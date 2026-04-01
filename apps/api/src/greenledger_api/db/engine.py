from sqlalchemy import create_engine
from sqlalchemy.engine import Engine

from greenledger_api.config.settings import get_settings


def create_db_engine(database_url: str | None = None) -> Engine:
    return create_engine(database_url or get_settings().database_url, pool_pre_ping=True)


engine = create_db_engine()
