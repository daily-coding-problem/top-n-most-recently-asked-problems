// Please note that this code is intended to be run in a browser console.
// You can run this code in the browser console by visiting the LeetCode company page and pasting the code in the console.
// Please ensure that you have LeetCode Premium access to view the company-specific problems.

// Set the desired number of problems to retrieve
const N = 50; // Change this value to get a different number of problems

// Get all div elements on the page
const divs = document.querySelectorAll('div');

// Filter and find divs with more than 25 children and get their first N children
const divsWithFirstNChildren = Array.from(divs)
    .filter(div => div.children.length > 25)
    .map(div => ({
        divElement: div,
        firstNChildren: Array.from(div.children).slice(0, N) // Get first N children
    }));

console.log(divsWithFirstNChildren);

// Extract and pretty print problem name, id, and difficulty from the first N children
const problems = divsWithFirstNChildren.flatMap(item => {
    // Check if firstNChildren has elements before mapping
    if (item.firstNChildren.length === 0) {
        console.warn('No children found in this div:', item.divElement);
        return [];
    }

    return Array.from(item.firstNChildren).map(link => {
        const problemName = link.querySelector('.ellipsis.line-clamp-1')?.textContent.trim();
        const problemId = link.id;

        // Get the difficulty level (easy, medium, hard)
        const difficultyElement = link.querySelector('p.text-\\[14px\\]');
        const difficulty = difficultyElement ? difficultyElement.textContent.trim() : null;

        return {
            id: problemId,
            name: problemName,
            difficulty: difficulty
        };
    });
});

// Pretty print the results
console.table(problems);

// Check if there are fewer than N problems
if (problems.length < N) {
    console.log(`Note: Only ${problems.length} problems found. Not all companies may have ${N} problems.`);
}
