export default {
  lang: 'cs',
  langSwitcher: { to: '/en', label: 'EN' },

  nav: {
    logo: 'Patricie Dominiková',
    links: [
      { href: '#portfolio', label: 'Portfolio' },
      { href: '#zivotopis', label: 'Životopis' },
      { href: '#kontakt', label: 'Kontakt' },
    ],
  },

  hero: {
    name: 'Patricie Dominiková',
    role: '3D modelování · mapy · GIS',
    tagline: 'Milovnice zvířat a geoinformatička.',
    bio: [
      'Jsem studentka magisterského studia geoinformatiky na Univerzitě Palackého. Zajímám se o 3D modelování, tvorbu map a analýzu dat, ve kterých ráda hledám souvislosti.',
      'Zkušenosti získávám při práci na projektech pro univerzitu, veřejnou správu i v rámci popularizačních aktivit. Umím pracovat samostatně i v týmu a mezi mé silné stránky patří dobrá organizace času i práce.',
    ],
    stats: [
      { label: 'Univerzita', value: 'UPOL – Olomouc' },
      { label: 'Obor', value: 'Geoinformatika a kartografie' },
      { label: 'Stupeň', value: 'Mgr. (2025 – dosud)' },
    ],
    cta: [
      { href: '#portfolio', label: 'Portfolio' },
      { href: '#zivotopis', label: 'Životopis' },
    ],
    portrait: '/files/me.jpg',
    portraitAlt: 'Patricie Dominiková',
  },

  portfolio: {
    title: 'Portfolio',
    projects: [
      {
        title: 'Bakalářská práce',
        image: '/files/BC.png',
        alt: 'Bakalářská práce',
        href: 'https://www.geoinformatics.upol.cz/dprace/bakalarske/dominikova25/Web/index.html',
        external: true,
        textParts: [
          { text: 'Bakalářská práce na téma ', italic: false },
          { text: '3D vizualizace architektonického dědictví', italic: true },
          { text: ' – návrh a tvorba 3D modelů vybraných objektů a jejich interaktivní prezentace v mapovém prostředí.', italic: false },
        ],
      },
      {
        title: 'Hackathon AMOV',
        image: '/files/AMOV.jpg',
        alt: 'Hackathon AMOV',
        href: 'https://www.linkedin.com/posts/vojt%C4%9Bch-havl%C3%ADn-219b68353_jak-jsme-navrhli-efektivn%C4%9Bj%C5%A1%C3%AD-%C3%BAdr%C5%BEbu-vozovek-activity-7398715670743388161-d2cv/',
        external: true,
        textParts: [
          { text: 'Týmová práce na návrhu mapové aplikace: analýza dat, návrh kartografického zobrazení a příprava jednoduchého prototypu pro prezentaci porotě.', italic: false },
        ],
      },
      {
        title: 'Projekt NAKI',
        image: '/files/NAKI.png',
        alt: 'Projekt NAKI',
        href: 'https://sketchfab.com/Schwab0m',
        external: true,
        textParts: [
          { text: 'Tvorba 3D modelů sakrálních objektů, příprava dat pro 3D tisk a vizualizace pro popularizační a výukové materiály.', italic: false },
        ],
      },
      {
        title: 'Brožury a atlasy',
        image: '/files/atlas.png',
        alt: 'Atlas',
        href: '/files/ATLAS.pdf',
        external: true,
        textParts: [
          { text: 'Tvorba grafických projektů v rámci studia.', italic: false },
        ],
      },
      {
        title: 'Schémata inženýrských sítí',
        image: '/files/UH.png',
        alt: 'Praxe',
        href: '/files/SCHEMA.pdf',
        external: true,
        textParts: [
          { text: 'Tvorba schémat inženýrských sítí pro státní správu.', italic: false },
        ],
      },
      {
        title: 'Mapové výstupy',
        image: '/files/MAPA.jpg',
        alt: 'Mapy',
        href: '/files/MAPY.pdf',
        external: true,
        textParts: [
          { text: 'Soubor vytvořených map v rámci studia a práce.', italic: false },
        ],
      },
    ],
  },

  cv: {
    title: 'Životopis',
    name: 'Patricie Dominiková',
    role: '3D modelování • mapy • GIS',
    contact: {
      email: 'dominikova.patricie@gmail.com',
      linkedin: {
        href: 'https://www.linkedin.com/in/patricie-dominiková-75ab6238b/',
        label: 'Patricie Dominiková',
      },
    },
    education: {
      title: 'Vzdělání',
      items: [
        { degree: 'UPOL – Geoinformatika a kartografie (Mgr.)', years: '2025 – dosud' },
        { degree: 'UPOL – Geoinformatika a kartografie (Bc.)', years: '2022 – 2025' },
      ],
    },
    skills: {
      title: 'Dovednosti',
      items: [
        '3D tisk a modelování: SketchUp, (Blender)',
        'Datová analýza a statistika: R-studio, Orange',
        'Práce s databázemi: PostgreSQL',
        'Práce s webem, vlastní kód i wordpress',
        'QGIS, ArcGIS Pro, ArcGIS Online',
        'Adobe Illustrator, MS Office',
      ],
    },
    languages: {
      title: 'Jazyky',
      items: [
        'Čeština — rodilá mluvčí',
        'Angličtina — B2/C1',
        'SQL, HTML, CSS',
      ],
    },
    experience: {
      title: 'Praxe',
      items: [
        {
          org: 'Městský úřad Uherské Hradiště, oddělení GIS',
          years: '2024',
          desc: 'Tvorba schémat inženýrských sítí (zejména optických kabelů) a aktualizace mapových podkladů pro potřeby města.',
        },
        {
          org: 'Tvorba 3D modelů, projekt NAKI',
          years: '2024 – dosud',
          desc: 'Modelování sakrálních objektů (kostely, ...) pro katedru historie v rámci projektu NAKI III.',
        },
        {
          org: 'Pevnost poznání',
          years: '2023 – dosud',
          desc: 'Vedení kroužků a příměstských táborů, práce a komunikace s dětmi i dospělými, překlad, tvorba map, práce v infocentru.',
        },
        {
          org: 'Univerzita Palackého',
          years: '2024 – dosud',
          desc: 'Ambasadorka pro UPOL a katedru informatiky, aktualizace databází, zpracování dotazníkových šetření.',
        },
        {
          org: 'Program Newton – Přírodovědecká fakulta UPOL',
          years: '2025 – dosud',
          desc: 'Administrativní podpora programu Newton a kontaktní osoba pro studenty.',
        },
      ],
    },
  },

  contact: {
    id: 'kontakt',
    title: 'Kontakt',
    email: 'dominikova.patricie@gmail.com',
    linkedin: {
      href: 'https://www.linkedin.com/in/patricie-dominiková-75ab6238b/',
      label: 'LinkedIn',
    },
  },

  footer: {
    text: '© 2025 Patricie Dominiková',
  },
}
