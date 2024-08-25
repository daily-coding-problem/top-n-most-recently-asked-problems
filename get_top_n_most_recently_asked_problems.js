// Please note that this code is intended to be run in a browser console.
// You can run this code in the browser console by visiting the LeetCode company page and pasting the code in the console.
// Please ensure that you have LeetCode Premium access to view the company-specific problems.

// Get all div elements on the page
const divs = document.querySelectorAll('div');

// Filter and find divs with more than 25 children and get their first 50 children
const divsWithFirst50Children = Array.from(divs)
    .filter(div => div.children.length > 25)
    .map(div => ({
        divElement: div,
        first50Children: Array.from(div.children).slice(0, 50) // Get first 50 children
    }));

console.log(divsWithFirst50Children);

// Extract and pretty print problem name, id, and difficulty from the first 50 children
const problems = divsWithFirst50Children.flatMap(item => {
    // Check if first50Children has elements before mapping
    if (item.first50Children.length === 0) {
        console.warn('No children found in this div:', item.divElement);
        return [];
    }

    return Array.from(item.first50Children).map(link => {
        const problemName = link.querySelector('.ellipsis.line-clamp-1')?.textContent.trim();
        const problemId = link.id;
        // Escape the square brackets in the class name
        const difficulty = link.querySelector('p.text-\\[14px\\].text-sd-easy')?.textContent.trim();

        return {
            id: problemId,
            name: problemName,
            difficulty: difficulty
        };
    });
});

// Pretty print the results
console.table(problems);

// Check if there are fewer than 50 problems
if (problems.length < 50) {
    console.log(`Note: Only ${problems.length} problems found. Not all companies may have 50 problems.`);
}
