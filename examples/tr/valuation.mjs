// Illustrative request (Node.js 18+): the endpoint and fields do not describe a live API.
const response = await fetch('https://api.example.com/v1/valuations', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
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
  }),
});

const { market_reference, business_offer } = await response.json();
console.log('Market reference:', market_reference.value, '| Offer:', business_offer.amount);
