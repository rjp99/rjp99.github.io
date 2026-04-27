export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  videoUrl?: string;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'fullstack' | 'game' | 'tool' | 'data';
}

export interface Game {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  path: string;
}

export const featuredProjects: Project[] = [
  {
    id: 'mindful',
    title: 'Mindful to Mindful',
    description: 'A website to boost mental health awareness and provide access to any resources needed.',
    longDescription: 'A comprehensive mental health awareness platform designed to connect users with resources, provide educational content, and foster a supportive community around mental wellness.',
    technologies: ['HTML', 'JavaScript', 'CSS', 'PHP', 'AJAX'],
    videoUrl: '/videos/Mindful.mp4',
    githubUrl: 'https://github.com/rjp99/mindfulness',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'game-database',
    title: 'Game Database',
    description: 'A website similar to IMDB but for video games.',
    longDescription: 'A full-featured database application for video games, featuring search, filtering, ratings, and detailed game information pages with a modern UI.',
    technologies: ['HTML', 'JavaScript', 'Python', 'SQLAlchemy', 'Bootstrap'],
    videoUrl: '/videos/game_archive.mp4',
    githubUrl: 'https://gitlab.com/ranip99/cs331e-idb',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'covid-invasion',
    title: 'Covid Invasion Game',
    description: 'A game where the player tries to escape Covid in an arcade-style adventure.',
    longDescription: 'An arcade-style browser game built with Phaser where players navigate through obstacles while trying to avoid COVID-19 particles. Features power-ups, scoring, and increasing difficulty.',
    technologies: ['Phaser', 'HTML', 'JavaScript'],
    videoUrl: '/videos/team-11.mp4',
    liveUrl: 'https://ranip99.itch.io/team-11-sprint-9',
    featured: true,
    category: 'game',
  },
  {
    id: 'space-race',
    title: 'Space Race',
    description: 'A two player game that involves racing spaceships through space.',
    longDescription: 'A competitive two-player racing game built with Processing and Java, featuring custom graphics, collision detection, and dynamic obstacle generation.',
    technologies: ['Processing', 'Java'],
    videoUrl: '/videos/space_race_game.mp4',
    githubUrl: 'https://gitlab.com/ranip99/cs324e-graphics_visualization/-/tree/master/Codebusters_finalproject',
    featured: true,
    category: 'game',
  },
];

export const otherProjects: Project[] = [
  {
    id: 'drawer-component',
    title: 'Drawer Component',
    description: 'A reusable component that is a dialog sidebar.',
    technologies: ['React', 'TypeScript', 'CSS'],
    liveUrl: 'https://gallery.sonatype.dev/#/pages/Drawer',
    featured: false,
    category: 'tool',
  },
  {
    id: 'adventure-game',
    title: 'Adventure Game',
    description: 'A blueprint game where the user walks through picking up and using items until they reach the end.',
    technologies: ['Python'],
    githubUrl: 'https://gitlab.com/ranip99/blueprinted-adventure-game',
    featured: false,
    category: 'game',
  },
  {
    id: 'disease-predictor',
    title: 'Cardiovascular Disease Predictor',
    description: 'A cardiovascular disease predictor using machine learning.',
    technologies: ['C#', 'Machine Learning'],
    githubUrl: 'https://gitlab.com/ranip99/cardiovascular-disease-predictor',
    featured: false,
    category: 'data',
  },
  {
    id: 'calculator',
    title: 'Scientific Calculator',
    description: 'A scientific calculator app with a modern interface.',
    technologies: ['C#', 'CSS'],
    githubUrl: 'https://github.com/Sneha-Bandaru/ScientificCalculatorApp',
    featured: false,
    category: 'tool',
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics Library',
    description: 'A library of machine learning projects done using Jupyter Notebook and Pandas.',
    technologies: ['Python', 'Jupyter', 'Pandas', 'Machine Learning'],
    githubUrl: 'https://gitlab.com/ranip99/cs329e-data-analytics',
    featured: false,
    category: 'data',
  },
];

export const games: Game[] = [
  {
    id: 'memory-game',
    title: 'Memory Game',
    description: 'A memory matching game using HTML, JavaScript, and CSS.',
    technologies: ['HTML', 'JavaScript', 'CSS'],
    path: '/games/HW13/hw13.html',
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe',
    description: 'Classic Tic-Tac-Toe game created using HTML, JavaScript, and CSS.',
    technologies: ['HTML', 'JavaScript', 'CSS'],
    path: '/games/Exam2/index.html',
  },
  {
    id: 'jigsaw-puzzle',
    title: 'Jigsaw Puzzle',
    description: 'A jigsaw puzzle using HTML, JavaScript, CSS, and AJAX.',
    technologies: ['HTML', 'JavaScript', 'CSS', 'AJAX'],
    path: '/games/HW11/hw11.html',
  },
];

export const allProjects = [...featuredProjects, ...otherProjects];
