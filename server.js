import express from 'express';
import cors from 'cors';
import config from './config/index.js';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import teamRoutes from './routes/teams.js';
import CTFRoutes from './routes/ctf.js';
import aj, { isSpoofedBot } from './config/arcjet.js';

const app = express();

app.use(cors());
app.use(express.json());

// Arcjet protection middleware
const arcjetProtect = async (req, res, next) => {
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return res.status(429).json({ error: 'Too Many Requests' });
    } else if (decision.reason.isBot()) {
      return res.status(403).json({ error: 'No bots allowed' });
    } else {
      return res.status(403).json({ error: 'Forbidden' });
    }
  } else if (decision.ip.isHosting()) {
    return res.status(403).json({ error: 'Forbidden' });
  } else if (decision.results.some(isSpoofedBot)) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
};

// app.use(arcjetProtect);

app.use('/api/auth', authRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/ctf', CTFRoutes);

app.get('/', (req, res) => res.json({ ok: true, env: config.env }));

const start = async () => {
  await connectDB();
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port} in ${config.env} mode`);
  });
};

start();
