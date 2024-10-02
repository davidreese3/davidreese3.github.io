/* define your array of object literals here */
var job6 = new Job("The University of Scranton Computing Sciences Department","Graduate Teaching Assistant","Scranton, PA","August 2023 - Present",
    ["Teach and facilitate Computer Science labs to undergraduate students",
    "Assist students with material and assignments from undergraduate computer science lectures",
    "Collaborate with faculty to teach undergraduate lectures, proctor tests, and facilitate drop-in tutoring",
    "Oversee computer science colloquia meetings by recording sessions and coordinating grading among GTAs"],
);    

var job5 = new Job("Susquehanna International Group (SIG)","Operations Analyst Intern","Bala Cynwyd, PA","June 2023 - August 2023",
    ["Collaborated with various desks throughout the firm to automate daily processes via Python, SQL, and VBA",
    "Created a VBA program to retrieve and organize data from Excel files and databases from specified input",
    "Studied options trading, firm-related technology, and operations team functions in company-led classes"],
);

var job4 = new Job("The University of Scranton Student Government","Chief of Staff","Scranton, PA","May 2022 - May 2023",
    ["Oversaw and mentored Senior staff and advised the President and Vice President",
    "Served as Parliamentarian, Election Commissioner, and Student Representative for the Board of Trustees"],
);

var job3 = new Job("The University of Scranton Center for Student Engagement","Orientation Team Leader","Scranton, PA","October 2021 - October 2022",
    ["Interviewed, hired, trained, and managed a team of 60 Orientation Assistants",
    "Oversaw the Orientation and Fall-Move in programs with an incoming class of 1100 First-Year students"],
);

var job2 = new Job("The University of Scranton Center for Teaching and Learning Excellence","Tutor for Computer Science I & II, Discrete Structures, Calculus I",
    "Scranton, PA","September 2021 - May 2022",
    ["Facilitated individual and group sessions to expanded upon material students learned in class",
    "Guided peers in navigating assignments and preparing for exams"],
);

var job1 = new Job("Self-Employed Tutor","Tutor for Computer Science II","Lebanon, NJ","November 2021 - February 2022",
    ["Created a 10-week lesson plan for Computer Science II students","Prepared students for their upcoming class with homework and quizzes"],
);

var jobs = [job6,job5,job4,job3,job2,job1]

var FR1 = new Class("Introduction to Computing and Information Technology","This course presents foundational concepts and surveys the past, present and future of computing and information technology with an emphasis on the seminal ideas, concepts, inventions and innovations that fuel the Digital Revolution.  The sub-disciplines of computing are identified and discussed relative to each other.  This course is designed to foster knowledge and abilities needed for gathering, evaluating and disseminating information with an emphasis on digital technology and oral communication.");
var FR2 = new Class("Computer Science I","An introduction to programming concepts and methodology using an object-oriented programming language (currently Java).  Topics include problem analysis, abstraction, modularization, the development and use of algorithms, reuse, and the use of programming constructs including data types, classes, control structures, and methods.");
var FR3 = new Class("Computer Science II","This course emphasizes object-oriented software development, addressing both software engineering and programming.  Topics include modularization, abstraction, encapsulation/information hiding, software reuse, software testing, classic data abstractions (e.g., lists, trees) and algorithms (e.g., sorting, searching), recursion, program correctness, and basic algorithm analysis.");

var freshmanClasses = [FR1,FR2,FR3]

var SO1 = new Class("Data Structures and Algorithms","An examination of the issues of data representation, algorithm structure, and encapsulation as they pertain to the development of object-oriented software.  Abstract data types studied include stacks, queues, binary trees, n-ary trees, and graphs. Various representation alternatives are analyzed and compared, trade-offs frequently encountered by software developers are discussed.");
var SO2 = new Class("Machine Organization & Assembly Language Programming","An introductory study of the organization and architecture of computers through an exploration of various virtual machines. Programming at the assembly-language level and interfacing with software components (primarily written in C). Topics include representation of data and instructions, computer arithmetic, memory hierarchies, instruction sets, addressing modes, digital logic, microprogramming, pipelining, and parallel processing.");
var SO3 = new Class("Theoretical Foundation of Computer Science","An examination of the fundamental models and concepts of computation - automata, formal languages, and grammars - and how they are related.  Church-Turing thesis; recursive and recursively enumerable sets; unsolvable problems; complexity of algorithms; Chomsky hierarchy.","Java");

var sophomoreClasses = [SO1,SO2,SO3]

var JR1 = new Class("Introduction to Database","File structures concepts and file processing applications.  Topics include file maintenance and storage management; file searching, sorting, and merging; co-sequential processing; index structures; B-trees; hash tables; indexed sequential files; database concepts.","PostgreSQL, Java")
var JR2 = new Class("Programming Languages","A study of programming languages from both the theoretical and practical perspectives.  A survey of major and developing paradigms and languages is undertaken which includes use of specific languages to broaden the student's experience.  Implementation is studied through an introduction to language translation along with a study of run-time models and interfaces with virtual machines.")
var JR3 = new Class("Computer Architecture","A study of the logical structure of computer-system organization including a survey of logic and design with an emphasis on functional components.  Topics include instruction sets, hard-wired and microprogrammed control-unit designs, memory systems (caches and virtual memory), I/O systems (interrupts, DMA, and channels).  Overview and examples of alternative and advanced computer architectures (pipeline, array processors, multiprocessors).")
var JR4 = new Class("Operating Systems","An introduction to the principles of operating systems.  Topics include operating system structure, process management, scheduling and dispatching, process synchronization and interprocess communication, memory management, virtual memory, device management, I/O, and file systems.")
var JR5 = new Class("Artificial Intelligence","Problem solving using expert systems, heuristic programming techniques, tree speed-up techniques, and learning mechanisms.")
var JR6 = new Class("Web Programming","This course covers all aspects of programming on the World Wide Web.  This includes the presentation of HTML, Java, JavaScript and CGI.  Topics include advanced HTML (maps, forms, etc.) client-server programming basics as they relate to the Web, Java machine concepts, Java/JavaScript similarities and differences, server-side programming, GIF animations, Web programming resources and environments.")

var juniorClasses = [JR1,JR2,JR3,JR4,JR5,JR6]
    
var SR1 = new Class("Intro to Software Development","This course serves as an introduction to the discipline of Software Engineering, involving both a study of theory and practice. Significant ideas and developments are emphasized along with an examination of terminologies, classifications, paradigms, and methodologies. The course also provides an opportunity to review essential computer science material (data structures, programming languages and environments, systems, and architectures) as appropriate within this context.");
var SR2 = new Class("Math for Software Engineering","This course introduces students to the formal mathematical tools and methods necessary for software engineering. Topics include equational logic, propositional calculus and its applications, techniques of proof, formal logic, quantification and predicate calculus, application of predicate calculus to programming, and mathematical induction.");
var SR3 = new Class("Principles and Applications of Software Design","This course is concerned with the application of mathematical techniques and models to the problem of software development. Of particular concern are means by which to develop provably correct programs.");
var SR4 = new Class("Formal Methods and Models","This course is concerned with the application of mathematical techniques and models to the problem of software development. Of particular concern are means by which to develop provably correct programs.")
var SR5 = new Class("Database Systems","A study of both theoretical and practical aspects of database systems with an emphasis on relational database systems. Topics include DBMS architectures, entity-relationship and UML data modeling, relational data modeling, database design using entity-relationship data models, relational algebra and Structured Query Language (SQL), functional dependencies and normal forms, system catalogs, transaction processing, concurrency control, and selected advanced topics.")
var SR6 = new Class("Introduction to Big Data Systems","This course covers interesting modern data problems (e.g. analytics, machine learning, IoT) and how they require storage and processing power beyond what a single machine can provide. This course introduces the core design concepts underlying such scalable, reliable systems and provides students with hands-on experience using industry-standard, open-source platforms to process large-scale, real-world datasets.")
var SR7 = new Class("Capstone Project","In this course, students prepare and present individual computer projects to be evaluated by the instructor and their fellow students.")

var seniorClasses = [SR1,SR2,SR3,SR4,SR5,SR6,SR7]

var GR1 = new Class("Engineering of Software Systems","There is a parallel between hardware system engineering and software systems engineering. Several issues are relevant to both and in many cases they interact with each other. Topics include: system requirements gathering and specification, system design, interfaces with hardware and software systems, human-computer interfaces, system testing and integration, documentation, quality assurance, and configuration management.")
var GR2 = new Class("Software Security","This course covers the principles and patterns of secure software development with an emphasis on concepts, requirements, design, implementation and testing. Other topics may include lifecycle management, deployment, operation and maintenance, and supply chain and software acquisition as applied to secure software systems.")
var GR3 = new Class("Requirements Analysis and Software Specification","Exploration of two inter-related subjects of software life-cycle-process; requirements and their specifications. Topics: Requirements analysis techniques, interview process, prototypes, types of requirements (functional, nonfunctional, reliability, quality, security, etc.), traceability, languages of specification (axiomatic, algebraic, finite state machine, abstract, operational, concurrency)")
var GR4 = new Class("Software Project Management","Software system development; project development; budget and human factors. Relationship between quality assurance, communication management and project documentation. Ethical and security issues.")
var GR5 = new Class("Project Analysis & Design/Project Implementation and Evaluation","A two-semester sequence in which students are expected to undertake a software thesis project which requires the use of tools, techniques and theory learned from previous courses. It will be strongly recommended that thesis projects be developed in teams.")

var gradClasses = [GR1,GR2,GR3,GR4,GR5]