import http.server
import socketserver

# Set the directory where your audio files are located
audio_directory = '/path/to/your/audio/files'

# Define the port for your server
port = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", port), Handler) as httpd:
    print(f"Serving at port http://localhost:{port}")
    httpd.serve_forever()

