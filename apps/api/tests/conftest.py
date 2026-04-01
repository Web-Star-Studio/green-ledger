import pytest
from fastapi.testclient import TestClient

from greenledger_api.api.app import create_app


@pytest.fixture
def client() -> TestClient:
    return TestClient(create_app())
