# Top N Most Recently Asked Problems

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![LeetCode](https://img.shields.io/badge/-LeetCode-FF4B00?style=flat-square&logo=leetcode&logoColor=white)

![Example](/images/example.png)

Top N Most Recently Asked Problems is a JavaScript-based tool designed to generate URLs for accessing LeetCode problems specifically categorized by company, difficulty, and timeframe. This tool allows users to focus their study on the most frequently asked questions in technical interviews.

## Table of Contents

-  [Features](#features)
-  [Prerequisites](#prerequisites)
-  [Usage](#usage)
-  [License](#license)

## Features

-  Generates LeetCode URLs for specific companies based on difficulty and timeframe.
-  Fetches the most recently asked problems for targeted interview preparation.
-  Outputs problem details in a structured format.

## Prerequisites

Before you begin, ensure you have met the following requirements:

-  A modern web browser (e.g., Chrome, Firefox) to run the JavaScript code.
-  LeetCode Premium access to view company-specific problems.

## Usage

### Create a URL for a Specific Company

To generate a URL for a specific company (e.g., Amazon, Meta, Google), follow these steps:

1. **Open LeetCode**:
   - Visit the LeetCode homepage at [https://leetcode.com/](https://leetcode.com/).

2. **Open Developer Tools**:
   - Right-click anywhere on the page and select **Inspect**, or press `F12` on your keyboard.

3. **Go to the Console Tab**:
   - In the Developer Tools, click on the **Console** tab.

4. **Run the Script**:
   - Copy and paste the code from [`create_leetcode_url.js`](/create_leetcode_url.js) into the console and press `Enter`. You will need to modify the script to select your *company*, *timeframe*, and *difficulties*.

5. **Generate the URL**:
   - The script will output a URL that you can use to access the LeetCode problems for the specified company.

### Obtain Top N Most Recently Asked Questions

Once you have the URL, you can obtain the top N most recently asked questions by following these steps:

1. **Open LeetCode Company Page**:
   - Navigate to the specific company page on LeetCode (e.g., [https://leetcode.com/company/microsoft/](https://leetcode.com/company/microsoft/)).

2. **Open Developer Tools**:
   - Right-click on the page and select **Inspect**, or press `F12` on your keyboard.

3. **Go to the Console Tab**:
   - Click on the **Console** tab in the Developer Tools.

4. **Run the Script**:
   - Copy and paste the code from [`get_top_n_most_recently_asked_problems.js`](/get_top_n_most_recently_asked_problems.js) into the console and press `Enter`.

5. **View the Results**:
   - The script will extract and display the top N most recently asked questions in a structured format in the console.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
