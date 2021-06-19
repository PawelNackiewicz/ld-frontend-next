import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { Facility } from '../../types/facility';
import initMiddleware from '../../lib/init-middleware';

const Facilities: Facility[] = [
  {
    id: '600b033e7d246d1a4c8a49bsas4',
    name: 'Masarnia Golomb',
    streetName: 'Pl. 1-go Maja',
    city: 'Szczedrzyk',
    houseNumber: '11',
    postCode: '46-042',
    description:
      'Zakład rzeźniczo-wędliniarski ,,GOLOMB” w Szczedrzyku przekazywany z pokolenia na pokolenie istnieje od 1975 r. Od początku istnienia największą uwagę przywiązuje do jakości wyrobów kładąc ogromny nacisk na produkcję wyrobów bez konserwantów. W zakładzie w dalszym ciągu wędzimy w tradycyjnych wędzarniach. Naszą siłą jest zespół doświadczony wieloletnim stażem pracy. Firma współpracuje ze sprawdzonymi hodowcami trzody chlewnej, a także z rolnikami naszego regionu. Naszym atutem jest to, iż wszystkie receptury wg których pracujemy mają wieloletnią tradycję rodzinną.',
    latitude: 18.15258,
    longitude: 50.7034,
    logoPath: '/facilities/golomb/masarnia_golomb.png',
    backgroundImage: '/facilities/golomb/background1.jpeg',
    facebook: 'https://www.facebook.com/Masarnia-Golomb-397058614363136',
  },
  {
    id: '600b033e7d246d1a4c8a49z4',
    name: 'Masarnia Golomb',
    streetName: 'Juliusza Słowackiego',
    city: 'Ozimek',
    houseNumber: '1',
    postCode: '46-040',
    description:
      'Zakład rzeźniczo-wędliniarski ,,GOLOMB” w Szczedrzyku przekazywany z pokolenia na pokolenie istnieje od 1975 r. Od początku istnienia największą uwagę przywiązuje do jakości wyrobów kładąc ogromny nacisk na produkcję wyrobów bez konserwantów. W zakładzie w dalszym ciągu wędzimy w tradycyjnych wędzarniach. Naszą siłą jest zespół doświadczony wieloletnim stażem pracy. Firma współpracuje ze sprawdzonymi hodowcami trzody chlewnej, a także z rolnikami naszego regionu. Naszym atutem jest to, iż wszystkie receptury wg których pracujemy mają wieloletnią tradycję rodzinną.',
    latitude: 18.22092,
    longitude: 50.68028,
    logoPath: '/facilities/golomb/masarnia_golomb.png',
    backgroundImage: '/facilities/golomb/background2.jpeg',
    facebook: 'https://www.facebook.com/Masarnia-Golomb-397058614363136',
  },
  {
    id: '600b033e7d246d1a4c8a49b1',
    name: 'Masarnia Golomb',
    streetName: 'ul. Osowska',
    city: 'Łubniany',
    houseNumber: '4',
    postCode: '46-024',
    description:
      'Zakład rzeźniczo-wędliniarski ,,GOLOMB” w Szczedrzyku przekazywany z pokolenia na pokolenie istnieje od 1975 r. Od początku istnienia największą uwagę przywiązuje do jakości wyrobów kładąc ogromny nacisk na produkcję wyrobów bez konserwantów. W zakładzie w dalszym ciągu wędzimy w tradycyjnych wędzarniach. Naszą siłą jest zespół doświadczony wieloletnim stażem pracy. Firma współpracuje ze sprawdzonymi hodowcami trzody chlewnej, a także z rolnikami naszego regionu. Naszym atutem jest to, iż wszystkie receptury wg których pracujemy mają wieloletnią tradycję rodzinną.',
    latitude: 17.99905,
    longitude: 50.77832,
    logoPath: '/facilities/golomb/masarnia_golomb.png',
    backgroundImage: '/facilities/golomb/background3.jpeg',
    facebook: 'https://www.facebook.com/Masarnia-Golomb-397058614363136',
  },
  {
    id: '600b033e7d246d1a4c8a49b455',
    name: 'Masarnia Golomb',
    streetName: 'ul. Namysłowska',
    city: ' Dobrzeń Wielki',
    houseNumber: '8',
    postCode: '46-081',
    description:
      'Zakład rzeźniczo-wędliniarski ,,GOLOMB” w Szczedrzyku przekazywany z pokolenia na pokolenie istnieje od 1975 r. Od początku istnienia największą uwagę przywiązuje do jakości wyrobów kładąc ogromny nacisk na produkcję wyrobów bez konserwantów. W zakładzie w dalszym ciągu wędzimy w tradycyjnych wędzarniach. Naszą siłą jest zespół doświadczony wieloletnim stażem pracy. Firma współpracuje ze sprawdzonymi hodowcami trzody chlewnej, a także z rolnikami naszego regionu. Naszym atutem jest to, iż wszystkie receptury wg których pracujemy mają wieloletnią tradycję rodzinną.',
    latitude: 17.84424,
    longitude: 50.76133,
    logoPath: '/facilities/golomb/masarnia_golomb.png',
    backgroundImage: '/facilities/golomb/background4.jpeg',
    facebook: 'https://www.facebook.com/Masarnia-Golomb-397058614363136',
  },
  {
    id: '600b033e7d246d1a4c8a49b4',
    name: 'Masarnia Golomb',
    streetName: 'Wróblińska',
    city: 'Kępa',
    houseNumber: '1',
    postCode: '46-022',
    description:
      'Zakład rzeźniczo-wędliniarski ,,GOLOMB” w Szczedrzyku przekazywany z pokolenia na pokolenie istnieje od 1975 r. Od początku istnienia największą uwagę przywiązuje do jakości wyrobów kładąc ogromny nacisk na produkcję wyrobów bez konserwantów. W zakładzie w dalszym ciągu wędzimy w tradycyjnych wędzarniach. Naszą siłą jest zespół doświadczony wieloletnim stażem pracy. Firma współpracuje ze sprawdzonymi hodowcami trzody chlewnej, a także z rolnikami naszego regionu. Naszym atutem jest to, iż wszystkie receptury wg których pracujemy mają wieloletnią tradycję rodzinną.',
    latitude: 17.94104,
    longitude: 50.70893,
    logoPath: '/facilities/golomb/masarnia_golomb.png',
    backgroundImage: '/facilities/golomb/background1.jpeg',
    facebook: 'https://www.facebook.com/Masarnia-Golomb-397058614363136',
  },
];

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
);

export default async function handler(req: NextApiRequest, res: NextApiResponse<Facility[]>) {
  await cors(req, res);
  res.status(200).json(Facilities);
}
