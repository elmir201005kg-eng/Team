one

git init
git status
git add .
git status
git commit -m "create card "
git branch -M main
git remote add origin https://github.com/baiyastan/learn.git
git push -u origin main

two
git clone https://github.com/baiyastan/learn.git

create branch (kadyr) команда эмес бранч тузуу
git status
git add .
git status
git commit -m "added header and style"

go to main branch (main) команда эмес бранчге отуу
git pull 

go to kadyr branch (kadyr) команда эмес бранчге отуу

git rebase main 
git push -u origin kadyr 

one 

go to main branch (main) команда эмес бранчге отуу
git pull 
create branch (footer) команда эмес бранч тузуу

git status
git add . 
git status
git commit -m "added footer"
go to main branch (main) команда эмес бранчге отуу

git pull 

go to footer branch (footer) команда эмес бранчге отуу
git rebase main 
git push -u origin footer
