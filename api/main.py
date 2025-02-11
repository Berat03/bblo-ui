from http.server import BaseHTTPRequestHandler, HTTPServer

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write('Hello, world!'.encode('utf-8'))
        return

if __name__ == '__main__':
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, handler)
    print('Starting server on port 8000...')
    httpd.serve_forever()