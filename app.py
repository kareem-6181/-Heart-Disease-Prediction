from flask import Flask, render_template, request, jsonify
import pickle

app = Flask(__name__)

# Load the trained model and scaler
model = pickle.load(open("heart_model.pkl", "rb"))
scaler = pickle.load(open("scaler.pkl", "rb"))


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    # Features must be in the exact same order
    # used during model training
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

    # Apply the same StandardScaler used during training
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