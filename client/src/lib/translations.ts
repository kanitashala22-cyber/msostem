export type Language = 'en' | 'sq';

export const translations = {
  en: {
    // Navigation
    nav: {
      courses: 'Courses',
      scholarships: 'Scholarships',
      playground: 'Code Playground',
      language: 'Language'
    },
    // Home Page
    home: {
      hero: {
        title: 'Empower Your',
        titleAnimated: 'Tech Journey',
        subtitle: 'Join thousands of young women learning to code with HTML & CSS, and discover scholarships that can transform your future in tech.',
        ctaCourses: 'Start Your Journey',
        ctaScholarships: 'Explore Scholarships',
        feature1Title: 'Interactive Learning',
        feature1Desc: 'Hands-on coding experience',
        feature2Title: 'Scholarship Access',
        feature2Desc: 'Find funding opportunities',
        feature3Title: 'Live Playground',
        feature3Desc: 'Practice coding instantly'
      },
      courses: {
        title: 'Interactive Coding Courses',
        titleHighlight: 'Coding Courses',
        subtitle: 'Learn HTML and CSS through hands-on projects and interactive lessons designed specifically for beginners.',
        pathTitle: 'Your Learning Journey Starts Here',
        pathSubtitle: 'Follow our structured path to become confident in web development',
        step1Title: '1. Learn HTML',
        step1Desc: 'Build the structure of web pages',
        step2Title: '2. Style with CSS',
        step2Desc: 'Make your pages beautiful and responsive',
        step3Title: '3. Build Projects',
        step3Desc: 'Create amazing websites and portfolios',
        viewAll: 'View All Courses',
        lessons: 'lessons',
        weeks: 'weeks',
        startLearning: 'Start Learning',
        continue: 'Continue',
        playgroundTitle: 'Interactive Code Playground',
        playgroundDesc: 'Practice your skills in our live code editor with instant preview. See your changes in real-time!',
        playgroundFeature1: 'Live HTML/CSS preview',
        playgroundFeature2: 'Syntax highlighting & auto-complete',
        playgroundFeature3: 'Save and share your projects',
        playgroundFeature4: 'Step-by-step guided tutorials',
        tryPlayground: 'Try the Playground'
      },
      scholarships: {
        title: 'Tech Scholarships',
        titleHighlight: 'Scholarships',
        subtitle: 'Discover funding opportunities that can help you pursue your dreams in technology and computer science.',
        viewAll: 'View All Scholarships',
        deadline: 'Deadline',
        amount: 'Award Amount',
        learnMore: 'Learn More',
        viewDetails: 'View Details',
        statusOpen: 'Open',
        statusUpcoming: 'Upcoming',
        statusClosingSoon: 'Closing Soon',
        statusClosed: 'Closed'
      },
      footer: {
        about: 'About CodeHer',
        aboutText: 'Empowering young women to excel in technology through quality education and scholarship opportunities.',
        quickLinks: 'Quick Links',
        contact: 'Contact',
        email: 'Email',
        rights: 'All rights reserved.'
      }
    },
    // Course Page
    course: {
      overview: 'Overview',
      lessons: 'Lessons',
      courseLessons: 'Course Lessons',
      lessonContent: 'Lesson Content',
      interactivePlayground: 'Interactive Playground',
      progress: 'Your Progress',
      completed: 'Completed',
      duration: 'Duration',
      lessonsCount: 'Lessons',
      level: 'Level',
      startCourse: 'Start Course',
      continueLearning: 'Continue Learning',
      lessonComplete: 'Lesson Complete',
      weeks: 'weeks',
      loadingCourse: 'Loading course...',
      courseNotFound: 'Course not found',
      courseNotFoundDesc: "The course you're looking for doesn't exist.",
      selectLesson: 'Select a lesson to view its content.',
      lesson: 'Lesson',
      htmlCode: 'HTML Code',
      arduinoCode: 'Arduino C++',
      wiringDiagram: 'Wiring Diagram',
      save: 'Save'
    },
    // Lesson Detail
    lesson: {
      wireCircuit: 'Wire Your Circuit',
      tryCode: 'Try the Code',
      saveCode: 'Save Code',
      resetCode: 'Reset Code',
      output: 'Output',
      preview: 'Preview',
      nextLesson: 'Next Lesson',
      backToCourse: 'Back to Course',
      completeLesson: 'Complete Lesson',
      downloading: 'Downloading...',
      codeSaved: 'Code saved successfully!'
    },
    // Scholarship Page
    scholarship: {
      details: 'Scholarship Details',
      eligibility: 'Eligibility',
      requirements: 'Requirements',
      benefits: 'Benefits',
      howToApply: 'How to Apply',
      applyNow: 'Apply Now',
      backToScholarships: 'Back to Scholarships',
      deadline: 'Application Deadline',
      amount: 'Award Amount'
    },
    // Playground
    playground: {
      title: 'Code Playground',
      titleHighlight: 'Playground',
      description: 'Experiment with HTML and CSS in our interactive code editor. See your changes come to life instantly!',
      projectTitle: 'Project Title',
      reset: 'Reset',
      run: 'Run Code',
      clear: 'Clear',
      save: 'Save',
      htmlTab: 'HTML',
      cssTab: 'CSS',
      previewTab: 'Live Preview',
      projectSaved: 'Project saved successfully!',
      tryExamples: 'Try These Examples',
      button: 'Button',
      card: 'Card',
      navbar: 'Navbar',
      gradient: 'Gradient'
    },
    // Common
    common: {
      loading: 'Loading...',
      error: 'Error',
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      free: 'Free',
      varies: 'Varies'
    },
    // Course Content
    courseContent: {
      'course-1': {
        title: 'HTML Fundamentals',
        description: 'Master the building blocks of the web with comprehensive, beginner-friendly HTML lessons and hands-on interactive projects. Learn everything from basic tags to advanced HTML5 features!'
      },
      'course-2': {
        title: 'CSS Styling & Design',
        description: 'Master the art of beautiful web design! Learn CSS from basics to advanced techniques including animations, layouts, and modern design principles that make websites stunning and professional.'
      },
      'course-3': {
        title: 'Arduino Microprocessors Starter Kit',
        description: 'Learn to program Arduino microprocessors from scratch! Build exciting projects with easy-to-follow code examples, wiring diagrams, and interactive visuals.'
      }
    },
    // Scholarship Content
    scholarshipContent: {
      'scholarship-1': {
        title: 'TechGirls',
        description: 'Fully-funded U.S. State Department program empowering young women (ages 15-17) to pursue STEM careers through an intensive summer exchange program in the United States.',
        field: 'Science, Technology, Engineering, Mathematics, STEM, Leadership',
        location: 'Virginia Tech University + U.S. Cities',
        eligibility: 'Young women ages 15-17 from 37 eligible countries with strong interest in STEM fields',
        organizationName: 'U.S. Department of State'
      },
      'scholarship-2': {
        title: 'Benjamin Franklin Transatlantic Fellowship',
        description: 'Fully-funded 4-week intensive exchange program at Purdue University empowering European youth (ages 16-18) to explore diplomacy, leadership, and transatlantic relations in the United States.',
        field: 'Diplomacy, Leadership, International Relations, Civil Society',
        location: 'Purdue University, West Lafayette, Indiana',
        eligibility: 'European citizens ages 16-18 with strong academic achievement and leadership potential',
        organizationName: 'U.S. Department of State'
      },
      'scholarship-3': {
        title: 'Kennedy-Lugar Youth Exchange & Study (YES)',
        description: 'Competitive merit-based scholarship program bringing high school students from countries with significant Muslim populations to study for a full academic year in the United States, living with host families.',
        field: 'Cultural Exchange, Leadership',
        location: 'High Schools across the United States',
        eligibility: 'High school students (ages 15-17) from designated countries with strong academic records',
        organizationName: 'U.S. Department of State'
      }
    }
  },
  sq: {
    // Navigation
    nav: {
      courses: 'Kurset',
      scholarships: 'Bursat',
      playground: 'Lodra e Kodit',
      language: 'Gjuha'
    },
    // Home Page
    home: {
      hero: {
        title: 'Fuqizo',
        titleAnimated: 'Udhëtimin Tënd Teknologjik',
        subtitle: 'Bashkohu me mijëra gra të reja që mësojnë të kodojnë me HTML & CSS, dhe zbulo bursa që mund të transformojnë të ardhmen tënde në teknologji.',
        ctaCourses: 'Fillo Udhëtimin',
        ctaScholarships: 'Eksploro Bursat',
        feature1Title: 'Mësim Interaktiv',
        feature1Desc: 'Përvojë praktike kodimi',
        feature2Title: 'Akses në Bursa',
        feature2Desc: 'Gjej mundësi financimi',
        feature3Title: 'Lodra e Drejtpërdrejtë',
        feature3Desc: 'Praktiko kodin menjëherë'
      },
      courses: {
        title: 'Kurse Interaktive',
        titleHighlight: ' Kodimi',
        subtitle: 'Mëso HTML dhe CSS përmes projekteve praktike dhe mësimeve interaktive të dizajnuara posaçërisht për fillestarë.',
        pathTitle: 'Udhëtimi Yt i Të Mësuarit Fillon Këtu',
        pathSubtitle: 'Ndiq rrugën tonë të strukturuar për të bërë të vetëbesuar në zhvillimin e uebit',
        step1Title: '1. Mëso HTML',
        step1Desc: 'Ndërto strukturën e faqeve web',
        step2Title: '2. Stilo me CSS',
        step2Desc: 'Bëji faqet e tua të bukura dhe responsive',
        step3Title: '3. Ndërto Projekte',
        step3Desc: 'Krijo faqe interneti dhe portfolio të mahnitshme',
        viewAll: 'Shiko Të Gjitha Kurset',
        lessons: 'mësime',
        weeks: 'javë',
        startLearning: 'Fillo të Mësosh',
        continue: 'Vazhdo',
        playgroundTitle: 'Lodra e Kodit Interaktiv',
        playgroundDesc: 'Praktiko aftësitë në editorin tonë të drejtpërdrejtë me pamje paraprake të menjëhershme. Shiko ndryshimet në kohë reale!',
        playgroundFeature1: 'Pamje paraprake HTML/CSS e drejtpërdrejtë',
        playgroundFeature2: 'Theksim sintakse dhe plotësim automatik',
        playgroundFeature3: 'Ruaj dhe ndaj projektet tua',
        playgroundFeature4: 'Mësime të udhëzuara hap pas hapi',
        tryPlayground: 'Provo Lodrën'
      },
      scholarships: {
        title: 'Bursa dhe',
        titleHighlight: 'Programe Shkëmbimi',
        subtitle: 'Zbulo mundësi financimi që mund të të ndihmojnë të ndjekësh ëndrrat në teknologji dhe shkenca kompjuterike.',
        viewAll: 'Shiko Të Gjitha Bursat',
        deadline: 'Afati',
        amount: 'Shuma e Çmimit',
        learnMore: 'Mëso Më Shumë',
        viewDetails: 'Shiko Detajet',
        statusOpen: 'E Hapur',
        statusUpcoming: 'Së Shpejti',
        statusClosingSoon: 'Mbyllet Së Shpejti',
        statusClosed: 'E Mbyllur'
      },
      footer: {
        about: 'Rreth CodeHer',
        aboutText: 'Fuqizimi i grave të reja për të shkëlqyer në teknologji përmes arsimit cilësor dhe mundësive të bursave.',
        quickLinks: 'Lidhje të Shpejta',
        contact: 'Kontakti',
        email: 'Email',
        rights: 'Të gjitha të drejtat e rezervuara.'
      }
    },
    // Course Page
    course: {
      overview: 'Përmbledhje',
      lessons: 'Mësimet',
      courseLessons: 'Mësimet e Kursit',
      lessonContent: 'Përmbajtja e Mësimit',
      interactivePlayground: 'Lodra Interaktive',
      progress: 'Progresi Yt',
      completed: 'Përfunduar',
      duration: 'Kohëzgjatja',
      lessonsCount: 'Mësime',
      level: 'Niveli',
      startCourse: 'Fillo Kursin',
      continueLearning: 'Vazhdo të Mësosh',
      lessonComplete: 'Mësimi Përfunduar',
      weeks: 'javë',
      loadingCourse: 'Duke ngarkuar kursin...',
      courseNotFound: 'Kursi nuk u gjet',
      courseNotFoundDesc: 'Kursi që po kërkon nuk ekziston.',
      selectLesson: 'Zgjidh një mësim për të parë përmbajtjen.',
      lesson: 'Mësimi',
      htmlCode: 'Kodi HTML',
      arduinoCode: 'Arduino C++',
      wiringDiagram: 'Diagrami i Lidhjes',
      save: 'Ruaj'
    },
    // Lesson Detail
    lesson: {
      wireCircuit: 'Lidh Qarkun Tënd',
      tryCode: 'Provo Kodin',
      saveCode: 'Ruaj Kodin',
      resetCode: 'Rivendos Kodin',
      output: 'Rezultati',
      preview: 'Pamja Paraprake',
      nextLesson: 'Mësimi Tjetër',
      backToCourse: 'Kthehu te Kursi',
      completeLesson: 'Përfundo Mësimin',
      downloading: 'Duke shkarkuar...',
      codeSaved: 'Kodi u ruajt me sukses!'
    },
    // Scholarship Page
    scholarship: {
      details: 'Detajet e Bursës',
      eligibility: 'Kushtet e Pranimit',
      requirements: 'Kërkesat',
      benefits: 'Përfitimet',
      howToApply: 'Si të Aplikosh',
      applyNow: 'Apliko Tani',
      backToScholarships: 'Kthehu te Bursat',
      deadline: 'Afati i Aplikimit',
      amount: 'Shuma e Çmimit'
    },
    // Playground
    playground: {
      title: 'Lodra e Kodit',
      titleHighlight: 'Lodra',
      description: 'Eksperimento me HTML dhe CSS në editorin tonë interaktiv. Shiko ndryshimet të vijnë në jetë menjëherë!',
      projectTitle: 'Titulli i Projektit',
      reset: 'Rivendos',
      run: 'Ekzekuto Kodin',
      clear: 'Pastro',
      save: 'Ruaj',
      htmlTab: 'HTML',
      cssTab: 'CSS',
      previewTab: 'Pamja e Drejtpërdrejtë',
      projectSaved: 'Projekti u ruajt me sukses!',
      tryExamples: 'Provo Këto Shembuj',
      button: 'Butoni',
      card: 'Karta',
      navbar: 'Shiriti i Navigimit',
      gradient: 'Gradienti'
    },
    // Common
    common: {
      loading: 'Duke ngarkuar...',
      error: 'Gabim',
      beginner: 'Fillestar',
      intermediate: 'I Ndërmjetëm',
      advanced: 'I Avancuar',
      free: 'Falas',
      varies: 'Varion'
    },
    // Course Content
    courseContent: {
      'course-1': {
        title: 'Bazat e HTML',
        description: 'Zotëro blloqet ndërtuese të uebit me mësime gjithëpërfshirëse dhe miqësore për fillestarë të HTML dhe projekte interaktive praktike. Mëso gjithçka nga etiketat bazë deri te veçoritë e avancuara HTML5!'
      },
      'course-2': {
        title: 'Stilizimi dhe Dizajni me CSS',
        description: 'Zotëro artin e dizajnit të bukur të uebit! Mëso CSS nga bazat deri te teknikat e avancuara përfshirë animacionet, strukturat dhe parimet moderne të dizajnit që bëjnë faqet e internetit të mahnitshme dhe profesionale.'
      },
      'course-3': {
        title: 'Kiti Fillestar i Mikroprocesuesve Arduino',
        description: 'Mëso të programosh mikroprocesuesit Arduino nga e para! Ndërto projekte emocionuese me shembuj kodi të lehtë për tu ndjekur, diagrame lidhëse dhe vizuale interaktive.'
      }
    },
    // Scholarship Content
    scholarshipContent: {
      'scholarship-1': {
        title: 'TechGirls',
        description: 'Program plotësisht i financuar nga Departamenti Amerikan i Shtetit që fuqizon gratë e reja (mosha 15-17) të ndjekin karriera STEM përmes një programi intensiv veror të shkëmbimit nëShtetet e Bashkuara.',
        field: 'Shkenca, Teknologji, Inxhinieri, Matematikë, STEM, Udhëheqje',
        location: 'Universiteti Teknologjik i Virxhinias + Qytete Amerikane',
        eligibility: 'Gra të reja mosha 15-17 nga 37 vende të pranueshme me interes të fortë në fushat STEM',
        organizationName: 'Departamenti Amerikan i Shtetit'
      },
      'scholarship-2': {
        title: 'Bursë Benjamin Franklin Transatlantike',
        description: 'Program shkëmbimi intensiv 4-javor plotësisht i financuar në Universitetin Purdue që fuqizon të rinjtë evropianë (mosha 16-18) të eksplorojnë diplomacinë, udhëheqjen dhe marrëdhëniet transatlantike në Shtetet e Bashkuara.',
        field: 'Diplomaci, Udhëheqje, Marrëdhënie Ndërkombëtare, Shoqëria Civile',
        location: 'Universiteti Purdue, West Lafayette, Indiana',
        eligibility: 'Qytetarë evropianë mosha 16-18 me arritje të forta akademike dhe potencial udhëheqës',
        organizationName: 'Departamenti Amerikan i Shtetit'
      },
      'scholarship-3': {
        title: 'Programi i Shkëmbimit dhe Studimit Kennedy-Lugar (YES)',
        description: 'Program bursash konkurrues bazuar në merita që sjell studentë të shkollës së mesme nga vende me popullsi të konsiderueshme myslimane për të studiuar për një vit të plotë akademik në Shtetet e Bashkuara, duke jetuar me familje pritëse.',
        field: 'Shkëmbim Kulturor, Udhëheqje',
        location: 'Shkolla të Mesme në të gjitha Shtetet e Bashkuara',
        eligibility: 'Studentë të shkollës së mesme (mosha 15-17) nga vende të caktuara me rekorde të forta akademike',
        organizationName: 'Departamenti Amerikan i Shtetit'
      }
    }
  }
};

export type TranslationKeys = typeof translations.en;
