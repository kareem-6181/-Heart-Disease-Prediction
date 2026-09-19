from flask import Flask, render_template, request, jsonify
import pickle
import os

app = Flask(__name__)

# Get the directory where app.py is located
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Model paths
MODEL_PATH = os.path.join(BASE_DIR, "heart_model.pkl")
SCALER_PATH = os.path.join(BASE_DIR, "scaler.pkl")

# Load trained model and scaler
with open(MODEL_PATH, "rb") as file:
    model = pickle.load(file)

with open(SCALER_PATH, "rb") as file:
    scaler = pickle.load(file)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    features = [[
        float(data["age"]),
        float(data["sex"]),
        float(data["cp"]),
        float(data["trestbps"]),
        float(data["chol"]),
        float(data["fbs"]),
        float(data["restecg"]),
        float(data["thalach"]),
        float(data["exang"]),
        float(data["oldpeak"]),
        float(data["slope"]),
        float(data["ca"]),
        float(data["thal"])
    ]]

    # Apply the same scaler used during training
    features_scaled = scaler.transform(features)

    # Prediction
    prediction = model.predict(features_scaled)[0]

    # Probability
    probability = model.predict_proba(features_scaled)[0][1]

    return jsonify({
        "prediction": int(prediction),
        "probability": round(float(probability) * 100, 2)
    })


if __name__ == "__main__":
    app.run(debug=True)