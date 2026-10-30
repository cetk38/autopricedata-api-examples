#!/usr/bin/env bash
# Illustrative request: the endpoint and fields do not describe a live API.
curl -X POST https://api.example.com/v1/valuations \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d @request.json
