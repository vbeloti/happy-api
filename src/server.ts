import express from 'express';

import './database/connection';

const app = express();

app.get('/users', (req, res) => {
  return res.json({ ok: true})
})

app.listen(3333);
