# Import necessary modules
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import the Flask-CORS extension

# Create a Flask application
app = Flask(__name__)

# Configure CORS settings to allow requests from any origin
CORS(app, resources={r"/*": {"origins": "*"}})

# Define global variables
counter = 0
biggerthanzero = 0
stepcounter = {}

# Define a function to calculate time for steps considering prerequisites


def preq(step):
    global counter
    global stepcounter

    # If the step is "busy," increment the counter by the step's time
    if step['busy']:
        counter += int(step['time'])
        stepcounter[step['id']] = 0

        # Update step times based on prerequisites
        for i in stepcounter.keys():
            if not stepcounter[i] == stepcounter[step['id']]:
                stepcounter[i] -= int(step['time'])
                if stepcounter[i] < 0:
                    stepcounter[i] = 0
    else:
        stepcounter[step['id']] = int(step['time'])

# Define a main function to process the data


def main(data):
    global counter
    global stepcounter
    global biggerthanzero

    for step in data:
        if not step["preq"]:
            preq(step)
        else:
            for i in stepcounter.keys():
                if stepcounter[i] > biggerthanzero:
                    biggerthanzero = stepcounter[i]
                    counter += biggerthanzero
            preq(step)

# Define a route to handle POST requests


@app.route('/', methods=['POST'])
def handle_post_request():
    if request.is_json:
        data = request.get_json()
        main(data)
        global counter, biggerthanzero, stepcounter

        # Store the calculated value and reset global variables
        calculated_value = counter
        counter = 0
        biggerthanzero = 0
        stepcounter = {}

        # Return the result as a JSON response
        response_data = {
            'message': 'POST is succesfull', 'perfect_time': calculated_value
        }
        return jsonify(response_data)

    else:
        # Return an error response for incorrect data format
        return jsonify({'error': 'Wrong data format'})


if __name__ == '__main__':
    # Run the Flask application
    app.run()
