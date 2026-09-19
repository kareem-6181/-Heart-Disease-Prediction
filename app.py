from flask import Flask, render_template, request, jsonify
import pickle
import os

app = Flask(__name__)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


def load_model():
    model_path = os.path.join(BASE_DIR, "heart_model.pkl")
    scaler_path = os.path.join(BASE_DIR, "scaler.pkl")

    with open(model_path, "rb") as file:
        model = pickle.load(file)

    with open(scaler_path, "rb") as file:
        scaler = pickle.load(file)

    return model, scaler


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    try:
        model, scaler = load_model()

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

        features_scaled = scaler.transform(features)

        prediction = model.predict(features_scaled)[0]

        probability = model.predict_proba(features_scaled)[0][1]

        return jsonify({
            "prediction": int(prediction),
            "probability": round(float(probability) * 100, 2)
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True)