# 📚 LESSON 1: GIT & GITHUB

# 📖 1. Git Commands:

Before working with Git, we need to know some basic configurations:
-  Config username (user name): 

        git config –global user.name “<tên bạn>”

- Config email (email address): 

        git config –global user.email “<email của bạn>”
- Config branch default (default branch): 

        git config –global init.defaultBranch main


# 📖 2. Steps to push code to GitHub
1. Create a new folder on your local machine (ex: markdown)
2. Create a new repository on the Github (ex: markdown)
3. Open VScode and open created folder "markdown"
4. Add one or more files to the folder using VS code
5. Open Terminal and run the following commands: 

        1. git innit //khởi tạo git
        2. git remote add origin <ssh address> //gán git cho 1 repo
        3. git add . //thêm file muốn lưu vào staging
        4. git commit -m"message" //save changes
        5. git push origin main //push code to github

__NOTE:__ 

- Gen key: 

        ssh-keygen -t rsa -b 4096 -C“your_email@example.com”
        
        Lấy nội dung ssh key: cat ~/.ssh/id_rsa.pub 
        

# 📖 3. Git - Version Control System

What are the benefits of using VCS: 

- Easily manage versions: track the history of changes, and go back to perivious versions.
- There are 3 main types of VCS: 

        - Local: Stored on your local machine, and mainly used to create backup and save different
        - Centralize: Stored on a central sever. If there is a problem with your local machine, you can retrive the file from the server
        - Distributed: Stored on multiple machines. Each user has a complete copy of the repository

__NOTE:__ Distributed version control systems are the most popular. Git is a distributed version control system
