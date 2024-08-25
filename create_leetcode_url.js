// Please note that this code is intended to be run in a browser console or a Node.js environment.
// You can run this code in the browser console by visiting the LeetCode company page and pasting the code in the console.
// Please ensure that you have LeetCode Premium access to view the company-specific problems.
//
// Visit https://leetcode.com/company/[COMPANY]/?favoriteSlug=[COMPANY]-[TIMEFRAME]s&difficulty=[DIFFICULTY] to view the problems.
// This URL template allows users to access LeetCode problems specifically categorized by company.
//
// Breakdown of the URL:
// - Base URL: https://leetcode.com/company/
// - [COMPANY]: Placeholder to be replaced with the actual company name (e.g., google, microsoft, amazon).
// - Query Parameters:
//   - favoriteSlug=[COMPANY]-[TIMEFRAME]: Indicates a set of favorite problems for the specified company over the last (last-30-days, 3-months, 6-months, etc).
//   - difficulty=[DIFFICULTY]: Specifies the difficulty levels of the problems to display (either Medium, Easy, Hard).
//
// Example: For the Top 50 Most Recently Asked Questions at Microsoft in the last 6 months, the URL would be:
// https://leetcode.com/company/microsoft/?favoriteSlug=microsoft-six-months&difficulty=MEDIUM%2CEASY

/**
 * Create a LeetCode URL for a specific company, difficulty, and timeframe.
 *
 * @param {string} company - The name of the company (e.g., "microsoft").
 * @param {string} difficulty - The difficulty levels (comma-separated, e.g., "MEDIUM,EASY").
 * @param {string} timeframe - The timeframe for the problems (e.g., "six-months").
 * @returns {string} - The formatted URL.
 */
function createLeetCodeURL(company, difficulty, timeframe) {
    // Base URL
    const baseUrl = 'https://leetcode.com/company/';

    // Construct the URL
    const url = `${baseUrl}${company}/?favoriteSlug=${company}-${timeframe}&difficulty=${encodeURIComponent(difficulty)}`;

    return url;
}

// Example parameters (can be customized)
const company = 'microsoft'; // Replace with the desired company
const difficulty = 'MEDIUM,EASY'; // Replace with the desired difficulty levels
const timeframe = 'six-months'; // Replace with the desired timeframe

// Generate the URL
const leetCodeURL = createLeetCodeURL(company, difficulty, timeframe);
console.log('Generated URL:', leetCodeURL);
