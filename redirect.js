const http = require("http");

const routes = {
  "/open-ticket": "https://discord.gg/officialsupport",
  "/support": "https://discord.gg/officialsupport",
  "/complaint": "https://discord.gg/officialsupport",
};

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  const destination = routes[req.url];

  if (destination) {
    res.writeHead(301, { Location: destination });
    res.end();
  } else {
    res.writeHead(301, { Location: "https://discord.gg/officialsupport" });
    res.end();
  }
}).listen(PORT, () => console.log(`Redirect server running on port ${PORT}`));
