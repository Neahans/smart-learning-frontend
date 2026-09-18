export const users = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
    name: "Admin User",
    role: "Admin",
    email: "admin@smartlearning.com",
  },
  {
    id: 2,
    username: "mentor",
    password: "mentor123",
    name: "Neethu ",
    role: "Mentor",
    email: "neethu@smartlearning.com",
  },
  {
    id: 3,
    username: "student",
    password: "student123",
    name: "Neaha",
    role: "Student",
    email: "neaha@smartlearning.com",
  },
];

export const courses = [
  {
    id: 1,
    title: "Python Programming",
    description:
      "Learn Python from basics to object-oriented programming.",
    instructor: "Neethu",
    category: "Programming",
    level: "Beginner",
    modules: 8,
    students: 45,
    progress: 75,
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "React Development",
    description:
      "Build modern and responsive interfaces using React.",
    instructor: "Meera Joseph",
    category: "Web Development",
    level: "Intermediate",
    modules: 10,
    students: 38,
    progress: 60,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Django Web Development",
    description:
      "Create powerful web applications using Django and REST APIs.",
    instructor: "Rahul Menon",
    category: "Web Development",
    level: "Intermediate",
    modules: 9,
    students: 32,
    progress: 45,
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Cybersecurity Fundamentals",
    description:
      "Understand security concepts, threats, vulnerabilities and protection.",
    instructor: "Anu Thomas",
    category: "Cybersecurity",
    level: "Beginner",
    modules: 7,
    students: 28,
    progress: 30,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Artificial Intelligence",
    description:
      "Explore machine learning, neural networks and AI fundamentals.",
    instructor: "Vishnu Raj",
    category: "AI & ML",
    level: "Advanced",
    modules: 12,
    students: 24,
    progress: 20,
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Database Management",
    description:
      "Learn SQL, relational databases and database design.",
    instructor: "Sreya Nair",
    category: "Database",
    level: "Beginner",
    modules: 6,
    students: 36,
    progress: 50,
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
  },
];

export const modules = [
  {
    id: 1,
    courseId: 1,
    title: "Python Basics",
    description: "Variables, data types, operators and basic syntax.",
    order: 1,
    unlocked: true,
  },
  {
    id: 2,
    courseId: 1,
    title: "Conditions and Loops",
    description: "Learn if statements, for loops and while loops.",
    order: 2,
    unlocked: true,
  },
  {
    id: 3,
    courseId: 1,
    title: "Functions",
    description: "Create reusable blocks of code using functions.",
    order: 3,
    unlocked: false,
  },
  {
    id: 4,
    courseId: 1,
    title: "Object Oriented Programming",
    description: "Classes, objects, inheritance and encapsulation.",
    order: 4,
    unlocked: false,
  },

  {
    id: 5,
    courseId: 2,
    title: "Introduction to React",
    description: "Components, JSX and the React development model.",
    order: 1,
    unlocked: true,
  },
  {
    id: 6,
    courseId: 2,
    title: "Props and State",
    description: "Understand component communication and state.",
    order: 2,
    unlocked: true,
  },
  {
    id: 7,
    courseId: 2,
    title: "React Hooks",
    description: "Learn useState, useEffect and reusable hooks.",
    order: 3,
    unlocked: false,
  },

  {
    id: 8,
    courseId: 3,
    title: "Django Basics",
    description: "Projects, apps, URLs, views and templates.",
    order: 1,
    unlocked: true,
  },
  {
    id: 9,
    courseId: 3,
    title: "Models and Database",
    description: "Build models and work with Django ORM.",
    order: 2,
    unlocked: false,
  },

  {
    id: 10,
    courseId: 4,
    title: "Security Fundamentals",
    description: "Basic concepts of threats, vulnerabilities and attacks.",
    order: 1,
    unlocked: true,
  },
  {
    id: 11,
    courseId: 4,
    title: "Network Security",
    description: "Learn the fundamentals of securing networks.",
    order: 2,
    unlocked: false,
  },
];

export const notes = [
  {
    id: 1,
    moduleId: 1,
    title: "Python Variables",
    content:
      "Variables are names used to store data values in Python. Python supports dynamic typing.",
  },
  {
    id: 2,
    moduleId: 1,
    title: "Python Data Types",
    content:
      "Common Python data types include string, integer, float, list, tuple, set and dictionary.",
  },
  {
    id: 3,
    moduleId: 2,
    title: "Conditional Statements",
    content:
      "Python uses if, elif and else statements to make decisions based on conditions.",
  },
  {
    id: 4,
    moduleId: 2,
    title: "Loops",
    content:
      "The for loop and while loop allow repeated execution of a block of code.",
  },
  {
    id: 5,
    moduleId: 5,
    title: "React Components",
    content:
      "Components are reusable pieces of UI that can receive data through props.",
  },
];