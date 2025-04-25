@echo off
:: Prompt for commit message
set /p commitMsg=Enter your commit message: 

:: Git commands
echo Adding changes...
git add .

echo Committing changes...
git commit -m "%commitMsg%"

echo Pushing to current branch...
git push

pause