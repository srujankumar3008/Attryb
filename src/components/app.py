from flask import Flask, jsonify, request

app = Flask(__name__)

# Dummy data
OEM_SPECS = [
    {
        'id': 1,
        'manufacturer': 'Honda',
        'model_name': 'City',
        'year': 2015,
        'list_price': 1500000,
        'colors': 'White, Silver, Black',
        'mileage': 18.5,
        'power': 118,
        'max_speed': 180
    },
    {
        'id': 2,
        'manufacturer': 'Maruti',
        'model_name': 'Swift',
        'year': 2020,
        'list_price': 750000,
        'colors': 'Red, Blue, Grey',
        'mileage': 20.0,
        'power': 82,
        'max_speed': 160
    },
    {
        'id': 3,
        'manufacturer': 'BMW',
        'model_name': 'X5',
        'year': 2019,
        'list_price': 7000000,
        'colors': 'White, Black',
        'mileage': 13.2,
        'power': 335,
        'max_speed': 250
    }
]

@app.route('/api/oem-models/count', methods=['GET'])
def get_oem_models_count():
    count = len(OEM_SPECS)
    return jsonify({'count': count})

@app.route('/api/oem-specs/search', methods=['GET'])
def search_oem_specs():
    manufacturer = request.args.get('manufacturer')
    model_name = request.args.get('model_name')
    year = int(request.args.get('year'))

    matching_specs = [
        spec for spec in OEM_SPECS
        if spec['manufacturer'] == manufacturer
        and spec['model_name'] == model_name
        and spec['year'] == year
    ]

    return jsonify({'specs': matching_specs})

if __name__ == '__main__':
    app.run()
    