# Local Proxy Server
Proxy all requests on a given port another to port on localhost. 

# Installation
`npm install -g local-proxy`

# Usage

```bash
local-proxy --listen-port <port to listen to> --forward-port <port to forward to>
```

# Example
Say you have a Jenkins server running on port 8080 and you want to connect via port 80. You would run simple-proxy with the command

```
local-proxy --listen-port 80 --forward-port 8080
```

# Test

```bash
# install development dependencies
npm install
# run tests
npm test
```


