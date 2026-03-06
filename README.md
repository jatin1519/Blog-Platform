#  Blog Platform

A simple blog platform built using Docker Compose with multiple containers.  
The application allows users to create and view blog posts.

## Tech Stack

- Node.js (Backend API)
- MongoDB (Database)
- Nginx (Reverse Proxy)
- Docker & Docker Compose

---

## Architecture

Browser
   ↓
Nginx (Reverse Proxy)
   ↓
Frontend (Static HTML)
   ↓
Backend (Node.js API)
   ↓
MongoDB (Database)

---

## Project Structure

blog-platform
│
├── backend
│   ├── Dockerfile
│   ├── app.js
│   └── package.json
│
├── frontend
│   └── index.html
│
├── nginx
│   └── nginx.conf
│
└── docker-compose.yml

---

## Features

- Create blog posts
- View blog posts
- Containerized services
- Reverse proxy with Nginx
- Multi-container architecture

---

## API Endpoints

GET /api/blogs  
Returns all blog posts

POST /api/blogs  
Creates a new blog post

Example JSON:

{
 "title": "My First Docker Project",
 "content": "Learning Docker Compose with Node.js and MongoDB."
}

---

## Run the Project

Clone repository:

git clone https://github.com/jatin1519/docker-blog-platform.git

Go to project folder:

cd docker-blog-platform

Run containers:

docker-compose up --build

---

## Access Application

Open browser:

http://public-ip

---

## Learning Outcomes

- Docker containerization
- Docker Compose multi-service setup
- Reverse proxy using Nginx
- Backend API with Node.js
- MongoDB integration
