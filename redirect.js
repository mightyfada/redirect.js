const http = require("http");

const routes = {
  "/open-ticket": "https://discord.gg/officialsupport",
  "/support": "https://discord.gg/officialsupport",
  "/complaint": "https://discord.gg/officialsupport",
  "/join": "https://discord.gg/officialsupport",
  // add as many as you want
};

http.createServer((req, res) => {
  const destination = routes[req.url];

  if (destination) {
    res.writeHead(301, { Location: destination });
    res.end();
  } else {
    // fallback for unknown routes
    res.writeHead(301, { Location: "https://discord.gg/officialsupport" });
    res.end();
  }
}).listen(80, () => console.log("Redirect server running"));
```

Now you can have:
```
http://YOUR_IP/open-ticket   → your discord
http://YOUR_IP/support       → your discord
http://YOUR_IP/complaint     → your discord
http://YOUR_IP/join          → your discord
