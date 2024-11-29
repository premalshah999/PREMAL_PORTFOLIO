import os
import random
import datetime

# 🔹 Change this to your repository's path
REPO_PATH = "/Users/premalshah/Desktop/PREMAL_PORTFOLIO"

# 🔹 Number of commits to generate
NUM_COMMITS = random.randint(150, 300)  # Random between 150-300 commits

# 🔹 Your GitHub username & email
GIT_USERNAME = "premalshah999"
GIT_EMAIL = "premalshah1305@gmail.com"

# 🔹 List of realistic commit messages
COMMIT_MESSAGES = [
    "Fix minor bug in script",
    "Update README with more details",
    "Refactor code for better readability",
    "Add error handling to main function",
    "Optimize database query",
    "Improve performance of loop",
    "Fix typo in comments",
    "Add unit tests for new feature",
    "Update dependencies",
    "Refactor function for reusability",
    "Implement logging for debugging",
    "Fix indentation issue",
    "Remove redundant code",
    "Improve UI for better user experience",
    "Fix issue with date formatting",
    "Update documentation with examples",
    "Optimize image loading time",
    "Fix CSS alignment issue",
    "Improve mobile responsiveness",
    "Refactor API calls for efficiency",
    "Fix off-by-one error",
    "Add missing import statement",
    "Refactor data processing logic",
    "Improve security by adding validation",
    "Fix merge conflicts",
    "Document new API endpoints",
    "Enhance error messages",
    "Fix pagination issue",
    "Improve caching mechanism",
    "Refactor authentication module",
    "Add support for new feature",
    "Fix issue with dark mode",
    "Improve loading times",
    "Fix broken links in documentation"
]

# Function to create and push commits
def make_commit(commit_date, commit_message):
    os.chdir(REPO_PATH)  # Move to repo folder

    # Create or update a dummy file
    with open("commit_log.txt", "a") as file:
        file.write(f"{commit_date}: {commit_message}\n")

    # Add changes to Git
    os.system("git add .")
    os.system(f'GIT_AUTHOR_DATE="{commit_date}" GIT_COMMITTER_DATE="{commit_date}" git commit -m "{commit_message}"')

# Set Git username and email
os.system(f'git config user.name "{GIT_USERNAME}"')
os.system(f'git config user.email "{GIT_EMAIL}"')

# Generate commits spread randomly across the year
start_date = datetime.datetime.now() - datetime.timedelta(days=365)
for _ in range(NUM_COMMITS):
    random_days = random.randint(1, 365)  # Choose a random day in the past year
    random_time = datetime.timedelta(hours=random.randint(0, 23), minutes=random.randint(0, 59))
    commit_date = start_date + datetime.timedelta(days=random_days) + random_time
    commit_message = random.choice(COMMIT_MESSAGES)  # Choose a random commit message

    make_commit(commit_date.strftime("%Y-%m-%dT%H:%M:%S"), commit_message)

# Push all commits to GitHub
os.system("git push origin main")  # Change 'main' to your default branch if needed
