import http.server
import socketserver
import os
import sys

DIR = os.path.dirname(os.path.abspath(__file__))
os.chdir(DIR)
PORT = 8080

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

try:
    with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
        print(f"Wedding Invitation server running at http://localhost:{PORT}")
        sys.stdout.flush()
        httpd.serve_forever()
except Exception as e:
    print(f"Error starting server: {e}")
    sys.stdout.flush()

