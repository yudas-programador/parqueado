import csv
import json
import re

def format_js_object(obj):
    """Formats a Python dict into a JS object literal string."""
    # Use json.dumps for basic structure, then remove quotes from keys
    json_str = json.dumps(obj, indent=4, ensure_ascii=False)
    # A regex to remove quotes from object keys
    json_str = re.sub(r'"(\w+)":', r'\1:', json_str)
    return json_str

def update_js_file(csv_path, js_path):
    """Reads parking data from a CSV and injects it into a JavaScript file."""
    all_spots = []
    
    try:
        with open(csv_path, mode='r', encoding='utf-8') as csvfile:
            # Use DictReader to easily access columns by name
            reader = csv.DictReader(csvfile)
            for row in reader:
                # Basic data conversion and structuring
                spot = {
                    'id': row['id'],
                    'name': row['name'],
                    'price': row['price'],
                    'lat': float(row['lat']),
                    'lon': float(row['lon']),
                    'publicParking': row['publicParking'],
                    'publicParkingPrice': row.get('publicParkingPrice', ''), # Use .get for optional columns
                    'category': row['category'],
                    'hours': {
                        'Mon': row['Mon'], 'Tue': row['Tue'], 'Wed': row['Wed'],
                        'Thu': row['Thu'], 'Fri': row['Fri'], 'Sat': row['Sat'], 'Sun': row['Sun']
                    }
                }
                all_spots.append(spot)
    except FileNotFoundError:
        print(f"Error: El archivo CSV '{csv_path}' no fue encontrado.")
        return
    except Exception as e:
        print(f"Error al leer el archivo CSV: {e}")
        return

    # Create the JavaScript array string by formatting each object and joining them
    js_objects = ",\n".join([format_js_object(spot) for spot in all_spots])
    js_array_string = f"[\n{js_objects}\n]"

    try:
        with open(js_path, 'r', encoding='utf-8') as jsfile:
            js_content = jsfile.read()

        # Use regex to find and replace the content between markers
        updated_js_content = re.sub(
            r'(// PARKING_SPOTS_START\n).*(\n\s*// PARKING_SPOTS_END)',
            r'\1  const allParkingSpots = ' + js_array_string + ';\n  // PARKING_SPOTS_END',
            js_content,
            flags=re.DOTALL # Important: allows '.' to match newlines
        )

        with open(js_path, 'w', encoding='utf-8') as jsfile:
            jsfile.write(updated_js_content)
        
        print(f"✅ ¡Éxito! El archivo '{js_path}' ha sido actualizado con los datos de '{csv_path}'.")

    except FileNotFoundError:
        print(f"Error: El archivo JavaScript '{js_path}' no fue encontrado.")
    except Exception as e:
        print(f"Error al actualizar el archivo JavaScript: {e}")

if __name__ == "__main__":
    # Define the paths to your files
    csv_file_path = 'parking_spots.csv'
    js_file_path = 'script_mockup.js'
    update_js_file(csv_file_path, js_file_path)