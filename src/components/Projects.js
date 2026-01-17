import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// Add these imports for AI/IoT project images
//chatbot
import chatbotImg from "../assets/img/chatbot/frontpage.png";
import lstm from "../assets/img/chatbot/lstmaccuracyloss.png";
import bilstm from "../assets/img/chatbot/bilstmaccuracyloss.png";
import gru from "../assets/img/chatbot/gruaccuracyloss.png";
import modeltraining from "../assets/img/chatbot/comparing.png";
import cmatrix from "../assets/img/chatbot/comparingconfussionmatrix.png";
import webchat from "../assets/img/chatbot/chatbotwebsite.jpeg";
import greeting from "../assets/img/chatbot/chatbotstartgreeting.png";
// wasteclass
import accefm from "../assets/img/wasteproduct/AccuracyCurve-extract_feat_model.png";
import curvesftm from "../assets/img/wasteproduct/AccuracyLossCurve-fine-tunemodel.png";
import classreport from "../assets/img/wasteproduct/classificationreport.png";
import imgefm from "../assets/img/wasteproduct/imgExtractFeaturesModel.png";
import imgftm from "../assets/img/wasteproduct/imgFine-Tuned-Model.png";
//lol
import topfeatureimportance from "../assets/img/lol/topfeatureimportance.png";
import traintestloss from "../assets/img/lol/trainingtestloss.png";
import cmatrixl2 from "../assets/img/lol/cmatrix.png";
import classreportlol from "../assets/img/lol/classreport.png";
import roccurve from "../assets/img/lol/roc.png";
import tuningresult from "../assets/img/lol/learningrate.png";
import topfeatureweight from "../assets/img/lol/topfeature.png";
//fashion
import sampleimg from "../assets/img/fashion/sample_images.png";
import trainingcost from "../assets/img/fashion/traingcost.png";
import samplepred from "../assets/img/fashion/samplepred.png";
import cmatrixfashion from "../assets/img/fashion/cmatrixfash.png";
//emotion
import emotionDetectionImg from "../assets/img/emotiondetector/6b_deployment_test.png";
//smartparking
import smartParkingImg from "../assets/img/smartpark/all.png";
import systemars from "../assets/img/smartpark/systemarchi.png";
import flowchart from "../assets/img/smartpark/flowchart.png";
import sensorwire from "../assets/img/smartpark/sensor.png";
import camwire from "../assets/img/smartpark/cam.png";
//eco
import quis from "../assets/img/eco/quis.png";
import guide from "../assets/img/eco/guidestyle.png";
import start from "../assets/img/eco/1start.png";
import onboarding from "../assets/img/eco/2onboarding.png";
import signup from "../assets/img/eco/3Signup.png";
import signin from "../assets/img/eco/4Signin.png";
import home from "../assets/img/eco/5Home.png";
import sidebar from "../assets/img/eco/6Sidebar.png";
import weather from "../assets/img/eco/7weather.png";
import profile from "../assets/img/eco/8Profile.png";
import heathigh from "../assets/img/eco/9Heathigh.png";
import heatnormal from "../assets/img/eco/10Heatnormal-low.png";
import aqihigh from "../assets/img/eco/11AQIhigh.png";
import aqilow from "../assets/img/eco/12AQIlow-moderate.png";
import heatalert from "../assets/img/eco/13Heathighalert.png";
import aqialert from "../assets/img/eco/14AQIhighalert.png";
import news from "../assets/img/eco/15News.png";
import challenge from "../assets/img/eco/16Eco-HealthChallenge.png";
import community from "../assets/img/eco/17CommunityForums.png";
import carbon from "../assets/img/eco/18carbonfootprintcalc.png";
import emergency from "../assets/img/eco/19EmergencyPreparedness.png";

//motive
import motive from "../assets/img/Motive/motive.png";
import voice from "../assets/img/Motive/voice.png";
import role from "../assets/img/Motive/optionstart.png";
import jsstart from "../assets/img/Motive/jobseeker/1jsgettingstart.png";
import jsregist from "../assets/img/Motive/jobseeker/2jsregister.png";
import jsdetail from "../assets/img/Motive/jobseeker/3jsregisterdetail.png";
import jsdoc from "../assets/img/Motive/jobseeker/4jsdoc.png";
import jslogin from "../assets/img/Motive/jobseeker/5jslogin.png";
import jshome from "../assets/img/Motive/jobseeker/6jshome.png";
import jshomerecom from "../assets/img/Motive/jobseeker/7jshomerecom.png";
import jssavedjob from "../assets/img/Motive/jobseeker/8jshomesavedjob.png";
import jshistory from "../assets/img/Motive/jobseeker/9jshistory.png";
import jschat from "../assets/img/Motive/jobseeker/10jschat.png";
import jsprofile from "../assets/img/Motive/jobseeker/11jsprofil.png";
import jpstart from "../assets/img/Motive/comp/1jpgetstart.png";
import jpregist from "../assets/img/Motive/comp/2jpregist.png";
import jpcompform from "../assets/img/Motive/comp/3jpregistform.png";
import jplisence from "../assets/img/Motive/comp/4jpcomlisence.png";
import jplogin from "../assets/img/Motive/comp/5jplogin.png";
import jphome from "../assets/img/Motive/comp/6jphome.png";
import jpjobform from "../assets/img/Motive/comp/7jpnewjob.png";
import jpjoblist from "../assets/img/Motive/comp/8jpjoblist.png";
import jpappl from "../assets/img/Motive/comp/9jpapplicants.png";
import jpchatlist from "../assets/img/Motive/comp/10jpchat.png";
import jpchat from "../assets/img/Motive/comp/11jpchatperjob.png";
import jpprofile from "../assets/img/Motive/comp/12jpprofile.png";
//rdk
import rdklogo from "../assets/img/rdk/logo.png";
import rdkposter from "../assets/img/rdk/poster.png";
//hmit
import hmitlogo from "../assets/img/kpu/hmitlogo.png";
import opreq from "../assets/img/kpu/1oprec.png";
import timeline from "../assets/img/kpu/2timeline.png";
import inter from "../assets/img/kpu/3internaldebate.png";
import dosen from "../assets/img/kpu//4dosendebate.png";
import blackout from "../assets/img/kpu/5blackout.png";
import voteday from "../assets/img/kpu/6voteday.png";
//berkait
import berkait from "../assets/img/berkait/campaign.png";

import personalWebsiteImg from "../assets/img/nafttpa1.png";
import bmiCalculatorImg from "../assets/img/bmicalc.png";
import movieAppImg from "../assets/img/naftmovie.png";
import instrumentMarketplaceImg from "../assets/img/day6shop.png";
import ibmPortfolioImg from "../assets/img/ibmweb.png";
import bangkitCorpImg from "../assets/img/bangkitcorp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    // Website Projects (keep existing)
     {
      title: "Bangkit-Corp - Skilvul Tech4Impact",
      description: "A comprehensive web platform connecting pandemic-affected communities with resources and support. Features include problem reporting, job listings, scholarships, health information, and company dashboards.",
      imgUrl: bangkitCorpImg,
      category: "website",
      link: "https://bangkit-corp.netlify.app",
      github: "https://github.com/FE-20-Group-Project/React-Bangkit.app",
      fullDescription: "Bangkit-Corp is a full-stack web application developed for Skilvul Tech4Impact MSIB program in collaboration with National University of Singapore. The platform connects communities affected by COVID-19 with resources across economic, educational, and health sectors through problem reporting, information sharing, and collaborative solutions.",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Socket.io", "Bootstrap", "Chart.js", "JWT Authentication", "REST API"],
      overviews: [
        {
          title: "Project Overview",
          content: "Bangkit-Corp addresses pandemic-related challenges by creating a digital ecosystem connecting affected individuals with resources and support systems. The platform serves three main sectors: economic (job listings), education (scholarships), and health (information/articles). Users can report problems, access curated information, and connect with companies/organizations providing assistance."
        },
        {
          title: "Technical Architecture",
          content: "Built with React frontend and Node.js/Express backend using MongoDB database. Implements Redux for state management and JWT for authentication. Features include real-time communication with Socket.io, data visualization with Chart.js, rich text editing with Jodit React, and responsive design with Bootstrap. Uses Vite for build optimization and React Router for navigation."
        },
        {
          title: "Key Features",
          content: "1. Multi-role authentication (users, companies, admins). 2. Problem reporting system with categories and subcategories. 3. Information portal with jobs, scholarships, and health articles. 4. Company dashboards for managing job postings and scholarships. 5. Admin dashboard for content and user management. 6. Real-time chat and discussion forums. 7. User profiles with editing capabilities. 8. Responsive design for mobile and desktop."
        }
      ],
      projectStats: {
        category: "Full-Stack Application",
        status: "Completed",
        teamSize: "Group Project (8 Members)",
        duration: "3 Months",
        program: "Skilvul Tech4Impact MSIB",
        partner: "National University of Singapore",
        year: "2022",
        complexity: "Advanced",
        sectors: "Economic, Education, Health"
      }
    },
    {
      title: "Portfolio Website - IBM AI Developer Certificate",
      description: "A comprehensive portfolio website built as part of the IBM AI Developer Professional Certificate program on Coursera. Features professional profile, skills showcase, project highlights, and interactive recommendation system.",
      imgUrl: ibmPortfolioImg,
      category: "website",
      link: "https://naftibmprojectweb.netlify.app/",
      github: "https://github.com/Naftaliskp/final-project-website-ibm",
      fullDescription: "This portfolio website was developed as the final project for the IBM AI Developer Professional Certificate on Coursera. The website showcases professional skills, project experience, and includes an interactive recommendation system. Built with modern web technologies, it demonstrates proficiency in front-end development and user experience design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation", "Responsive Design", "Interactive Forms", "SVG Graphics"],
      overviews: [
        {
          title: "Project Overview",
          content: "This portfolio website serves as a comprehensive professional showcase developed for the IBM AI Developer Professional Certificate. The site includes multiple sections: About Me with professional background, Skills section with experience levels, Projects showcasing key work, and an interactive Recommendations system with user-submitted testimonials."
        },
        {
          title: "Technical Implementation",
          content: "Built with vanilla HTML, CSS, and JavaScript focusing on clean code structure and semantic markup. Implemented interactive features including a dynamic recommendation submission system, smooth scrolling navigation, and pop-up notifications. Used CSS Flexbox for responsive layouts and SVG graphics for visual elements."
        },
        {
          title: "Key Features",
          content: "1. Responsive navigation with smooth scrolling to sections. 2. Professional profile with contact information and animated GIF header. 3. Skills showcase with visual icons and experience levels. 4. Project portfolio with detailed descriptions. 5. Interactive recommendation system with live submission form. 6. Scroll-to-top functionality with custom SVG button. 7. Form validation and user feedback with pop-up notifications. 8. Responsive design for desktop and mobile viewing."
        }
      ],
      projectStats: {
        category: "Certificate Project",
        status: "Completed",
        teamSize: "Individual Project",
        duration: "1 Week",
        program: "IBM AI Developer Professional",
        platform: "Coursera",
        year: "2025",
        complexity: "Intermediate",
        features: "Interactive Forms"
      }
    },
    {
      title: "Instrument Marketplace - Gemastik Competition",
      description: "Front-end website for an instrument marketplace platform, designed for Gemastik competition. Features responsive design, product showcases, and user-friendly interface for music enthusiasts.",
      imgUrl: instrumentMarketplaceImg,
      category: "website",
      link: "https://naftday6shop.netlify.app/",
      github: "https://github.com/Naftaliskp/day6shop",
      fullDescription: "This responsive website was developed as a front-end prototype for a musical instrument marketplace platform, created for Gemastik competition. The platform showcases various musical instruments with detailed product information, category filtering, and a modern, engaging user interface designed for music enthusiasts and collectors.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Flexbox", "Grid", "Media Queries", "Boxicons"],
      overviews: [
        {
          title: "Project Overview",
          content: "The Instrument Marketplace website was designed as a front-end prototype for Gemastik competition, focusing on creating an engaging platform for music instrument enthusiasts. The website features a clean, modern design with sections for different instrument categories, featured products, and company information about the fictional band DAY6."
        },
        {
          title: "Design Implementation",
          content: "Implemented a responsive design using CSS Flexbox and Grid systems. Created gradient color schemes with #132e53 (dark blue) and #64ccc9 (light teal) as primary colors. Developed hover effects, transitions, and animations for interactive elements. Implemented a mobile-friendly navigation menu with hamburger icon functionality."
        },
        {
          title: "Key Features",
          content: "1. Responsive navigation with category filtering (Guitar, Bass, Keyboard, etc.). 2. Hero section with newsletter subscription and search functionality. 3. About section with team member profiles (Goldie, Haru, Atom). 4. Product showcase with top instruments of the week. 5. Responsive grid layout for product displays. 6. Interactive contact form and search bars. 7. Mobile-optimized design with extensive media queries."
        }
      ],
      projectStats: {
        category: "Competition Project",
        status: "Completed",
        teamSize: "Individual Project",
        duration: "2 Weeks",
        competition: "Gemastik",
        year: "2023",
        complexity: "Intermediate",
        features: "6 Device Breakpoints",
        instruments: "5 Categories"
      }
    },
    {
      title: "Movie App with TMDB API - Skilvul TPA 3",
      description: "A dynamic movie discovery application integrating TMDB API. Features include search functionality, genre filtering, pagination, and detailed movie information with responsive design.",
      imgUrl: movieAppImg,
      category: "website",
      link: "https://naftmovieapp.netlify.app/",
      github: "https://github.com/Naftaliskp/Technical-Project-Assignment-TPA-3---Movie-App-with-TMDB-API",
      fullDescription: "This advanced web application utilizes The Movie Database (TMDB) API to display trending movies, search functionality, and detailed film information. Built with vanilla JavaScript, it demonstrates API integration, asynchronous programming, and complex UI interactions with a modern, responsive design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "TMDB API", "Async/Await", "DOM Manipulation", "Responsive Design", "Pagination"],
      overviews: [
        {
          title: "Project Overview",
          content: "The Movie App is a comprehensive film discovery platform that fetches real-time data from TMDB API. Users can browse popular movies, search for specific titles, filter by genres, and view detailed information including ratings, overviews, and cast details."
        },
        {
          title: "Technical Implementation",
          content: "Built with vanilla JavaScript using Fetch API for asynchronous data retrieval. Implements dynamic DOM manipulation to render movie cards, search results, and pagination. Features include real-time search, genre-based filtering, responsive grid layout, and detailed modal views for movie information."
        },
        {
          title: "Key Features",
          content: "1. Real-time movie search with instant results. 2. Multi-genre filtering system with clear/unclear functionality. 3. Pagination with previous/next page navigation. 4. Responsive card-based movie display with hover effects. 5. Color-coded rating system (green/orange/red). 6. Detailed movie overviews on hover. 7. Mobile-responsive design with adaptive layout."
        }
      ],
      projectStats: {
        category: "Web Application",
        status: "Completed",
        teamSize: "Individual Project",
        duration: "5 Days",
        program: "Skilvul Tech4Impact",
        year: "2022",
        complexity: "Intermediate",
        features: "19 Genre Filters",
        api: "TMDB Integration"
      }
    },
    {
      title: "BMI Calculator - Skilvul TPA 2",
      description: "A web-based Body Mass Index calculator built with HTML, CSS, and JavaScript. Features input validation, BMI calculation, and category classification with instant results.",
      imgUrl: bmiCalculatorImg,
      category: "website",
      link: "https://naftbmicalculator.netlify.app/",
      github: "https://github.com/Naftaliskp/Technical-Project-Assignment-TPA-2---BMI-Calculator",
      fullDescription: "This interactive BMI calculator was developed as the second Technical Project Assignment in Skilvul's Front-end Web Development program. The application calculates Body Mass Index based on user-input weight and height, validates inputs, and provides health category classifications with instant feedback.",
      technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation", "Input Validation", "Responsive Design"],
      overviews: [
        {
          title: "Project Overview",
          content: "The BMI Calculator project focuses on creating an interactive web application that calculates Body Mass Index (BMI) based on WHO standards. The application includes real-time input validation, error handling, and provides health recommendations based on calculated BMI values."
        },
        {
          title: "Technical Implementation",
          content: "Built with vanilla JavaScript for DOM manipulation and event handling. Implements input validation to ensure only valid numerical values are accepted. Uses mathematical formulas to calculate BMI (weight / (height/100)^2). Features responsive design with gradient backgrounds and modern UI elements."
        },
        {
          title: "Key Features",
          content: "1. Real-time input validation with error messages. 2. Instant BMI calculation on button click. 3. Health category classification (Underweight, Normal, Overweight, Obesity). 4. Responsive design for all screen sizes. 5. User-friendly interface with clear instructions. 6. Visual feedback through color-coded styling."
        }
      ],
      projectStats: {
        category: "Web Application",
        status: "Completed",
        teamSize: "Individual Project",
        duration: "3 Days",
        program: "Skilvul Tech4Impact",
        year: "2022",
        complexity: "Beginner",
        features: "4 Health Categories"
      }
    },
    {
      title: "Personal Website - Skilvul TPA 1",
      description: "A personal portfolio website built for Tech4Impact: Front-end Web Development program assignment. Created with HTML, CSS, and vanilla JavaScript. Features multiple pages including About, Portfolio, Blog, and Contact sections.",
      imgUrl: personalWebsiteImg,
      category: "website",
      link: "https://nafttpa1.netlify.app/",
      github: "https://github.com/Naftaliskp/Technical-Project-Assignment-TPA-1---Personal-Website",
      fullDescription: "This project was developed as part of the Skilvul Tech4Impact: Front-end Web Development program's Technical Project Assignment (TPA). The website serves as a personal portfolio showcasing my background, projects, blog posts, and contact information. Built with semantic HTML5, modern CSS3, and interactive JavaScript features.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Figma", "Google Drive API"],
      overviews: [
        {
          title: "Project Overview",
          content: "This personal website was created within one week as part of the Studi Independen Program Skilvul Tech4Impact: Front-end Web Development. The website consists of 5 main pages: Homepage, About Me, Portfolio, Blog, and Contact. Each page demonstrates fundamental web development skills including layout design, navigation, and content organization."
        },
        {
          title: "Technical Implementation",
          content: "The website uses a mobile-first responsive design approach. CSS Flexbox and Grid were implemented for layout structuring. Interactive elements include a responsive navigation menu, hover effects on portfolio items, and form validation. External libraries used include Boxicons for icons and Google Fonts for typography."
        },
        {
          title: "Key Features",
          content: "1. Responsive navigation bar with hamburger menu for mobile devices. 2. Portfolio showcase section with project cards and external links. 3. About page with personal background and education details. 4. Blog page with technical article about Information Technology. 5. Contact page with social media links and email information. 6. Consistent styling and color scheme across all pages."
        }
      ],
      projectStats: {
        category: "Web Development",
        status: "Completed",
        teamSize: "Individual Project",
        duration: "1 Week",
        program: "Skilvul Tech4Impact",
        year: "2022",
        complexity: "Beginner"
      }
    },
    // ... keep other website projects ...

    // AI & IoT Projects - REAL PROJECTS
    {
      title: "Development of Website-Based Chatbot for Customer Service in Cluster Puri Surya Jaya Using Deep Learning Approach",
      description: "Website-integrated LSTM-based chatbot system for residential community customer service with 89% accuracy, designed to handle IPL payments, regulations, and complaint management.",
      imgUrl: chatbotImg,
      category: "ai-iot",
      github: "https://github.com/Naftaliskp/Souce-Code-Tugas-Akhir",
      report: "https://drive.google.com/file/d/1z74hRvfREPBxBprztLLaNk_U6IZuWSF7/view?usp=sharing",
      fullDescription: "This thesis project develops a comprehensive website-based chatbot system using LSTM deep learning for customer service in Cluster Puri Surya Jaya residential community. The system addresses administrative complexity, IPL payment management, and regulation clarification through an intelligent chatbot interface. The solution processes 860 questions across 78 information categories using NLP preprocessing and achieves 89% accuracy in real user validation tests.",
      technologies: ["Python", "PyTorch", "LSTM", "BiLSTM", "GRU", "Flask", "ReactJS", "MySQL", "NLP", "HTML/CSS", "JavaScript", "scikit-learn"],
      workflows: [
        {
          title: "Data Acquisition & Preparation",
          content: "1. Conducted surveys and interviews with Cluster Puri Surya Jaya residents and management. 2. Collected 860 questions covering 78 information categories. 3. Created 14 main labels for classification. 4. Structured dataset in CSV format with Question, Tag, and Label columns. 5. Performed comprehensive data analysis on IPL payment patterns and resident needs."
        },
        {
          title: "NLP Preprocessing Pipeline",
          content: "1. Tokenization: Split sentences into individual tokens. 2. Lowercasing: Convert all text to lowercase. 3. Stop Words Removal: Eliminate common words (yang, ya, etc.). 4. Stemming: Reduce words to root forms (dipake → pakai). 5. Slang Word Conversion: Transform informal language to standard forms. 6. Text Cleaning: Remove punctuation and special characters. 7. Sequence Padding: Standardize input length for model training."
        },
        {
          title: "Deep Learning Model Development",
          content: "1. Implemented three architectures: LSTM, BiLSTM, and GRU for comparison. 2. Used PyTorch for LSTM implementation with embedding layers. 3. Trained for 250 epochs with batch size 32. 4. Applied early stopping and model checkpointing to prevent overfitting. 5. Used Adam optimizer with cross-entropy loss function. 6. Implemented word embedding with PyTorch's nn.Embedding module."
        },
        {
          title: "Website Development & Integration",
          content: "1. Built frontend with ReactJS for responsive user interface. 2. Developed backend using Flask framework with Python. 3. Implemented MySQL database for user data, complaints, and information storage. 4. Created user authentication system with role-based access (resident/admin). 5. Integrated chatbot widget using HTML/JavaScript for seamless interaction. 6. Developed RESTful API for communication between frontend and chatbot model."
        }
      ],
      results: [
        {
          type: "metric",
          title: "Model Performance Comparison",
          content: "• LSTM: Train Accuracy: 91%, Test Accuracy: 81%, Precision: 96%, Recall: 91%, F1-Score: 92% • BiLSTM: Train Accuracy: 92%, Test Accuracy: 82%, Precision: 91%, Recall: 87%, F1-Score: 88% • GRU: Train Accuracy: 96%, Test Accuracy: 81%, Precision: 89%, Recall: 84%, F1-Score: 84%"
        },
        {
          type: "metric",
          title: "Dataset Statistics",
          content: "• Total Questions: 860 • Information Categories: 78 • Main Labels: 14 • Training Data: 80% (688 questions) • Testing Data: 20% (172 questions) • Average Questions per Category: 11"
        },
        {
          type: "metric",
          title: "User Validation Results",
          content: "• Total Questions Tested: 100 • Correct Responses: 89 • Incorrect Responses: 11 • Overall Accuracy: 89% • Best User Performance: 100% correct (3 users) • Average User Accuracy: 89%"
        },
        {
          type: "image",
          url: lstm,
          caption: "Visualization of LSTM Model Training Accuracy and Loss Results"
        },
        {
          type: "image",
          url: bilstm,
          caption: "Visualization of BiLSTM Model Training Accuracy and Loss Results"
        },
        {
          type: "image",
          url: gru,
          caption: "Visualization of GRU Model Training Accuracy and Loss Results"
        },
        {
          type: "image",
          url: modeltraining,
          caption: "Comparing of Model Training Accuracy and Loss Results"
        },
        {
          type: "image",
          url: cmatrix,
          caption: "Comparing of Model Training Confussion Matrix Results"
        },
        {
          type: "image",
          url: chatbotImg,
          caption: "Website Front Page with Chatbot Widget"
        },
        {
          type: "image",
          url: webchat,
          caption: "Website Display after Chatbot Widget is Clicked"
        },
        {
          type: "image",
          url: greeting,
          caption: "Chatbot Start Greeting"
        }
      ],
      projectStats: {
        category: "Academic Thesis & Research",
        status: "Completed & Published",
        teamSize: "Individual Research with Supervisors",
        duration: "1 Semester",
        year: "2024",
        complexity: "Advanced",
        accuracy: "89% (User Validation)",
        institution: "Institut Teknologi Sepuluh Nopember (ITS)",
        department: "Departemen Teknologi Informasi",
        publication: "Jurnal Teknik ITS Vol. X, No. Y, (2024)"
      }
    },
    {
      title: "Waste Classification Using Transfer Learning",
      description: "Automated waste sorting system using VGG16 transfer learning to classify images as recyclable or organic waste. Achieves 87% accuracy with fine-tuned model.",
      imgUrl: imgefm,
      category: "ai-iot",
      github: "https://github.com/Naftaliskp/Final-Project-Classify-Waste-Products",
      fullDescription: "This project develops an automated waste classification model using transfer learning with VGG16 to accurately differentiate between recyclable and organic waste based on images. The system addresses labor-intensive manual sorting processes prone to errors. The project implements both feature extraction and fine-tuning approaches, achieving 81% accuracy with feature extraction and 87% accuracy with fine-tuned model on test data.",
      technologies: ["Python", "TensorFlow", "Keras", "VGG16", "NumPy", "Matplotlib", "scikit-learn", "ImageDataGenerator", "Jupyter Notebook"],
      workflows: [
        {
          title: "Data Preparation & Preprocessing",
          content: "1. Downloaded Waste Classification Dataset with 1200 images (800 training, 200 validation, 200 test). 2. Applied data augmentation: rescaling (1/255), width/height shifting (0.1), and horizontal flipping. 3. Created ImageDataGenerators for training, validation, and testing with binary classification setup. 4. Split data into 80% training and 20% validation subsets."
        },
        {
          title: "Feature Extraction Model Development",
          content: "1. Loaded pre-trained VGG16 model with ImageNet weights, excluding top layers. 2. Froze all base model layers to preserve learned features. 3. Added custom classification head: Dense(512, ReLU) → Dropout(0.3) → Dense(512, ReLU) → Dropout(0.3) → Dense(1, Sigmoid). 4. Compiled model with binary crossentropy loss and Adam optimizer (1e-5 learning rate). 5. Trained for 10 epochs with early stopping and model checkpointing."
        },
        {
          title: "Model Fine-Tuning & Optimization",
          content: "1. Unfroze last convolutional block (block5_conv3) for fine-tuning. 2. Re-trained model with RMSprop optimizer (1e-4 learning rate). 3. Implemented learning rate scheduler with exponential decay. 4. Used early stopping with 4-epoch patience to prevent overfitting. 5. Saved best models: 'O_R_tlearn_vgg16.keras' and 'O_R_tlearn_fine_tune_vgg16.keras'."
        }
      ],
      results: [
        {
          type: "metric",
          title: "Feature Extraction Model Performance",
          content: "• Overall Accuracy: 81% • Organic Waste Precision: 84% • Recyclable Waste Precision: 78% • Organic Waste Recall: 76% • Recyclable Waste Recall: 86%"
        },
        {
          type: "metric",
          title: "Fine-Tuned Model Performance",
          content: "• Overall Accuracy: 87% • Organic Waste Precision: 84% • Recyclable Waste Precision: 91% • Organic Waste Recall: 92% • Recyclable Waste Recall: 82%"
        },
        {
          type: "image",
          url: accefm,
          caption: "Accuracy Curves: Training vs Validation (Extract Feat Model)"
        },
        {
          type: "image",
          url: curvesftm,
          caption: "Accuracy and Loss Curves: Training vs Validation (Fine Tune Model)"
        },
        {
          type: "image",
          url: classreport,
          caption: "Classification Report of Both Models"
        },
        {
          type: "image",
          url: imgefm,
          caption: "Extract Features Model Image Result"
        },
        {
          type: "image",
          url: imgftm,
          caption: "Fine Tune Model Image Result"
        }
      ],
      projectStats: {
        category: "Computer Vision & Transfer Learning",
        status: "Completed",
        teamSize: "Individual Project from IBM",
        duration: "60 Minutes (Project Timeline)",
        year: "2025",
        complexity: "Intermediate",
        accuracy: "87% (Fine-Tuned Model)",
        datasetSize: "1200 Images",
        model: "VGG16 with Transfer Learning"
      }
    },
    {
      title: "League of Legends Match Predictor",
      description: "Binary classification model using logistic regression to predict match outcomes in League of Legends. Achieves 55.5% accuracy with L2 regularization and identifies key game statistics influencing wins.",
      imgUrl: topfeatureimportance,
      category: "ai-iot",
      github: "https://github.com/Naftaliskp/Final-Project-League-of-Legends-Match-Predictor",
      fullDescription: "This project develops a logistic regression model using PyTorch to predict the outcomes of League of Legends matches based on in-game statistics. The model analyzes 8 key features including kills, deaths, assists, gold earned, creep score, wards placed/killed, and damage dealt. The project implements a complete machine learning pipeline from data preprocessing to model deployment, including hyperparameter tuning and feature importance analysis.",
      technologies: ["Python", "PyTorch", "scikit-learn", "pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      workflows: [
        {
          title: "Data Loading & Preprocessing",
          content: "1. Loaded 1000-match dataset from CSV with 8 features and binary win/loss target. 2. Split data into 80% training (800 samples) and 20% testing (200 samples) with stratified sampling. 3. Standardized features using StandardScaler for consistent scaling. 4. Converted data to PyTorch tensors for efficient model training."
        },
        {
          title: "Model Implementation & Training",
          content: "1. Implemented LogisticRegressionModel class with nn.Linear layer and sigmoid activation. 2. Used Binary Cross-Entropy Loss (BCELoss) for binary classification. 3. Trained for 1000 epochs with SGD optimizer (learning rate=0.01). 4. Monitored training/test loss convergence with visualization. 5. Achieved 51.88% training accuracy and 52.50% test accuracy in baseline model."
        },
        {
          title: "Regularization & Optimization",
          content: "1. Applied L2 regularization (weight_decay=0.01) to prevent overfitting. 2. Improved test accuracy from 52.5% to 55.5% with regularization. 3. Reduced gap between training and test loss, indicating better generalization. 4. Regularized model showed better performance on unseen data."
        },
        {
          title: "Hyperparameter Tuning",
          content: "1. Tested learning rates: [0.001, 0.01, 0.05, 0.1, 0.2]. 2. Found optimal learning rate: 0.05 with 54% test accuracy. 3. Visualized accuracy vs. learning rate relationship. 4. Demonstrated learning rate's impact on model convergence and performance."
        }
      ],
      results: [
        {
          type: "metric",
          title: "Model Performance Metrics",
          content: "• Baseline Test Accuracy: 52.50% • Regularized Test Accuracy: 55.50% • Precision: 55.04% • Recall: 69.61% • F1-Score: 61.47% • AUC Score: 0.5944"
        },
        {
          type: "metric",
          title: "Feature Importance Rankings",
          content: "1. wards_placed (Weight: +0.0895) - Most positive impact 2. gold_earned (Weight: +0.0693) - Second most positive 3. damage_dealt (Weight: -0.0534) - Negative impact 4. kills (Weight: +0.0267) 5. deaths (Weight: +0.0117)"
        },
        {
          type: "image",
          url: traintestloss,
          caption: "Training and Test Loss Convergence Over 1000 Epochs"
        },
        {
          type: "image",
          url: cmatrixl2,
          caption: "Confussion Matrix for Training with L2 regularization"
        },
        {
          type: "image",
          url: classreportlol,
          caption: "Classification Report"
        },
        {
          type: "image",
          url: roccurve,
          caption: "ROC Curve with AUC Score Result"
        },
        {
          type: "image",
          url: tuningresult,
          caption: "Learning Rate of Tuning Result"
        },
        {
          type: "image",
          url: topfeatureweight,
          caption: "Feature Importance (weights)"
        },
        {
          type: "image",
          url: topfeatureimportance,
          caption: "Absolute Feature Importance"
        }
      ],
      projectStats: {
        category: "Machine Learning & Game Analytics",
        status: "Completed",
        teamSize: "Individual Project from IBM",
        duration: "1 Week",
        year: "2025",
        complexity: "Intermediate",
        accuracy: "55.5% (With L2 Regularization)",
        datasetSize: "1000 Matches",
        features: "8 In-game Statistics",
        model: "Logistic Regression (PyTorch)"
      }
    },
    {
      title: "Fashion-MNIST Image Classification",
      description: "Convolutional Neural Network with batch normalization for classifying Fashion-MNIST clothing images. Achieves 88.74% accuracy with efficient architecture.",
      imgUrl: samplepred,
      category: "ai-iot",
      github: "https://github.com/Naftaliskp/Fashion-MNIST-Project-",
      fullDescription: "This project implements a convolutional neural network (CNN) with batch normalization to classify images from the Fashion-MNIST dataset. The model successfully identifies 10 different clothing categories from 28x28 grayscale images, including T-shirts, trousers, dresses, and shoes. The project demonstrates the complete pipeline from data preprocessing to model training and evaluation using PyTorch.",
      technologies: ["Python", "PyTorch", "torchvision", "NumPy", "Matplotlib", "scikit-learn", "seaborn", "Jupyter Notebook"],
      workflows: [
        {
          title: "Dataset Preparation & Preprocessing",
          content: "1. Downloaded Fashion-MNIST dataset with 60,000 training and 10,000 test images. 2. Applied transforms: Resize to 16x16 pixels and convert to PyTorch tensors. 3. Created DataLoader objects for efficient batch processing. 4. Visualized sample images from the validation set to understand data distribution."
        },
        {
          title: "CNN Architecture Design",
          content: "1. Implemented CNN_batch class with two convolutional layers and batch normalization. 2. Layer 1: Conv2d(1→16, kernel=5×5, padding=2) + BatchNorm2d + ReLU + MaxPool2d. 3. Layer 2: Conv2d(16→32, kernel=5×5, padding=2) + BatchNorm2d + ReLU + MaxPool2d. 4. Fully Connected Layer: Linear(512→10) with final batch normalization. 5. Total parameters: 18,494 trainable parameters."
        },
        {
          title: "Model Training & Optimization",
          content: "1. Used CrossEntropyLoss as criterion for multi-class classification. 2. Employed SGD optimizer with learning rate 0.1. 3. Trained for 5 epochs with batch size 100. 4. Implemented training loop with proper gradient zeroing, forward pass, loss computation, and backpropagation. 5. Tracked training cost and validation accuracy after each epoch."
        }
      ],
      results: [
        {
          type: "metric",
          title: "Training Performance",
          content: "• Epoch 1: 84.91% accuracy • Epoch 2: 87.32% accuracy • Epoch 3: 88.17% accuracy • Epoch 4: 89.42% accuracy • Epoch 5: 88.74% accuracy • Final Test Accuracy: 88.74% • Training Time: 127.71 seconds"
        },
        {
          type: "metric",
          title: "Model Architecture Details",
          content: "• Convolutional Layers: 2 • Fully Connected Layers: 1 • Total Parameters: 18,494 • Batch Size: 100 • Learning Rate: 0.1 • Optimizer: Stochastic Gradient Descent • Loss Function: Cross Entropy Loss"
        },
        {
          type: "image",
          url: sampleimg,
          caption: "3 Samples From Validation Dataset"
        },
        {
          type: "image",
          url: trainingcost,
          caption: "Training Cost and Validation Accuracy"
        },
        {
          type: "image",
          url: samplepred,
          caption: "Predictions Results"
        },
        {
          type: "image",
          url: cmatrixfashion,
          caption: "Confussion Matrix"
        }
      ],
      projectStats: {
        category: "Computer Vision & Deep Learning",
        status: "Completed",
        teamSize: "Individual Project from IBM",
        duration: "1 Week",
        year: "2025",
        complexity: "Intermediate",
        accuracy: "88.74%",
        datasetSize: "70,000 Images",
        imageSize: "16×16 (Resized)",
        model: "CNN with Batch Normalization"
      }
    },
    {
      title: "Emotion Detection API",
      description: "Flask-based web application for real-time emotion analysis from text using IBM Watson NLP API. Classifies text into five emotions: anger, disgust, fear, joy, and sadness.",
      imgUrl: emotionDetectionImg,
      category: "ai-iot",
      github: "https://github.com/Naftaliskp/final-project-emotiondetector",
      fullDescription: "This project implements a complete emotion detection system that analyzes textual input and identifies the dominant emotion along with confidence scores for five emotional categories. The system consists of a Flask web server frontend, IBM Watson NLP API integration backend, and comprehensive unit testing suite. The application provides both a RESTful API endpoint and a user-friendly web interface for emotion analysis.",
      technologies: ["Python", "Flask", "IBM Watson NLP", "REST API", "unittest", "JSON", "HTML/CSS", "JavaScript"],
      workflows: [
        {
          title: "Backend NLP Integration",
          content: "1. Integrated IBM Watson Emotion Predict API for emotion analysis. 2. Implemented emotion_detector() function to process text through Watson NLP service. 3. Handled API errors and edge cases with proper error responses. 4. Extracted and processed five emotion scores: anger, disgust, fear, joy, sadness. 5. Calculated dominant emotion by comparing confidence scores."
        },
        {
          title: "Flask Web Server Development",
          content: "1. Built Flask application with RESTful API endpoint (/emotionDetector). 2. Implemented GET endpoint with query parameter 'textToAnalyze'. 3. Added input validation for empty or invalid text inputs. 4. Created error handling with HTTP 400 status codes for invalid requests. 5. Developed formatted response generation with emotion scores and dominant emotion."
        },
        {
          title: "Testing and Validation",
          content: "1. Developed comprehensive unit tests using Python's unittest framework. 2. Tested all five emotion categories with sample statements. 3. Verified API error handling and edge cases. 4. Implemented test cases for empty input validation. 5. Ensured consistent response formatting across all test scenarios."
        }
      ],
      results: [
        {
          type: "metric",
          title: "Test Coverage",
          content: "• Joy Detection: 'I am glad this happened' → 'joy' • Anger Detection: 'I am really mad about this' → 'anger' • Disgust Detection: 'I feel disgusted...' → 'disgust' • Sadness Detection: 'I am so sad...' → 'sadness' • Fear Detection: 'I am really afraid...' → 'fear' • All Tests: 100% pass rate"
        },
        {
          type: "metric",
          title: "System Specifications",
          content: "• Framework: Flask 2.3.3 • API: IBM Watson Emotion Predict • Port: 5000 • Host: 0.0.0.0 (all interfaces) • Input Method: GET request with query parameter • Output: JSON or formatted text response • Error Codes: 400 for invalid input"
        },
        {
          type: "image",
          url: emotionDetectionImg,
          caption: "Emotion Detection Result for Statement 'I think I am having fun'"
        }
      ],
      projectStats: {
        category: "NLP & Web Development",
        status: "Completed",
        teamSize: "Individual Project from IBM",
        duration: "1 Month",
        year: "2025",
        complexity: "Intermediate",
        emotionsDetected: "5 categories",
        apiIntegration: "IBM Watson NLP",
        framework: "Flask"
      }
    },
    {
      title: "Smart Parking Lot System",
      description: "IoT-based smart parking system using ESP32 microcontrollers with computer vision and sensor integration for real-time parking space detection and management.",
      imgUrl: smartParkingImg,
      category: "ai-iot",
      github: "https://github.com/Naftaliskp/Smart-Parking-Lot-System",
      report: "https://drive.google.com/file/d/1-E_AHNCLiCV-7Ow9VA3FDsCcKr2rRt2j/view?usp=sharing",
      fullDescription: "This IoT project implements a complete smart parking system that combines computer vision, sensor technology, and wireless communication to detect and manage parking space availability in real-time. The system uses ESP32 microcontrollers with ESP-NOW protocol for device communication, avoid sensors for initial detection, and YOLO-based computer vision for vehicle verification. The system provides visual feedback through RGB LEDs and LCD displays.",
      technologies: ["ESP32", "ESP32-CAM", "Arduino IDE", "Python", "OpenCV", "YOLOv3", "ESP-NOW", "WiFi", "Arduino Nano", "C++", "IoT Protocols"],
      workflows: [
        {
          title: "Hardware System Design",
          content: "1. Designed dual-microcontroller architecture: ESP32 Dev Module for sensor/display and ESP32-CAM for computer vision. 2. Integrated avoid sensors for initial vehicle detection in parking slots. 3. Implemented RGB LED system (green for available, red for occupied). 4. Configured 16x2 LCD display for real-time status updates. 5. Built prototype parking lot structure with triplek wood and vehicle miniatures."
        },
        {
          title: "Wireless Communication Setup",
          content: "1. Implemented ESP-NOW protocol for peer-to-peer communication between ESP32 devices. 2. Configured WiFi connectivity for ESP32-CAM live streaming to laptop. 3. Established serial communication between ESP32-CAM and laptop via Arduino Nano. 4. Created robust message passing system for status updates between devices. 5. Implemented error handling and delivery confirmation mechanisms."
        },
        {
          title: "Computer Vision Implementation",
          content: "1. Configured ESP32-CAM as HTTP server for live video streaming. 2. Developed Python application using OpenCV and YOLOv3 for vehicle detection. 3. Trained YOLO model to specifically detect cars in parking scenarios. 4. Implemented confidence thresholding (0.5) for accurate detection. 5. Created serial communication interface to send detection results back to ESP32-CAM."
        }
      ],
      results: [
        {
          type: "metric",
          title: "System Components",
          content: "• Microcontrollers: ESP32 Dev Module + ESP32-CAM • Sensors: Avoid sensor for initial detection • Communication: ESP-NOW protocol + WiFi • Vision: YOLOv3 car detection • Display: 16x2 LCD + RGB LED • Connectivity: HTTP server for live streaming • Power: 12V AC adapter with power module"
        },
        {
          type: "metric",
          title: "Technical Specifications",
          content: "• Detection Range: Adjustable via sensor positioning • Response Time: < 2 seconds from detection to status update • Communication Range: Up to 100m (ESP-NOW) • Video Resolution: CIF (352x288) • Processing: Real-time on laptop • Accuracy: 95%+ car detection with YOLOv3"
        },
        {
          type: "image",
          url: systemars,
          caption: "Systems Integration Architecture"
        },
        {
          type: "image",
          url: flowchart,
          caption: "Systems Flowchart"
        },
        {
          type: "image",
          url: sensorwire,
          caption: "Sensor and Output System's Wiring Scheme"
        },
        {
          type: "image",
          url: camwire,
          caption: "camera System's Wiring Scheme"
        },
        {
          type: "image",
          url: smartParkingImg,
          caption: "Smart Parking System Prototype"
        }
      ],
      projectStats: {
        category: "IoT & Embedded Systems",
        status: "Completed",
        teamSize: "2 Members",
        duration: "1 Semester Project",
        year: "2022",
        complexity: "Advanced",
        institution: "Institut Teknologi Sepuluh Nopember",
        faculty: "Fakultas Teknologi Elektro dan Informatika Cerdas",
        department: "Departemen Teknologi Informasi"
      }
    },

     // Design Projects - NEW ADDITIONS
    {
      title: "EcoHealZ - UI/UX Design Competition",
      description: "Mobile application integrating health and environmental information with personalized alerts, ecological challenges, and community features to address climate change impacts on health.",
      imgUrl: start,
      category: "design",
      // Three links as requested
      figmaLink: "https://www.figma.com/design/dIgJe8PJHl6VVwi4yFC2bI/EcoHealZ?node-id=0-1&t=JvEWSK6e9dLHXKj1-1",
      reportLink: "https://drive.google.com/file/d/1RiXGTTLsH0aZZ_72IFmb42DDNozeHBVV/view?usp=sharing",
      prototypeLink: "https://intip.in/ClickablePrototypeNotSureGonnaWinButKunfayakun",
      fullDescription: "EcoHealZ is a comprehensive mobile application designed for the UI/UX Design Competition at FT EXPO IEC 2023. The app integrates climate change information with health monitoring to help users understand and mitigate the impacts of environmental changes on their wellbeing. Features include real-time climate data, personalized health alerts, ecological challenges, and community engagement tools.",
      technologies: ["Figma", "Adobe Illustrator", "User Research", "Wireframing", "Prototyping", "Usability Testing", "User Personas", "User Flow"],
      projectStats: {
        category: "UI/UX Design Competition",
        status: "Completed",
        teamSize: "2 Members",
        duration: "2 Weeks",
        year: "2023",
        competition: "FT EXPO IEC 2023",
        institution: "Institut Teknologi Sepuluh Nopember (ITS)",
        faculty: "Fakultas Teknologi Elektro dan Informatika Cerdas",
        department: "Departemen Teknologi Informasi",
        theme: "Kesehatan (Health)"
      },
      overviews: [
        {
          title: "Project Background & Competition Context",
          content: "Developed for the UI/UX Design Competition at FT EXPO IEC 2023 with the theme 'Health'. EcoHealZ addresses the critical connection between climate change and public health, providing a platform for users to monitor environmental impacts on their wellbeing and take proactive measures."
        },
        {
          title: "Design Process & Methodology",
          content: "Followed a user-centered design approach with extensive research including: 1) Climate data analysis from BMKG, 2) Health data collection from Dinas Kesehatan Jakarta, 3) Survey of 42 respondents across different demographics, 4) SWOT analysis for strategic planning, 5) Creation of detailed user personas and user flows."
        },
        {
          title: "Key Features & User Benefits",
          content: "• Real-time climate and health alerts based on location • Personalized recommendations for health protection during environmental changes • Ecological challenges to encourage sustainable habits • Community forum for sharing experiences and solutions • Educational content on climate-health connections • Integration with local health and environmental data sources"
        }
      ],
      results: [
        {
          type: "image",
          url: quis,
          caption: "Respondents Questionnaire Results"
        },
        {
          type: "image",
          url: guide,
          caption: "Design Style Guide"
        },
        {
          type: "image",
          url: start,
          caption: "High-Fidelity Mockups - Starting Page"
        },
        {
          type: "image",
          url: onboarding,
          caption: "High-Fidelity Mockups - Onboarding Page"
        },
        {
          type: "image",
          url: signup,
          caption: "High-Fidelity Mockups - Sign Up Page"
        },
        {
          type: "image",
          url: signin,
          caption: "High-Fidelity Mockups - Sign In Page"
        },
        {
          type: "image",
          url: home,
          caption: "High-Fidelity Mockups - Home Page"
        },
        {
          type: "image",
          url: sidebar,
          caption: "High-Fidelity Mockups - Sidebar Menu"
        },
        {
          type: "image",
          url: weather,
          caption: "High-Fidelity Mockups - Weather Page"
        },
        {
          type: "image",
          url: profile,
          caption: "High-Fidelity Mockups - Profile Page"
        },
        {
          type: "image",
          url: heathigh,
          caption: "High-Fidelity Mockups - Heat Stress Tracker- Heat high"
        },
        {
          type: "image",
          url: heatnormal,
          caption: "High-Fidelity Mockups - Heat Stress Tracker- Heat normal-low"
        },
        {
          type: "image",
          url: aqihigh,
          caption: "High-Fidelity Mockups - Air Quality Index (AQI) Alerts - AQI high"
        },
        {
          type: "image",
          url: aqilow,
          caption: "High-Fidelity Mockups - Air Quality Index (AQI) Alerts - AQI low-moderate"
        },
        {
          type: "image",
          url: heatalert,
          caption: "High-Fidelity Mockups - Heat Stress High Alert Notification"
        },
        {
          type: "image",
          url: aqialert,
          caption: "High-Fidelity Mockups - Air Quality Index (AQI) High Alert Notification"
        },
        {
          type: "image",
          url: news,
          caption: "High-Fidelity Mockups - News Page"
        },
        {
          type: "image",
          url: challenge,
          caption: "High-Fidelity Mockups - Eco-Health Challenge Page"
        },
        {
          type: "image",
          url: community,
          caption: "High-Fidelity Mockups - Community Forum Page"
        },
        {
          type: "image",
          url: carbon,
          caption: "High-Fidelity Mockups - Carbon Footprint Calculator Page"
        },
        {
          type: "image",
          url: emergency,
          caption: "High-Fidelity Mockups - Emergency Preparedness Page"
        },
        {
          type: "metric",
          title: "Research & Data Analysis Results",
          content: "• Climate Data Analysis: 0.5°C temperature increase in August 2023\n• Health Data: 638,291 ISPA cases in Jakarta (Jan-Jun 2023)\n• User Survey: 42 respondents across diverse demographics\n• SWOT Analysis: Comprehensive internal/external factor assessment"
        },
        {
          type: "metric",
          title: "Design Documentation & Deliverables",
          content: "• Complete 35-page competition proposal document\n• User personas with detailed characteristics\n• Comprehensive user flow diagrams\n• 12+ wireframe screens\n• 12+ high-fidelity mockup screens\n• Interactive clickable prototype\n• Competition submission package"
        }
      ]
    },
    {
      title: "Motive - Job Platform for People with Disabilities",
      description: "Mobile application connecting people with disabilities to job opportunities that match their strengths and conditions, with voice assistance features and dual interfaces for job seekers and providers.",
      imgUrl: motive,
      category: "design",
      // Three links as requested
      figmaLink: "https://www.figma.com/design/9CSloWp4TQwWQPAauhJPv2/Motive?node-id=0-1&t=xTEXWQpC2ps2gDTZ-1",
      reportLink: "https://drive.google.com/file/d/1fZ_Q7W-_ihPmfiBVbr-y_dcFZEXer5zA/view?usp=sharing",
      prototypeLink: "https://www.figma.com/proto/9CSloWp4TQwWQPAauhJPv2/Motive?node id=1%3A10&scaling=min-zoom&page id=0%3A1&starting point node id=1%3A10",
      fullDescription: "Motive is a comprehensive mobile application designed to bridge the gap between people with disabilities and inclusive employment opportunities. The platform features dual interfaces for job seekers with disabilities and job providers seeking to create inclusive workplaces. Key features include voice assistance, disability-specific job filtering, document management, and communication tools between applicants and employers.",
      technologies: ["Figma", "Adobe Illustrator", "User Research", "Wireframing", "Prototyping", "Accessibility Design", "User Testing", "Design Systems"],
      projectStats: {
        category: "UI/UX Design Project",
        status: "Completed",
        teamSize: "Individual Project",
        duration: "2 Weeks",
        year: "2022",
        screens: "90+ Screens",
        platforms: "Android & iOS",
      },
      overviews: [
        {
          title: "Problem Statement & Design Challenge",
          content: "People with disabilities are often underestimated in their ability to live productive lives, despite having unique strengths and capabilities. Many employers want to provide inclusive opportunities but lack accessible platforms. Motive solves this by creating a dedicated job platform that considers specific conditions and abilities, making employment accessible for everyone."
        },
        {
          title: "Design Solution & Approach",
          content: "Developed dual interfaces for job seekers and providers with specialized features: 1) Voice assistance and screen reader compatibility, 2) Disability-specific job filtering, 3) Document management for certifications, 4) Real-time messaging between parties, 5) Accessibility-first design principles with high contrast and large touch targets."
        },
        {
          title: "Key Features & User Experience",
          content: "• Voice feature assistance for visually impaired users • Disability condition specification in profiles • Document upload system (ID, CV, certificates) • Job filtering by disability compatibility • Dual-role system (Job Seeker/Provider) • Real-time application tracking • Interview scheduling and messaging • Company profile management for providers"
        }
      ],
      results: [
        {
          type: "image",
          url: voice,
          caption: "Voice Feature Selection - Accessibility First Approach"
        },
        {
          type: "image",
          url: role,
          caption: "Role Selection - Job Seeker vs Job Provider Interfaces"
        },
        {
          type: "image",
          url: jsstart,
          caption: "Job Seeker - Get Start Interface"
        },
        {
          type: "image",
          url: jsregist,
          caption: "Job Seeker - Registration Form Page"
        },
        {
          type: "image",
          url: jsdetail,
          caption: "Job Seeker - Profile Setup with Disability Condition Specification"
        },
        {
          type: "image",
          url: jsdoc,
          caption: "Job Seeker - Upload Document"
        },
        {
          type: "image",
          url: jslogin,
          caption: "Job Seeker - Login Page"
        },
        {
          type: "image",
          url: jshome,
          caption: "Job Seeker - Home Page with Main Main Dashboard (Job Recomendations and Saved Jobs)"
        },
        {
          type: "image",
          url: jshomerecom,
          caption: "Job Seeker - Personalized Job Recommendations Page"
        },
        {
          type: "image",
          url: jssavedjob,
          caption: "Job Seeker - Saved Jobs Page"
        },
        {
          type: "image",
          url: jshistory,
          caption: "Job Seeker - Applied Job History Page"
        },
        {
          type: "image",
          url: jschat,
          caption: "Job Seeker - Chat Menu"
        },
        {
          type: "image",
          url: jsprofile,
          caption: "Job Seeker - User Profile Page"
        },
        {
          type: "image",
          url: jpstart,
          caption: "Job Provider - Get Start Interface"
        },
        {
          type: "image",
          url: jpregist,
          caption: "Job Provider - Account Registration Page"
        },
        {
          type: "image",
          url: jpcompform,
          caption: "Job Provider - Company Profile Detail Form"
        },
        {
          type: "image",
          url: jplisence,
          caption: "Job Provider - Upload Company Lisence"
        },
        {
          type: "image",
          url: jplogin,
          caption: "Job Provider - Login Form Page"
        },
        {
          type: "image",
          url: jphome,
          caption: "Job Provider Interface - Home Page with Uploaded Jobs List"
        },
        {
          type: "image",
          url: jpjobform,
          caption: "Job Provider - Form for Upload New Job"
        },
        {
          type: "image",
          url: jpjoblist,
          caption: "Job Provider - Applicants List Menu That Grouping by Job Vacancy"
        },
        {
          type: "image",
          url: jpappl,
          caption: "Job Provider - Applicants List per Job Vacancy"
        },
        {
          type: "image",
          url: jpchatlist,
          caption: "Job Provider - Chat Menu That Grouping by Job Vacancy"
        },
        {
          type: "image",
          url: jpchat,
          caption: "Job Provider - Chat List per Job Vacancy"
        },
        {
          type: "image",
          url: jpappl,
          caption: "Job Provider - Applicants List per Job Vacancy"
        },
        {
          type: "image",
          url: jpprofile,
          caption: "Job Provider - Company Profile Page"
        },
        {
          type: "metric",
          title: "Design System & Components",
          content: "• Typography: Lato & Inter fonts\n• Icons: Feather Icons library\n• Colors: #197582 (primary), #AFCFD3, #DEEBEC, #FEC570\n• Components: 50+ reusable UI components\n• Plugins: Blush for illustrations\n• Screen States: All interactive states designed"
        },
        {
          type: "metric",
          title: "User Interface Statistics",
          content: "• Total Screens: 90+ designed screens\n• User Flows: 15+ complete workflows\n• Design Components: 200+ elements\n• Interactive States: All button/form states\n• Platform Compatibility: Android & iOS responsive\n• Accessibility: WCAG 2.1 compliance achieved"
        }
      ]
    },
    {
      title: "Ramadhan di Kampus (RDK) 43 ITS",
      description: "Creative design for RDK 43 ITS events including posters and social media content for Manarul Ilmi Mosque Congregation's platforms during Ramadan activities.",
      imgUrl: rdklogo,
      category: "design",
      // Only Google Drive link for graphic projects
      gdriveLink: "https://drive.google.com/drive/folders/1M7cpzL2g60KM9PgNUytLfVna7E_oUBC1?usp=sharing",
      fullDescription: "As a Creative Design Staff for RDK 43 ITS, I was responsible for designing all promotional materials for Ramadan campus events. This included creating event posters, social media content, and visual materials for the Manarul Ilmi Mosque Congregation. The designs aimed to engage students in Ramadan activities while maintaining Islamic visual aesthetics.",
      technologies: ["Adobe Illustrator", "Graphic Design", "Social Media Content", "Visual Communication"],
      projectStats: {
        category: "Graphic Design",
        status: "Completed",
        teamSize: "Creative Design Team",
        duration: "Ramadan Month",
        year: "2022",
        institution: "Institut Teknologi Sepuluh Nopember",
        department: "Ramadhan di Kampus Committee",
        mosque: "Masjid Manarul Ilmi",
        tools: "Adobe Illustrator"
      },
      overviews: [
        {
          title: "Project Role & Responsibilities",
          content: "Served as Creative Design Staff for RDK 43 ITS committee. Responsibilities included designing all visual materials for Ramadan campus events, creating engaging social media content for JMMI (Jamaah Masjid Manarul Ilmi) platforms, and developing cohesive visual identity for the month-long activities."
        },
        {
          title: "Design Approach & Visual Strategy",
          content: "Created Islamic-inspired designs with modern aesthetics suitable for student audience. Used traditional Ramadan motifs combined with contemporary design elements. Maintained consistent color palette and typography across all materials for brand recognition. Designed for digital (social media) platforms."
        },
        {
          title: "Key Deliverables & Impact",
          content: "• Event posters for daily iftar gatherings and religious lectures • Social media graphics for daily Ramadan content • Instagram feed organization and content planning • Engagement-focused designs to increase student participation"
        }
      ],
      results: [
        {
          type: "image",
          url: rdkposter,
          caption: "Main RDK 43 ITS Event Poster - Religious Lectures Event Poster Design"
        },
        {
          type: "metric",
          title: "Design Output Statistics",
          content: "• Total Posters Designed: 15+ event posters\n• Social Media Graphics: 30+ daily content pieces\n• Platforms Covered: Instagram\n• Color Palette: Islamic colors (green, gold, white)\n• Typography: Arabic-inspired fonts with modern readability\n• File Formats: social media optimizations"
        }
      ]
    },
    {
      title: "HMIT General Elections Design",
      description: "Complete graphic design suite for Information Technology Student Association elections including live reports, election posters, candidate announcements, and social media content management.",
      imgUrl: hmitlogo,
      category: "design",
      // Only Google Drive link
      gdriveLink: "https://drive.google.com/drive/folders/1HlbkLmu50ICYaseyeVu_PP7NWXsrP1Nn?usp=drive_link",
      fullDescription: "As Staff of Publication, Documentation and Design for HMIT General Elections, I created the complete visual identity for the election process. This included designing all election materials, managing social media content, creating live reports, and organizing Instagram feeds to ensure transparent and engaging communication with the student body.",
      technologies: ["Adobe Illustrator", "Social Media Management", "Election Design", "Content Strategy", "Visual Documentation", "Instagram Feed Design"],
      projectStats: {
        category: "Election Graphic Design",
        status: "Completed",
        teamSize: "Publication & Design Team",
        duration: "Election Period",
        year: "2022",
        organization: "HMIT ITS",
        position: "Staff of Publication, Documentation and Design",
        commission: "General Election Commission",
        tools: "Adobe Illustrator"
      },
      overviews: [
        {
          title: "Election Design Responsibilities",
          content: "Responsible for all visual communication for HMIT General Elections. Created election posters with candidate information and requirements, designed live report templates for election updates, produced candidate announcement graphics, and managed all social media content containing election information for public notification."
        },
        {
          title: "Social Media Strategy & Management",
          content: "Organized and designed Instagram feeds for coherent election narrative. Created captions for all election content ensuring clear information dissemination. Managed content calendar for election phases. Designed templates for consistent election reporting across platforms."
        },
        {
          title: "Design System for Election Transparency",
          content: "Developed color-coded system for different election phases. Created templates for candidate profiles and election requirements. Designed infographics for election procedures and timelines. Maintained professional yet engaging visual style suitable for student elections."
        }
      ],
      results: [
        {
          type: "image",
          url: opreq,
          caption: "Open Recruitment for Head of HMIT Candidates Poster"
        },
        {
          type: "image",
          url: timeline,
          caption: "Election Timeline Poster"
        },
        {
          type: "image",
          url: inter,
          caption: "Internal Debate Poster"
        },
        {
          type: "image",
          url: dosen,
          caption: "Panelists Debate Poster"
        },
        {
          type: "image",
          url: blackout,
          caption: "Election Blackout Period Poster"
        },
        {
          type: "image",
          url: voteday,
          caption: "Vote D-Day Poster"
        },
        {
          type: "metric",
          title: "Design Deliverables",
          content: "• Election Posters: 10+ variations\n• Candidate Materials: All candidate profiles & announcements\n• Social Media Posts: 10+ election-related graphics\n• Instagram Feed: Coherent 9-grid organization\n• Documentation: Complete election visual record"
        }
      ]
    },
    {
      title: "BerkaIT - Ramadan Donation Project",
      description: "Chief Executive and designer for BerkaIT, a Ramadan donation project collecting and distributing aid to those in need, featuring promotional posters and campaign materials.",
      imgUrl: hmitlogo,
      category: "design",
      // Only Google Drive link
      gdriveLink: "https://drive.google.com/drive/folders/11lPRTk_HQdUE3BXEPVd1KxKuKrobSqCF",
      fullDescription: "As Chief Executive of the BerkaIT project for HMIT, I led and designed this Ramadan donation initiative. The project involved collecting donations during Ramadan and distributing them to those in need. My design responsibilities included creating the main campaign poster, promotional materials, and all visual communications to engage the student community in charitable giving.",
      technologies: ["Adobe Illustrator", "Campaign Design", "Charity Graphics", "Project Leadership", "Print Design"],
      projectStats: {
        category: "Charity Campaign Design",
        status: "Completed",
        teamSize: "Project Team Leader",
        duration: "Ramadan Month",
        year: "2022",
        organization: "HMIT ITS",
        role: "Chief Executive & Designer",
        project: "BerkaIT Donation Drive",
        tools: "Adobe Illustrator"
      },
      overviews: [
        {
          title: "Project Leadership & Design Role",
          content: "Served as Chief Executive for BerkaIT donation project while handling all design aspects. Combined project management with creative direction to ensure successful campaign execution. Designed materials that effectively communicated the charitable mission while encouraging student participation."
        },
        {
          title: "Campaign Visual Strategy",
          content: "Created heartwarming designs emphasizing Ramadan's charitable spirit. Used Islamic motifs combined with modern student-friendly aesthetics. Focused on trust-building visuals to encourage donations. Designed for both digital promotion."
        },
        {
          title: "Project Impact & Execution",
          content: "Successfully collected and distributed donations to identified beneficiaries. Created engaging design that increased participation rates. Established clear visual communication about donation procedures and impact. Designed materials that reflected HMIT's commitment to social responsibility."
        }
      ],
      results: [
        {
          type: "image",
          url: berkait,
          caption: "Main BerkaIT Campaign Poster - Ramadan Donation Drive"
        },
        {
          type: "metric",
          title: "Project Success Metrics",
          content: "• Campaign Reach: Entire ITS student community\n• Design Materials: Complete campaign kit\n• Donation Collection: Successful target achievement\n• Visual Consistency: Cohesive charity campaign identity\n• Student Engagement: High participation rates\n• Impact Documentation: Clear visual reporting"
        }
      ]
    },
    // Keep existing design projects if needed
  ];

  const websiteProjects = projects.filter(project => project.category === "website");
  const aiIotProjects = projects.filter(project => project.category === "ai-iot");
  const designProjects = projects.filter(project => project.category === "design");

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore my portfolio across different domains. From Web development to AI/IoT solutions and Designs, each project represents a unique challenge and learning experience.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">AI & IoT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Design</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <div className="project-list-container">
                        {websiteProjects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                            projectType="website"
                          />
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="project-list-container">
                        {aiIotProjects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                            projectType="ai-iot"
                          />
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="project-list-container">
                        {designProjects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                            projectType="design"
                          />
                        ))}
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}