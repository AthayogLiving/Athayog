import { getSchedule } from '@/lib/db/db-admin';

import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { updateSchedule } from '@/lib/db/schedule';

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
          try {
               const type = req.query.type;
               const schedule = await getSchedule(type);

               res.status(200).json({ schedule });
          } catch (error) {
               res.status(500).json(error);
          }
     }

     if (req.method === 'POST') {
          try {
               const { data } = req.body;

               const type = req.query.type;

               await data.map((individual) => {
                    updateSchedule(type, individual);
               });

               return res.status(200).json({
                    message: 'Updated Schedule'
               });
          } catch (error) {
               return res.status(500).json(error);
          }
     }
}
