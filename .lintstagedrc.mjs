export default {
  "*.{ts,tsx,json,yml,yaml}": [
    "eslint --cache src",
    "prettier --check"
  ],
  "*.md": [
    "prettier --write"
  ],
}