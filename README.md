### GITHUB steps

## 1. Initialize Git
If your project is not already a Git repository, initialize it:
 git init

## 2. Add Files to Staging
Add all files in your project to the staging area:
git add .

## 3. Commit Changes
Commit the staged files with a message:
git commit -m "Initial commit"

## 4. Create a GitHub Repository
Go to GitHub and create a new repository. Copy the repository URL (e.g., https://github.com/username/repo-name.git).

## 5. Add Remote Repository
Link your local repository to the GitHub repository:
git remote add origin https://github.com/username/repo-name.git

## 6. Push to GitHub
Push your code to the main branch (or master if your repository uses it):
git branch -M main
git push -u origin main

## 7. Create a New Branch
Run the following command to create a new branch for the release:
git checkout -b pre-release
This creates a new branch named pre-release and switches to it.

## 8. Push the New Branch to GitHub
Push the new branch to your remote repository:
git push -u origin pre-release
This uploads the pre-release branch to GitHub and sets it as the upstream branch.

## 9. Work on the Pre-Release Branch
Make changes and commits in the pre-release branch as needed:
git add .
git commit -m "Changes for pre-release"
git push

## 10. Merge Pre-Release into Main
When the release date arrives and you're ready to merge the pre-release branch into main, switch to the main branch:
git checkout main
Then merge the pre-release branch into main:
git merge pre-release

## 11. Push the Updated Main Branch
Push the merged changes to the main branch on GitHub:
git push

## This will:
Fetch the latest changes from the main branch on the remote repository.
Merge those changes into your local main branch.
git checkout main

## git checkout main
git pull origin main
