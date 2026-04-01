from greenledger_api.api.routes import health as health_routes
from fastapi.testclient import TestClient


def test_health_returns_ok(client: TestClient) -> None:
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_ready_returns_ready_with_configured_session(monkeypatch, client: TestClient) -> None:
    class FakeSession:
        def __enter__(self):
            return self

        def __exit__(self, exc_type, exc, tb) -> bool:
            return False

        def execute(self, statement) -> int:
            return 1

    monkeypatch.setattr(health_routes, "get_session_factory", lambda: FakeSession)

    response = client.get("/ready")

    assert response.status_code == 200
    assert response.json()["status"] == "ready"
