from collections.abc import Generator

from sqlalchemy.orm import Session, sessionmaker

from greenledger_api.db.engine import engine

SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False, expire_on_commit=False, class_=Session)


def get_session_factory() -> sessionmaker[Session]:
    return SessionLocal


def get_session() -> Generator[Session, None, None]:
    with SessionLocal() as session:
        yield session
