import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { Facility } from '../../types/facility';
import initMiddleware from '../../lib/init-middleware';

const Facilities: Facility[] = [
  {
    id: '600b033e7d246d1a4c8a49b4',
    name: 'Pawi 1',
    website: 'www.website.pl',
    streetName: 'Wielka',
    city: 'Opole',
    houseNumber: '3',
    postcode: '21-221',
    description:
      'najlepsze warzywa w okolicynajlepsze warzywa w okolicynajlepsze warzywa w okolicynajlepsze warzywa w okolicy najlepsze warzywa w okolicy najlepsze warzywa w okolicy... najlepsze warzywa w okolicy... najlepsze warzywa w okolicy.... najlepsze warzywa w okolicy...',
    latitude: 17.188637,
    longitude: 50.170789,
  },
  {
    id: '600b033e7d246d1a4c8a49b5',
    name: 'Pawi 2',
    website: 'www.website.pl',
    streetName: 'Wielka',
    city: 'Opole',
    houseNumber: '3',
    postcode: '21-221',
    description:
      'najlepsze warzywa w okolicynajlepsze warzywa w okolicynajlepsze warzywa w okolicynajlepsze warzywa w okolicy najlepsze warzywa w okolicy najlepsze warzywa w okolicy... najlepsze warzywa w okolicy... najlepsze warzywa w okolicy.... najlepsze warzywa w okolicy...',
    latitude: 17.188631,
    longitude: 53.170781,
  },
  {
    id: '600b033e7d246d1a4c8a49b6',
    name: 'Pawi 3',
    website: 'www.website.pl',
    streetName: 'Wielka',
    city: 'Opole',
    houseNumber: '3',
    postcode: '21-221',
    description:
      'najlepsze warzywa w okolicynajlepsze warzywa w okolicynajlepsze warzywa w okolicynajlepsze warzywa w okolicy najlepsze warzywa w okolicy najlepsze warzywa w okolicy... najlepsze warzywa w okolicy... najlepsze warzywa w okolicy.... najlepsze warzywa w okolicy...',
    latitude: 11.188677,
    longitude: 50.170789,
  },
  {
    id: '600b033e7d246d1a4c8a49b7',
    name: 'Pawi 4',
    website: 'www.website.pl',
    streetName: 'Wielka',
    city: 'Opole',
    houseNumber: '3',
    postcode: '21-221',
    description:
      'najlepsze warzywa w okolicynajlepsze warzywa w okolicynajlepsze warzywa w okolicynajlepsze warzywa w okolicy najlepsze warzywa w okolicy najlepsze warzywa w okolicy... najlepsze warzywa w okolicy... najlepsze warzywa w okolicy.... najlepsze warzywa w okolicy...',
    latitude: 12.188637,
    longitude: 50.170769,
  },
];

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
);

export default async function handler(req: NextApiRequest, res: NextApiResponse<Image[]>) {
  await cors(req, res);
  res.status(200).json(Facilities);
}
