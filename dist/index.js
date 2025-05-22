"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smartSlug = smartSlug;
const stopwords = {
    en: ["a", "the", "is", "on", "in", "for", "and", "of", "to", "with", "by"],
    hi: ["का", "है", "पर", "और", "से", "के", "को", "कि", "में", "यह", "था"],
    es: ["el", "la", "los", "las", "en", "de", "por", "para", "con", "y"],
    fr: ["le", "la", "les", "en", "et", "pour", "dans", "du", "des", "de"]
};
function smartSlug(text, options = {}) {
    const { maxWords = 10, language = "en", appendUniqueId = false } = options;
    let slug = text
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[\p{Emoji_Presentation}]/gu, "")
        .replace(/[^a-zA-Z0-9\s-]/g, "")
        .toLowerCase()
        .split(/\s+/)
        .map(word => word.trim())
        .filter(word => word.length > 0 &&
        !stopwords[language]?.includes(word))
        .slice(0, maxWords)
        .join("-");
    if (appendUniqueId) {
        const id = Math.floor(1000 + Math.random() * 9000);
        slug += `-${id}`;
    }
    return slug;
}
