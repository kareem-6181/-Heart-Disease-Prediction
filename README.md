# -Heart-Disease-Prediction
# ❤️ Heart Disease Prediction

A Machine Learning web application that predicts the likelihood of heart disease based on patient medical information.

The project uses **Logistic Regression** as the classification model and provides an easy-to-use web interface for entering patient data and getting a prediction.

## 🚀 Live Demo

🔗 **Live Application:**
[Add your Render URL here]

## 📌 Project Overview

Heart disease is one of the major health problems worldwide. This project applies Machine Learning techniques to analyze patient data and predict whether a patient is likely to have heart disease.

The model was trained using the **Cleveland Heart Disease Dataset** and implemented using Python and Scikit-learn.

## 🧠 Machine Learning Model

The project uses:

* **Logistic Regression**
* Train/Test Split
* Classification Metrics
* Probability Prediction using `predict_proba()`

### Model Performance

The model achieved:

**Accuracy: 88.89%**

### Confusion Matrix

```text
[[31  2]
 [ 4 17]]
```

### Classification Report

```text
              precision    recall  f1-score   support

           0       0.89      0.94      0.91        33
           1       0.89      0.81      0.85        21

    accuracy                           0.89        54
   macro avg       0.89      0.87      0.88        54
weighted avg       0.89      0.89      0.89        54
```

## 📊 Features

The model uses the following patient features:

* Age
* Sex
* Chest Pain Type
* Resting Blood Pressure
* Cholesterol
* Fasting Blood Sugar
* Resting ECG
* Maximum Heart Rate
* Exercise Induced Angina
* ST Depression
* Slope
* Number of Major Vessels
* Thalassemia

## 🛠️ Technologies Used

* Python
* Pandas
* NumPy
* Scikit-learn
* Flask
* HTML
* CSS
* JavaScript
* Gunicorn
* Render
* Git & GitHub

## 📁 Project Structure

```text
Heart-Disease-Prediction/
│
├── app.py
├── heart_model.pkl
├── requirements.txt
├── README.md
│
├── templates/
│   └── index.html
│
└── static/
    ├── css/
    │   └── style.css
    │
    └── js/
        └── script.js
```

## ⚙️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Heart-Disease-Prediction.git
```

### 2. Navigate to the project folder

```bash
cd Heart-Disease-Prediction
```

### 3. Install the required libraries

```bash
pip install -r requirements.txt
```

### 4. Run the Flask application

```bash
python app.py
```

### 5. Open the application

Go to:

```text
http://127.0.0.1:5000
```

## 🌐 Deployment

The application is deployed using **Render**.

### Render Configuration

**Build Command:**

```bash
pip install -r requirements.txt
```

**Start Command:**

```bash
gunicorn app:app
```

## 🔍 Prediction

The application takes the patient's medical information as input and sends it to the trained Logistic Regression model.

The model then returns:

* Prediction re
