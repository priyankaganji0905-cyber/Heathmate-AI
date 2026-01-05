from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "HealthMate is running!"

@app.route("/patient")
def patient():
    patient_data = {
        "name": "John Doe",
        "age": 70,
        "conditions": ["Hypertension", "Diabetes"]
    }
    return jsonify(patient_data)

if __name__ == "__main__":
    app.run(debug=True)
