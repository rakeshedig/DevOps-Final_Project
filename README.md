# 🚀 DevOps Final Project - Containerized Web Application

📄 Project Description

This project demonstrates a containerized web application using DevOps best practices. It includes:
	•	Frontend: Static web app served via Nginx
	•	Backend: Flask REST API serving an image
	•	Containerization: Docker
	•	Orchestration: Kubernetes (Minikube)

The project showcases microservices architecture, service proxying, and Kubernetes deployment.

⸻

🗂️ Project Structure

Devops_final/
├── backend/ # Flask backend service
│ ├── app.py
│ ├── requirements.txt
│ └── Dockerfile
├── frontend/ # Frontend static web application
│ ├── index.html
│ ├── style.css
│ ├── script.js
│ └── Dockerfile
├── kubernetes/ # Kubernetes manifests
│ ├── backend-deployment.yaml
│ ├── backend-service.yaml
│ ├── frontend-deployment.yaml
│ └── frontend-service.yaml
└── README.md # This file


⸻

⚙️ Prerequisites
	•	Docker￼
	•	Minikube￼
	•	kubectl￼
	•	Git

⸻

🛠️ Setup Instructions

1️⃣ Clone the repository

git clone git@github.com:rakeshedig/DevOps-Final_Project.git
cd DevOps-Final_Project/Devops_final

2️⃣ Build Docker Images

# Backend
cd backend
docker build -t rakeshedig/backend:latest .

# Frontend
cd ../frontend
docker build -t rakeshedig/frontend:latest .

3️⃣ Run Locally (Optional)

# Backend
docker run -d --name backend -p 5001:5000 rakeshedig/backend:latest

# Frontend
docker run -d --name frontend -p 8080:80 rakeshedig/frontend:latest

Access locally:
	•	Backend: http://localhost:5001/image
	•	Frontend: http://localhost:8080/

4️⃣ Kubernetes Deployment

# Start Minikube
minikube start

# Apply Kubernetes manifests
kubectl apply -f kubernetes/backend-deployment.yaml
kubectl apply -f kubernetes/frontend-deployment.yaml

# Verify Pods
kubectl get pods

# Verify Services
kubectl get svc

Access frontend via NodePort:

http://<minikube-ip>:30002/


⸻

🔍 Testing
	•	Backend image endpoint: http://<minikube-ip>:30001/image
	•	Frontend page should load with the image displayed below all text, centered.

⸻

💡 Notes
	•	Frontend uses Nginx to proxy backend image.
	•	Background image removed; image now displays below the text.
	•	Multiple replicas are configured in Kubernetes for both frontend and backend.
