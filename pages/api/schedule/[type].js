import { getSchedule } from '@/lib/db/db-admin';

import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { createSchedule } from '@/lib/db/schedule';

// Initialize the cors middleware
const cors = initMiddleware(
     // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
     Cors({
          // Only allow requests with GET, POST and OPTIONS
          methods: ['GET', 'POST', 'OPTIONS'],
          origin: true
     })
);

export default async function handler(req, res) {
     // Run cors
     await cors(req, res);

     if (req.method === 'GET') {
          const type = req.query.type;
          const schedule = await getSchedule(type);

          res.status(200).json({ schedule });
     }

     if (req.method === 'POST') {
          const { data } = req.body;
          console.log('Data', data);
          await createSchedule('generalSchedule', data);
          return res.status(200).json({
               message: 'Updated Schedule'
          });
     }
}
