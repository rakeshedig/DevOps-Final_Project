# 🚀 DevOps Final Project - Containerized Web Application

Welcome to the Cloud DevOps & Automation Final Project (Fall 2025) for Clark University.
This project demonstrates containerized frontend and backend services deployed with Docker and Kubernetes (Minikube).

⸻

Project Structure

Devops_final/
├── backend/                  # Flask backend service
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/                 # Frontend static web application
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── Dockerfile
├── kubernetes/               # Kubernetes manifests
│   ├── backend-deployment.yaml
│   ├── frontend-deployment.yaml
└── README.md                 # This file

⸻

🖥️ Technology Stack
	•	Frontend: HTML5, CSS3, JavaScript, served via Nginx
	•	Backend: Flask (Python) REST API
	•	Containerization: Docker
	•	Orchestration: Kubernetes (Minikube)

⸻

⚡ Features
	•	Microservices architecture with separate frontend and backend
	•	Backend image proxied to frontend
	•	Simple REST endpoint for status and health checks
	•	Fully containerized deployment for consistent environments
	•	Deployed with Kubernetes with multiple replicas

⸻

🏗️ Setup & Run Locally

1️⃣ Clone the repository

git clone https://github.com/rakeshedig/DevOps-Final_Project.git
cd DevOps-Final_Project

2️⃣ Build Docker images

Backend
cd backend
docker build -t rakeshedig/backend:latest .

Frontend
cd ../frontend
docker build -t rakeshedig/frontend:latest .

3️⃣ Run containers locally (optional, before Kubernetes)

Backend

docker run -d –name backend_test -p 5001:5000 rakeshedig/backend:latest

Frontend

docker run -d –name frontend_test -p 8080:80 –network host rakeshedig/frontend:latest

Test:
	•	Backend image: http://localhost:5001/image
	•	Frontend page: http://localhost:8080/

⸻

4️⃣ Deploy on Kubernetes (Minikube)

Start Minikube
minikube start

Apply Kubernetes manifests
kubectl apply -f kubernetes/backend-deployment.yaml
kubectl apply -f kubernetes/backend-service.yaml
kubectl apply -f kubernetes/frontend-deployment.yaml
kubectl apply -f kubernetes/frontend-service.yaml

Check pods & services
kubectl get pods
kubectl get svc

Access the frontend via NodePort
minikube ip

Use the NodePort of frontend service, e.g., http://:30002/

⸻

📌 Notes
	•	Make sure your backend service is running before starting the frontend.
	•	All images are pushed to Docker Hub under your username (rakeshedig).
	•	The frontend proxies requests to the backend for fetching the sample image.
