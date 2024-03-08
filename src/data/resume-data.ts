import { ResumeData } from '../interfaces/resume-data.interface';

export const RESUME_DATA: ResumeData = {
  name: 'Jordi Gómez Devesa',
  title: 'Desarrollador Full Stack',
  about:
    'Ingeniero Multimedia graduado en la Universidad de Alicante con experencia en el desarrollo de software con proyectos evaluados y aprobados por la Universidad',
  location: 'Benidorm, España',
  contact: {
    email: 'jordigd8@gmail.com',
    tel: '+34605188741',
    website: {
      url: 'https://jordigomez.dev',
      name: 'jordigomez.dev'
    },
    social: [
      {
        name: 'github.com/jordigd20/',
        url: 'https://github.com/jordigd20',
        icon: 'github'
      },
      {
        name: '/in/jordi-gomez-devesa/',
        url: 'https://www.linkedin.com/in/jordi-gomez-devesa/',
        icon: 'linkedin'
      }
    ]
  },
  work: [
    {
      title: 'CollabTask',
      role: 'Desarrollador Full Stack',
      url: 'https://jordigomez.dev/projects/collabtask',
      badges: [],
      description:
        'Desarrollé para el TFG de Ingeniería Multimedia una app sobre gestión de tareas colaborativas, con el objetivo de realizar un reparto de tareas justo y equilibrado entre un grupo de personas.',
      accomplishementsTitle: 'Funciones desempeñadas:',
      accomplishments: [
        'Diseño de las interfaces y estilo de la aplicación',
        'Implementación del frontend utilizando Angular e Ionic',
        'Diseño y desarrollo de la arquitectura backend con Firebase como BaaS'
      ],
      start: '2022',
      end: '2023'
    },
    {
      title: 'NutriUs',
      role: 'Desarrollador Full Stack',
      url: 'https://jordigomez.dev/projects/nutrius',
      badges: [],
      description:
        'Junto con un equipo de 5 personas desarrollé para el 4º año de Ingeniería Multimedia una aplicación web sobre nutrición infantil que ofrece menús y dietas para los niños, un entorno gráfico 3D atractivo para ellos, y una gestión del seguimiento/evolución para los padres.',
      accomplishementsTitle: 'Funciones desempeñadas:',
      accomplishments: [
        'Diseño e implementación del frontend con Angular',
        'Realización de un API Rest con NodeJS y MongoDB',
        'Creación e integración en el sistema de un asistente virtual con Dialogflow',
        'Gestión de pagos con el API de Paypal',
        'Recopilación de estadísticas según los KPI de la aplicación',
        'Sistema de animaciones, movimientos de cámara e iluminación en un entorno gráfico 3D con WebGL'
      ],
      start: '2022',
      end: '2023'
    }
  ],
  education: [
    {
      school: 'Universidad de Alicante (UA)',
      degree: 'Grado en Ingeniería Multimedia',
      start: '2018',
      end: '2023'
    }
  ],
  languages: [
    {
      name: 'Español y Valenciano',
      level: 'Nativo'
    },
    {
      name: 'Inglés',
      level: 'Nivel intermedio (Certificado B1)'
    }
  ],
  skills: [
    'Aprendizaje rápido',
    'Trabajo en equipo',
    'Metodologías ágiles',
    'Gestión del tiempo',
    'Desarrollo de software',
    'Desarrollo frontend',
    'Desarrollo backend',
    'Programación Orientada a Objetos (POO)',
    'Angular',
    'HTML y CSS',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
  ]
};