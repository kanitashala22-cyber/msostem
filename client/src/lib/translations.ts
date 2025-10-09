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
    },
    // Lesson Content Translations
    lessonContent: {
      html: {} as any,
      css: {} as any,
      arduino: {} as any
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
    },
    // Lesson Content Translations
    lessonContent: {
      html: {
        1: {
          title: "Çfarë është HTML? - Faqja Juaj e Parë Web",
          description: "Mirë se vini në botën emocionuese të zhvillimit të uebit! HTML është themeli i çdo faqeje interneti. Le të zbulojmë çfarë e bën uebin të funksionojë dhe të krijojmë faqen tuaj të parë! 🌟",
          sections: [
            {
              title: "Çfarë është HTML?",
              content: "HTML do të thotë HyperText Markup Language. Mendojeni si skeleti i një faqeje interneti:\\n\\n• **HyperText**: Tekst me lidhje me tekst tjetër\\n• **Markup**: Kode të veçanta që përshkruajnë përmbajtjen\\n• **Language**: Një sistem që kompjuterët kuptojnë\\n\\nHTML i tregon shfletuesve se çfarë është çdo pjesë e përmbajtjes - nëse është një titull, paragraf, imazh ose lidhje. Është si plani i një shtëpie!"
            },
            {
              title: "Si Funksionojnë Faqet e Internetit",
              content: "Kur vizitoni një faqe interneti:\\n1. Shfletuesi juaj kërkon faqen nga një server\\n2. Serveri dërgon kodin HTML\\n3. Shfletuesi lexon HTML-në dhe e shfaq atë\\n4. Ju shihni faqen e bukur!\\n\\nHTML është kudo - çdo faqe e internetit e përdor, nga blogje të thjeshta tek aplikacione komplekse si Facebook dhe Google."
            },
            {
              title: "Etiketat HTML - Blloqet Ndërtuese",
              content: "HTML përdor 'etiketa' për të shënuar përmbajtjen:\\n\\n• Etiketat janë të rrethuar me kllapa këndore: `<tag>`\\n• Shumica e etiketave vijnë në çifte: `<tag>përmbajtje</tag>`\\n• Etiketa hapëse fillon elementin\\n• Etiketa mbyllëse e përfundon atë (ka një pjerrake)\\n\\nShembull: `<h1>Ky është një titull</h1>`"
            },
            {
              title: "Provoje Vetë!",
              content: "Në lodër, provo:\\n1. Ndryshoni 'Hello, World!' me mesazhin tuaj\\n2. Shtoni një paragraf tjetër me `<p>Teksti juaj këtu</p>`\\n3. Bëni disa tekste të trasha me `<strong>tekst i trashë</strong>`\\n4. Shikoni si ndryshimet shfaqen menjëherë!\\n\\nUrime - tani po shkruani HTML! 🎉"
            }
          ]
        },
        2: {
          title: "Struktura e Dokumentit HTML & DOCTYPE",
          description: "Çdo dokument HTML ndjek një strukturë specifike - si një recetë me përbërës thelbësorë! Mësoni anatominë e një faqeje dhe pse struktura e saktë është e rëndësishme. 🏗️",
          sections: [
            {
              title: "Deklarimi DOCTYPE",
              content: "`<!DOCTYPE html>` i tregon shfletuesit se ky është një dokument HTML5.\\n\\n**Pse është e rëndësishme:**\\n• Siguron që faqja juaj të shfaqet saktë\\n• Parandalon problemet e renderimit në 'quirks mode'\\n• Duhet të jetë rreshti i parë\\n• Shkronjat e vogla janë standarde\\n\\nMendojeni DOCTYPE si shfaqjen e kartës tuaj të identitetit te shfletuesi - identifikon llojin e dokumentit që keni!"
            },
            {
              title: "Elementi HTML",
              content: "Elementi `<html>` mbështjell gjithçka tjetër:\\n\\n```html\\n<html lang=\"sq\">\\n  <!-- Gjithçka shkon këtu -->\\n</html>\\n```\\n\\n**Atributi lang:**\\n• U tregon lexuesve të ekranit çfarë gjuhe të përdorin\\n• Ndihmon motorët e kërkimit të kuptojnë përmbajtjen tuaj\\n• Përdorni 'sq' për shqip, 'en' për anglisht, etj.\\n• I rëndësishëm për akses!"
            },
            {
              title: "Head vs Body - Dy Seksione të Rëndësishme",
              content: "Çdo dokument HTML ka dy pjesë kryesore:\\n\\n**`<head>` (i padukshëm për përdoruesit):**\\n• Titulli i faqes (shfaqet në tab të shfletuesit)\\n• Informacioni meta\\n• Lidhjet me skedarët CSS dhe JavaScript\\n• Informacioni për motorët e kërkimit\\n\\n**`<body>` (i dukshëm për përdoruesit):**\\n• Tërë përmbajtja që njerëzit shohin\\n• Tekst, imazhe, lidhje, video\\n• Gjithçka që përbën faqen tuaj"
            },
            {
              title: "Etiketat Meta Thelbësore",
              content: 'Etiketat meta japin informacion të rëndësishëm:\\n\\n• `<meta charset="UTF-8">` - Trajton të gjitha karakteret e tekstit\\n• `<meta name="viewport"...>` - E bën faqen tuaj miqësore për celular\\n• `<title>` - Titulli i faqes në tab dhe rezultatet e kërkimit\\n\\nKëto mund të duken të padukshme, por janë thelbësore për një faqe profesionale!'
            },
            {
              title: "Praktikë për Strukturën e Dokumentit! 📋",
              content: "Në lodër, eksperimentoni me:\\n1. Ndryshoni titullin e faqes dhe shikojeni të përditësohet në tab të shfletuesit\\n2. Shtoni më shumë përmbajtje brenda `<body>`\\n3. Provoni kode të ndryshme gjuhësh në atributin lang\\n4. Vini re se si shfletuesi kupton këtë strukturë\\n\\nStruktura e saktë është themeli i çdo faqeje të shkëlqyer!"
            }
          ]
        }
      },
      css: {
        1: {
          title: "Çfarë është CSS? - Stilizimi i Faqes Tuaj të Parë",
          description: "Mirë se vini në botën e mahnitshme të CSS! CSS (Cascading Style Sheets) transformon HTML-në e thjeshtë në faqe të bukura dhe profesionale. Le të fillojmë udhëtimin tuaj në dizajn! 🎨",
          sections: [
            {
              title: "Çfarë është CSS?",
              content: "CSS do të thotë **Cascading Style Sheets**. Mendojeni si artisti i make-up-it për faqet e internetit:\\n\\n• **Cascading**: Stilet rrjedhin nga prindërit tek elementet fëmijë\\n• **Style**: Kontrollon si duken gjërat (ngjyra, fontet, paraqitja)\\n• **Sheets**: Koleksione të organizuara të rregullave të stilit\\n\\nNëse HTML është skeleti, CSS është lëkura, rrobat dhe make-up-i që i bën faqet e bukura!"
            },
            {
              title: "Si Funksionon CSS",
              content: "CSS funksionon duke zgjedhur elementet HTML dhe duke aplikuar stile:\\n\\n1. **Selector**: Targeton cilin element HTML të stilizojë\\n2. **Property**: Çfarë aspekti të ndryshojë (ngjyra, madhësia, etj.)\\n3. **Value**: Si ta ndryshojë\\n\\nShembull: `h1 { color: purple; }` i bën të gjitha titujt h1 të purpurt!"
            },
            {
              title: "Tre Mënyra për të Shtuar CSS",
              content: "Mund të shtoni CSS në tre mënyra:\\n\\n• **Inline**: `<p style=\"color: red;\">Tekst</p>`\\n• **Internal**: Etiketa `<style>` në `<head>`\\n• **External**: Skedar i veçantë `.css`\\n\\n**Praktika më e mirë**: Përdorni skedarë CSS të jashtëm për organizim më të mirë!"
            },
            {
              title: "Provoje Vetë! 🎨",
              content: "Në lodër, eksperimentoni me:\\n1. Ndryshoni ngjyrën e h1 nga e purpurt në ngjyrën tuaj të preferuar\\n2. Provoni fonte të ndryshme: `font-family: Georgia;`\\n3. Shtoni më shumë stile te paragrafi\\n4. Krijoni një klasë të re dhe aplikojeni te teksti\\n\\nShikoni si ndryshimet tuaja transformojnë menjëherë pamjen!"
            }
          ]
        },
        2: {
          title: "Selektorët CSS - Targetimi i Elementeve HTML",
          description: "Selektorët janë mënyra se si i tregoni CSS-së cilat elemente HTML të stilizojë. Zotëroni selektorët dhe ju kontrolloni saktësisht si duket faqja juaj! 🎯",
          sections: [
            {
              title: "Selektorët e Elementeve",
              content: "Targetoni elementet HTML me emrin e etiketës:\\n\\n```css\\nh1 { color: blue; }\\np { font-size: 16px; }\\ndiv { background-color: lightgray; }\\n```\\n\\n**Përdorni për**: Stilizimin e të gjithë elementeve të të njëjtit lloj"
            },
            {
              title: "Selektorët e Klasës (.class)",
              content: "Targetoni elementet me atribute specifike klase:\\n\\n**HTML**: `<p class=\"highlight\">Tekst</p>`\\n**CSS**: `.highlight { background-color: yellow; }`\\n\\n• Përdorni një pikë (.) para emrit të klasës\\n• Mund të përdoret në elemente të shumta\\n• Lloji i selektorit **më i përdorur**"
            },
            {
              title: "Selektorët ID (#id)",
              content: "Targetoni një element specifik me ID unik:\\n\\n**HTML**: `<div id=\"header\">Përmbajtje</div>`\\n**CSS**: `#header { background-color: navy; }`\\n\\n• Përdorni një hash (#) para emrit ID\\n• Duhet të jetë **unik** në faqe\\n• Specificiteti më i lartë se klasat"
            },
            {
              title: "Praktikë Selektorësh! 🎪",
              content: "Në lodër, provoni:\\n1. Shtoni një klasë të re `.warning` me tekst të kuq\\n2. Stilizoni të gjitha elementet `<p>` me një margin\\n3. Krijoni një ID `#footer` me sfond të errët\\n4. Përdorni selektorë të shumtë: `h1, h2, h3 { font-family: Georgia; }`\\n\\nEksperimentoni dhe shikoni si funksionojnë selektorë të ndryshëm!"
            }
          ]
        }
      },
      arduino: {
        1: {
          title: "Fillimi me Arduino Uno",
          description: "Mirë se vini te Arduino! Mësoni për bordin Arduino Uno, kuptoni komponentët e tij dhe shkruani programin tuaj të parë. Arduino e bën elektronikën argëtuese dhe të lehtë! 🤖",
          sections: [
            {
              title: "Çfarë është Arduino?",
              content: "Arduino është një **bord mikrokontrolleri** që e bën elektronikën dhe programimin të akses për të gjithë!\\n\\n**Karakteristika Kryesore:**\\n• Kompjuter i vogël që mund ta programoni\\n• 14 pine hyrje/dalje dixhitale\\n• 6 pine hyrje analoge\\n• Lidhje USB për programim\\n• Tension operimi 5V\\n• Perfekt për të mësuar elektronikë!\\n\\nMendojeni si një tru të vogël që mund të kontrollojë drita, motorë, sensorë dhe më shumë!"
            },
            {
              title: "Komponentët e Bordit Arduino",
              content: "**Pjesët Kryesore të Arduino Uno:**\\n\\n• **Porta USB**: Lidhuni me kompjuterin për programim\\n• **Power Jack**: Furnizim energjie të jashtme 7-12V\\n• **Pine Dixhitale (0-13)**: Lexoni/shkruani sinjale HIGH ose LOW\\n• **Pine Analoge (A0-A5)**: Lexoni vlerat e sensorëve (0-1023)\\n• **Pine GND**: Lidhje tokësimi (0V)\\n• **Pine 5V & 3.3V**: Pine furnizimi energjie\\n• **Butoni Reset**: Rinis programin tuaj\\n• **LED_BUILTIN**: LED e integruar në pin 13"
            },
            {
              title: "Bazat e Programimit Arduino",
              content: "Arduino përdor një gjuhë të ngjashme me C/C++. Çdo program ka dy funksione kryesore:\\n\\n**setup()**: Ekzekutohet një herë kur fillon Arduino\\n```cpp\\nvoid setup() {\\n  // Inicializoni pinet, sensorët, etj.\\n  pinMode(13, OUTPUT);\\n}\\n```\\n\\n**loop()**: Ekzekutohet vazhdimisht përgjithmonë\\n```cpp\\nvoid loop() {\\n  // Kodi kryesor i programit tuaj\\n  digitalWrite(13, HIGH);\\n  delay(1000);\\n}\\n```"
            },
            {
              title: "Provoje Vetë! 💡",
              content: "Në lodrën e kodit, do të shihni një program të thjeshtë për LED që ndizet e fik:\\n\\n1. **pinMode()**: Vendos pin 13 si OUTPUT\\n2. **digitalWrite()**: Ndez LED ON (HIGH) ose OFF (LOW)\\n3. **delay()**: Pret për milisekonda të specifikuara\\n\\n**Eksperimentoni:**\\n• Ndryshoni delay(1000) në delay(500) për vezullim më të shpejtë\\n• Provoni delay(100) për vezullim shumë të shpejtë\\n• Përdorni vlera të ndryshme delay për HIGH dhe LOW\\n\\nKy program i thjeshtë është themeli i të gjitha projekteve Arduino!"
            }
          ]
        },
        2: {
          title: "Vezullimi i LED - Programi Juaj i Parë Arduino",
          description: "Ndërtoni qarqen tuaj të parë! Mësoni si të lidhni një LED me Arduino dhe ta kontrolloni me kod. Këtu takohettë harduer-i me softuer-in! 💡",
          sections: [
            {
              title: "Komponentët që ju Nevojiten",
              content: "**Lista e Pjesëve:**\\n• Bordi Arduino Uno\\n• 1 LED (çfarëdo ngjyre)\\n• 1 rezistencë (220Ω - 330Ω)\\n• Tela lidhëse\\n• Breadboard (opsionale)\\n\\n**Bazat e LED:**\\n• LED-të kanë dy këmbë: **anode (+)** këmba e gjatë dhe **cathode (-)** këmba e shkurtër\\n• Gjithmonë përdorni një rezistencë për të parandaluar djegien e LED\\n• Rrymori rrjedh nga anode te cathode"
            },
            {
              title: "Lidhja e Qarkut LED",
              content: "**Lidhja Hap-pas-Hapi:**\\n\\n1. **Këmba e gjatë LED (anode)** → Lidheni me **Pin 8**\\n2. **Këmba e shkurtër LED (cathode)** → Lidheni me **rezistencë 220Ω**\\n3. **Fundi tjetër i rezistencës** → Lidheni me **GND (Ground)**\\n\\n**Pse rezistencë?**\\nPinet Arduino japin 5V, por LED-të zakonisht kanë nevojë vetëm 2-3V. Rezistenca kufizon rrymën për të mbrojtur LED-in.\\n\\n**Këshillë**: LED-të e kuqe kanë nevojë ~2V, LED-të Blu/Të bardha ~3V"
            },
            {
              title: "Kuptimi i Kodit",
              content: "**Shpjegimi i Kodit:**\\n\\n```cpp\\nint ledPin = 8;  // Variabla ruan numrin e pin\\n```\\nKrjon një variabël për të mbajtur mend se në cilin pin është LED\\n\\n```cpp\\npinMode(ledPin, OUTPUT);\\n```\\nI tregon Arduino se pin 8 do të dërgojë sinjale OUT\\n\\n```cpp\\ndigitalWrite(ledPin, HIGH);  // 5V në pin\\ndigitalWrite(ledPin, LOW);   // 0V në pin\\n```\\nHIGH = LED ON, LOW = LED OFF\\n\\n```cpp\\ndelay(500);  // Pret 500 milisekonda\\n```\\nPauzon programin (1000ms = 1 sekondë)"
            },
            {
              title: "Eksperimente për të Provuar! 🔬",
              content: "**Sfidoni veten:**\\n\\n1. **Kodi Morse**: Krijoni modelin SOS (3 vezullime të shkurtra, 3 të gjata, 3 të shkurtra)\\n2. **Semafori**: Simuloni një sekuencë semafori\\n3. **LED të Shumëfishta**: Lidhni LED në pine 8, 9, 10 dhe krijoni modele\\n4. **Rrahje Zemre**: Bëni LED të zbehet dhe ndizet si rrahje zemre\\n\\n**Zgjidhja e Problemeve:**\\n• LED nuk ndizet? Kontrolloni polaritetin (këmba e gjatë te pin)\\n• LED shumë e dobët? Kontrolloni vlerën e rezistencës\\n• LED u dogj? Harruat rezistencën?"
            }
          ]
        }
      }
    }
  }
};

export type TranslationKeys = typeof translations.en;
