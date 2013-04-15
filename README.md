# Jenkins Proxy Server
Proxy all requests on port `80` to port `8080`. Jenkins listens on port 8080 and we want to be able to access it via `http://ci.docparse.com`

# Installation
`npm install -g simple-proxy`

# Usage

```bash
simple-proxy --listen-port <port to listen to> --forward-port <port to forward to>
```

# Example
Say you have a Jenkins server running on port 8080 and you want to connect via port 80. You would run simple-proxy with the command

```
simple-proxy --listen-port 80 --forward-port 8080
```
