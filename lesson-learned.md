# 📚 LESSON 1: GIT & GITHUB

# 1. Git Commands:

Before working with Git, we need to know some basic configurations:
-  Config username (user name): 

        git config –global user.name “<tên bạn>”

- Config email (email address): 

        git config –global user.email “<email của bạn>”
- Config branch default (default branch): 

        git config –global init.defaultBranch main


# 2. Steps to push code to Github
1. Create a new folder on your local (ex: markdown)
2. Create a new repository on your github (ex: markdown)
3. Open VScode and open created folder "markdown"
4. Add one or some files to your folder on VS code
5. Open Terminal and run commands: 

        1. git innit //khởi tạo git
        2. git remote add origin <ssh address> //gán git cho 1 repo
        3. git add . //thêm file muốn lưu vào staging
        4. git commit -m"message" //save changes
        5. git push origin main //push code to github