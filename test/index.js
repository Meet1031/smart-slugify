const { smartSlug } = require('../dist');

console.log(smartSlug("🔥 El mejor producto de inteligencia artificial en 2025", {
  maxWords: 5,
  language: "es",
  appendUniqueId: true
}));
