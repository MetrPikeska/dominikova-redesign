export default {
  lang: 'en',
  langSwitcher: { to: '/', label: 'CS' },

  nav: {
    logo: 'Patricie Dominiková',
    links: [
      { href: '#portfolio', label: 'Portfolio' },
      { href: '#zivotopis', label: 'CV' },
      { href: '#kontakt', label: 'Contact' },
    ],
  },

  hero: {
    name: 'Patricie Dominiková',
    role: '3D modeling · maps · GIS',
    tagline: 'Animal lover and GIS specialist.',
    bio: [
      'I am a master\'s student in geoinformatics at Palacký University. I enjoy 3D modeling, maps, and finding relations in data.',
      'I have experience working on projects for universities, government agencies, and public outreach events. I enjoy working both in a team and independently; one of my strengths is effective time and task management.',
    ],
    stats: [
      { label: 'University', value: 'UPOL – Olomouc' },
      { label: 'Field', value: 'Geoinformatics and Cartography' },
      { label: 'Degree', value: 'Mgr. (2025 – present)' },
    ],
    cta: [
      { href: '#portfolio', label: 'Portfolio' },
      { href: '#zivotopis', label: 'CV' },
    ],
    portrait: '/files/me.jpg',
    portraitAlt: 'Patricie Dominiková',
  },

  portfolio: {
    title: 'Portfolio',
    projects: [
      {
        title: 'Bachelor\'s thesis',
        image: '/files/BC.png',
        alt: 'Bachelor\'s thesis',
        href: 'https://www.geoinformatics.upol.cz/dprace/bakalarske/dominikova25/Web/index.html',
        external: true,
        textParts: [
          { text: 'Bachelor\'s thesis on the topic ', italic: false },
          { text: '3D visualization of architectural heritage', italic: true },
          { text: ' – design and creation of 3D models of selected objects and their interactive presentation in web environment.', italic: false },
        ],
      },
      {
        title: 'Hackathon AMOV',
        image: '/files/AMOV.jpg',
        alt: 'Hackathon AMOV',
        href: 'https://www.linkedin.com/posts/vojt%C4%9Bch-havl%C3%ADn-219b68353_jak-jsme-navrhli-efektivn%C4%9Bj%C5%A1%C3%AD-%C3%BAdr%C5%BEbu-vozovek-activity-7398715670743388161-d2cv/',
        external: true,
        textParts: [
          { text: 'Teamwork on the design of a map application: data analysis, cartographic visualization and preparation of a simple prototype for presentation to the jury.', italic: false },
        ],
      },
      {
        title: 'Project NAKI',
        image: '/files/NAKI.png',
        alt: 'Project NAKI',
        href: 'https://sketchfab.com/Schwab0m',
        external: true,
        textParts: [
          { text: 'Creation of 3D models of sacred objects, preparation of data for 3D printing and visualization for popularization and educational materials.', italic: false },
        ],
      },
      {
        title: 'Brochures and atlases',
        image: '/files/atlas.png',
        alt: 'Atlas',
        href: '/files/ATLAS.pdf',
        external: true,
        textParts: [
          { text: 'Creation of graphic projects within the scope of the study.', italic: false },
        ],
      },
      {
        title: 'Diagrams of engineering networks',
        image: '/files/UH.png',
        alt: 'Practice',
        href: '/files/SCHEMA.pdf',
        external: true,
        textParts: [
          { text: 'Creating diagrams of engineering networks for state administration.', italic: false },
        ],
      },
      {
        title: 'Map outputs',
        image: '/files/MAPA.jpg',
        alt: 'Maps',
        href: '/files/MAPY.pdf',
        external: true,
        textParts: [
          { text: 'Collection of maps created within the scope of the study and work.', italic: false },
        ],
      },
    ],
  },

  cv: {
    title: 'Curriculum Vitae',
    name: 'Patricie Dominiková',
    role: '3D Modeling • Maps • GIS',
    contact: {
      email: 'dominikova.patricie@gmail.com',
      linkedin: {
        href: 'https://www.linkedin.com/in/patricie-dominiková-75ab6238b/',
        label: 'Patricie Dominiková',
      },
    },
    education: {
      title: 'Education',
      items: [
        { degree: 'UPOL – Geoinformatics and Cartography (Mgr.)', years: '2025 – present' },
        { degree: 'UPOL – Geoinformatics and Cartography (Bc.)', years: '2022 – 2025' },
      ],
    },
    skills: {
      title: 'Skills',
      items: [
        '3D printing and modeling: SketchUp, (Blender)',
        'Data analysis and statistics: R-studio, Orange',
        'Work with databases: PostgreSQL',
        'Work with web, custom code and wordpress',
        'QGIS, ArcGIS Pro, ArcGIS Online',
        'Adobe Illustrator, MS Office',
      ],
    },
    languages: {
      title: 'Languages',
      items: [
        'Czech — native speaker',
        'English — B2/C1',
        'SQL, HTML, CSS',
      ],
    },
    experience: {
      title: 'Practical experience',
      items: [
        {
          org: 'Uherské Hradiště Municipal Office, GIS Department',
          years: '2024',
          desc: 'Creation of engineering networks diagrams (especially optical cables) and update of map base data for the needs of the city.',
        },
        {
          org: '3D Modeling, NAKI Project',
          years: '2024 – present',
          desc: 'Modeling sacred objects (churches, ...) for the history department within the NAKI III project.',
        },
        {
          org: 'Pevnost poznání',
          years: '2023 – present',
          desc: 'Leading clubs and suburban camps, work and communication with children and adults, translation, map creation, work at the information center.',
        },
        {
          org: 'Palacký University',
          years: '2024 – present',
          desc: 'Ambassador for UPOL and the Department of Geoinformatics, database updates, processing of survey data.',
        },
        {
          org: 'Newton Program – Faculty of Science, UPOL',
          years: '2025 – present',
          desc: 'Administrative support for the Newton Program and contact person for students.',
        },
      ],
    },
  },

  contact: {
    id: 'kontakt',
    title: 'Contact',
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
