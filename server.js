'use strict';
/**
 * BHB Market — web entry point.
 *   node server.js            → http://localhost:3000
 *   node server.js --port=4000
 * Data lives in ./data/db.json (atomic, transactional JSON store).
 */
const path = require('path');
const { JsonStore } = require('./lib/store-json');
const { createApi } = require('./lib/domain');
const { createApp } = require('./lib/http-app');

const PORT = parseInt(process.env.PORT || (process.argv.find((a) => a.startsWith('--port=')) || '').split('=')[1] || '3000', 10);
const DATA_FILE = process.env.BHB_DATA || path.join(__dirname, 'data', 'db.json');

const store = new JsonStore(DATA_FILE).init();
const api = createApi(store);
api.seed();

const server = createApp(store);
server.listen(PORT, '0.0.0.0', () => {
  console.log('\n' + '─'.repeat(66));
  console.log('  BHB Market — بوحلوان إخوان');
  console.log('  http://localhost:' + PORT);
  console.log('  الحساب: admin / Admin@2026');
  console.log('─'.repeat(66) + '\n');
});

module.exports = { server, store };
