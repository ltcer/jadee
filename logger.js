function log(level, msg) {
  const ts = new Date().toISOString();
  console.log(`[${ts}] [${level}] ${msg}`);
}

module.exports = {
  info: (m) => log("INFO", m),
  warn: (m) => log("WARN", m),
  error: (m) => log("ERROR", m),
};
