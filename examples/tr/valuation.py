"""Illustrative request: the endpoint and fields do not describe a live API."""
import os

import requests

payload = {
  "vehicle": {
    "category": "passenger_car",
    "make": "ornek_marka",
    "model": "ornek_model",
    "model_year": 2021,
    "trim": "orta_donanim",
    "mileage_km": 48000,
    "fuel_type": "gasoline",
    "transmission": "automatic",
    "condition": "good",
    "damage_record": "none"
  },
  "market": {
    "country": "TR",
    "region": "istanbul"
  },
  "pricing_rule_id": "standart_alim"
}

response = requests.post(
    "https://api.example.com/v1/valuations",
    headers={"Authorization": f"Bearer {os.environ['API_KEY']}"},
    json=payload,
    timeout=10,
)
result = response.json()
print(result["market_reference"]["value"], result["business_offer"]["amount"])
