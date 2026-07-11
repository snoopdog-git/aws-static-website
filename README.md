# 🚀 AWS Static Portfolio Website

This project demonstrates how to deploy a static website on an Amazon EC2 instance using Nginx and manage the source code with Git and GitHub.

---

## 📌 Project Overview

The website is developed locally using VS Code, stored in GitHub, and deployed to an EC2 instance.

---

## 🏗 Architecture

```
VS Code
   │
   ▼
Git Repository
   │
git push
   ▼
GitHub Repository
   │
git pull
   ▼
Amazon EC2
   │
Nginx
   ▼
Live Website
```

---

## 🛠 Technologies Used

- Amazon EC2
- Amazon Linux 2023
- Nginx
- Git
- GitHub
- HTML
- CSS
- JavaScript
- VS Code
- MobaXterm

---

## 📂 Project Structure

```
aws-static-website/
│
├── index.html
├── about.html
├── projects.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md
```

---

## 🚀 Deployment Steps

Clone the repository:

```bash
git clone https://github.com/snoopdog-git/aws-static-website.git
```

Update the server:

```bash
git pull
sudo cp -r * /usr/share/nginx/html/
```

Refresh the browser.

---

## 📚 Skills Learned

- Launching an EC2 Instance
- Configuring Security Groups
- Installing Nginx
- Hosting Static Websites
- Git & GitHub Workflow
- Linux File Management
- Website Deployment

---

## 🔮 Future Improvements

- GitHub Actions CI/CD
- Docker
- Terraform
- Kubernetes
- HTTPS with SSL
- Custom Domain
- Monitoring

---

Developed by **Sagar**