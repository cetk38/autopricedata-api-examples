# AutoPriceData API — integration examples

Request and response examples for the **[AutoPriceData](https://www.autopricedata.com/en/) vehicle valuation API**: send vehicle and market details, receive the **estimated market reference value** and the **offer price calculated with your own pricing rule** in separate objects.

> **These examples are illustrative.** The endpoint (`api.example.com`), field names and values do not describe a live API and contain no real market data. Final technical details are shared in the documentation provided after your application is approved. Valuation results are estimated reference values; they are not final sale prices or binding purchase offers.

## Contents

| Folder | Market | Currency | Business rule |
|---|---|---|---|
| [`examples/us`](examples/us) | United States · Texas | USD | 15% below the market reference |
| [`examples/tr`](examples/tr) | Türkiye · İstanbul | TRY | 5% below the market reference |

Each folder contains the same request in **cURL**, **JavaScript (Node.js 18+)**, **Python** and **PHP**, plus the sample request and response as JSON.

## How it works

```
vehicle details ──▶  POST /v1/valuations  ──▶  market_reference  (estimated market value and range)
market + rule id                              business_offer    (your rule applied to the reference)
```

The market reference and your business offer are always returned in separate fields and never mixed up — you decide the offer, the API calculates it consistently.

## Sample response

```json
{
  "demo": true,
  "valuation_id": "val_demo_0001",
  "currency": "USD",
  "market_reference": {
    "value": 17000,
    "range": { "low": 16200, "high": 17800 },
    "basis": "estimated_market_reference"
  },
  "business_offer": {
    "pricing_rule_id": "standard_purchase",
    "rule": { "type": "percentage_below_reference", "value": 15 },
    "amount": 14450
  },
  "notice": "Estimated value; not a final sale price or a binding purchase offer."
}
```

| Field | Description |
|---|---|
| `demo` | Indicates that the sample response contains illustrative data. |
| `currency` | Currency of the values (ISO 4217). |
| `market_reference.value` | Estimated market reference value. |
| `market_reference.range` | Estimated lower and upper bounds for the reference value. |
| `business_offer.rule` | The business rule applied. |
| `business_offer.amount` | Offer price calculated with the business rule. It is not a market average. |
| `notice` | A note stating that the result is an estimate and is not binding. |

## Integration approach

- **REST and JSON** — callable with any common HTTP client, no extra libraries.
- **Key-based access** — API keys are issued by our team after your application is approved; they are not sold automatically.
- **Versioned endpoints** — so that changes don't affect existing integrations.
- **Separate value fields** — the market reference and the business offer are never mixed up.

## Getting access

Apply on the website and our team will review your use case and the systems you'll integrate:

- English: <https://www.autopricedata.com/en/apply/>
- Türkçe: <https://www.autopricedata.com/basvuru/>
- Developers page: <https://www.autopricedata.com/en/developers/>

## License

The example code in this repository is released under the [MIT License](LICENSE).
