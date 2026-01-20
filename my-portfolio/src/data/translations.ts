export type Language = 'en' | 'es';

export const translations: Record<Language, Record<string, string>> = {
    en: {
        // Navbar
        'nav.home': 'home',
        'nav.aboutMe': 'about me',
        'nav.projects': 'projects',
        'nav.glaucoma': 'TFG glaucoma',
        'nav.video': 'TFG AI',
        'nav.full.home': '01. Home',
        'nav.full.aboutMe': '02. About Me',
        'nav.full.projects': '03. Projects',
        'nav.full.glaucoma': '04. TFG Glaucoma',
        'nav.full.video': '05. TFG AI',

        // Hero
        'hero.tagline': '<Portfolio />',
        'hero.subtitle': 'Building a future based on',
        'hero.subtitleHighlight': 'data',
        'hero.description': 'Double degree student in Science, Management, and Service Engineering and Marketing. Specialized in Big Data, Data Science, and Digital Transformation.',
        'hero.cta.projects': 'View Projects',
        'hero.cta.about': 'About Me',

        // About Me
        'about.title': 'About Me',
        'about.subtitle': 'Software Engineer passionate about the intersection of AI and Web Development.',
        'about.bio1': 'Hi, I\'m',
        'about.bio1.name': 'Carlos Gutiérrez Martín',
        'about.bio1.rest': '. My focus is on building digital products that not only work perfectly but feel *magical* to use.',
        'about.bio2': 'With a solid foundation in',
        'about.bio2.cv': 'Computer Vision',
        'about.bio2.and': 'and',
        'about.bio2.dl': 'Deep Learning',
        'about.bio2.rest': ', I have evolved towards Full Stack development to bring my AI models to real users through modern, reactive web interfaces.',
        'about.bio3': 'Throughout my education, I have acquired a solid foundation in service design, process optimization, and data management, complemented by technical skills in data analysis and visualization. These experiences have allowed me to develop the ability to analyze large volumes of information and convert insights into actionable strategies, especially in digital transformation environments.',
        'about.downloadCv': 'Download CV',
        'about.techStack': 'Tech Stack',
        'about.dataML': 'Data & ML',
        'about.bi': 'Business Intelligence',
        'about.development': 'Development',
        'about.languages': 'Languages',
        'about.spanish': 'Spanish',
        'about.english': 'English',
        'about.french': 'French',
        'about.native': 'Native',
        'about.advanced': 'Advanced (C1)',
        'about.basicIntermediate': 'Basic / Intermediate',

        // Category Titles
        'category.projects': 'Projects',
        'category.tfg': 'Final Degree Projects',

        // Project Splitn
        'splitn.title': 'Splitn App',
        'splitn.subtitle': 'The smartest way to split expenses. A complete TypeScript application designed to simplify shared financial management.',
        'splitn.realtimeSync': 'Real-time Sync',
        'splitn.realtimeSyncDesc': 'Instant synchronization of expenses between groups.',
        'splitn.ocrIntegrated': 'Integrated OCR',
        'splitn.ocrIntegratedDesc': 'AI-powered receipt scanning for automatic breakdown.',
        'splitn.premiumUx': 'Premium UX',
        'splitn.premiumUxDesc': 'Carefully crafted interface with smooth animations.',

        // TFG Glaucoma
        'glaucoma.title': 'Glaucoma Detection',
        'glaucoma.subtitle': 'Assisted diagnosis using Computer Vision through semantic segmentation of the optic disc.',
        'glaucoma.p1': 'Development of a convolutional neural network (CNN) based on **U-Net** architecture for automatic segmentation of the optic disc and cup in fundus images.',
        'glaucoma.p2': 'The system automatically calculates the cup-to-disc ratio (**CDR**), a fundamental clinical biomarker for early glaucoma diagnosis.',
        'glaucoma.techStack': 'Tech Stack',
        'glaucoma.originalInput': 'Original Input',
        'glaucoma.aiSegmentation': 'AI Segmentation',
        'glaucoma.dragToCompare': 'Drag to compare',

        // TFG Video
        'video.title': 'AI Narrative Optimization',
        'video.subtitle': 'Deep analysis of narrative structures in advertising video using Deep Learning.',
        'video.p1.part1': 'This system ingests raw video sequences and uses a hybrid architecture (**CNN + LSTM**) to understand not only what appears on screen, but',
        'video.p1.highlight': 'how the story is told',
        'video.p1.part2': '.',
        'video.p2': 'Designed to optimize audience retention in programmatic advertising, identifying the exact seconds of highest emotional impact.',
        'video.preview': '[ Video Preview ]',
        'video.timeline': 'Timeline: Narrative Climax Detection',

        // Footer
        'footer.copyright': 'CARLOS GUTIÉRREZ MARTÍN © 2026',

        // Language Switcher
        'lang.switch': 'ES',
        'lang.switchTo': 'Cambiar a español',
    },
    es: {
        // Navbar
        'nav.home': 'inicio',
        'nav.aboutMe': 'sobre mí',
        'nav.projects': 'proyectos',
        'nav.glaucoma': 'TFG glaucoma',
        'nav.video': 'TFG IA',
        'nav.full.home': '01. Inicio',
        'nav.full.aboutMe': '02. Sobre Mí',
        'nav.full.projects': '03. Proyectos',
        'nav.full.glaucoma': '04. TFG Glaucoma',
        'nav.full.video': '05. TFG IA',

        // Hero
        'hero.tagline': '<Portfolio />',
        'hero.subtitle': 'Creando un futuro basado en',
        'hero.subtitleHighlight': 'datos',
        'hero.description': 'Estudiante de doble grado en Ciencia, Gestión e Ingeniería de Servicios y Marketing. Especializado en Big Data, Ciencia de Datos y Transformación Digital.',
        'hero.cta.projects': 'Ver Proyectos',
        'hero.cta.about': 'Sobre Mí',

        // About Me
        'about.title': 'Sobre Mí',
        'about.subtitle': 'Ingeniero de Software apasionado por la intersección entre IA y Desarrollo Web.',
        'about.bio1': 'Hola, soy',
        'about.bio1.name': 'Carlos Gutiérrez Martín',
        'about.bio1.rest': '. Mi enfoque se centra en construir productos digitales que no solo funcionen perfectamente, sino que se sientan *mágicos* de usar.',
        'about.bio2': 'Con una sólida base en',
        'about.bio2.cv': 'Computer Vision',
        'about.bio2.and': 'y',
        'about.bio2.dl': 'Deep Learning',
        'about.bio2.rest': ', he evolucionado hacia el desarrollo Full Stack para poder llevar mis modelos de IA a manos de usuarios reales a través de interfaces web modernas y reactivas.',
        'about.bio3': 'A lo largo de mi formación, he adquirido una base sólida en diseño de servicios, optimización de procesos y gestión de datos, complementada con habilidades técnicas en análisis y visualización de datos. Estas experiencias me han permitido desarrollar la capacidad de analizar grandes volúmenes de información y convertir los insights obtenidos en estrategias accionables, especialmente en entornos de transformación digital.',
        'about.downloadCv': 'Descargar CV',
        'about.techStack': 'Stack Técnico',
        'about.dataML': 'Data & ML',
        'about.bi': 'Business Intelligence',
        'about.development': 'Development',
        'about.languages': 'Idiomas',
        'about.spanish': 'Español',
        'about.english': 'Inglés',
        'about.french': 'Francés',
        'about.native': 'Nativo',
        'about.advanced': 'Avanzado (C1)',
        'about.basicIntermediate': 'Básico / Intermedio',

        // Category Titles
        'category.projects': 'Proyectos',
        'category.tfg': 'Trabajos de Fin de Grado',

        // Project Splitn
        'splitn.title': 'Splitn App',
        'splitn.subtitle': 'La forma más inteligente de dividir gastos. Una aplicación completa desarrollada con TypeScript diseñada para simplificar la gestión financiera compartida.',
        'splitn.realtimeSync': 'Real-time Sync',
        'splitn.realtimeSyncDesc': 'Sincronización instantánea de gastos entre grupos.',
        'splitn.ocrIntegrated': 'OCR Integrado',
        'splitn.ocrIntegratedDesc': 'Escaneo de recibos mediante IA para desglose automático.',
        'splitn.premiumUx': 'UX Premium',
        'splitn.premiumUxDesc': 'Interfaz cuidada al detalle con animaciones fluidas.',

        // TFG Glaucoma
        'glaucoma.title': 'Detección de Glaucoma',
        'glaucoma.subtitle': 'Diagnóstico asistido por Computer Vision mediante segmentación semántica del disco óptico.',
        'glaucoma.p1': 'Desarrollo de una red neuronal convolucional (CNN) basada en arquitectura **U-Net** para la segmentación automática del disco y la copa óptica en imágenes de fondo de ojo.',
        'glaucoma.p2': 'El sistema calcula automáticamente la relación excavación-papila (**CDR**), un biomarcador clínico fundamental para el diagnóstico precoz del glaucoma.',
        'glaucoma.techStack': 'Stack Tecnológico',
        'glaucoma.originalInput': 'Entrada Original',
        'glaucoma.aiSegmentation': 'Segmentación IA',
        'glaucoma.dragToCompare': 'Arrastra para comparar',

        // TFG Video
        'video.title': 'Optimización Narrativa IA',
        'video.subtitle': 'Análisis profundo de estructuras narrativas en video publicitario mediante Deep Learning.',
        'video.p1.part1': 'Este sistema ingesta secuencias de video en crudo y utiliza una arquitectura híbrida (**CNN + LSTM**) para entender no solo qué aparece en pantalla, sino',
        'video.p1.highlight': 'cómo se cuenta la historia',
        'video.p1.part2': '.',
        'video.p2': 'Diseñado para optimizar la retención de audiencia en publicidad programática, identificando los segundos exactos de mayor impacto emocional.',
        'video.preview': '[ Preview del Video ]',
        'video.timeline': 'Timeline: Detección de Clímax Narrativo',

        // Footer
        'footer.copyright': 'CARLOS GUTIÉRREZ MARTÍN © 2026',

        // Language Switcher
        'lang.switch': 'EN',
        'lang.switchTo': 'Switch to English',
    },
};
