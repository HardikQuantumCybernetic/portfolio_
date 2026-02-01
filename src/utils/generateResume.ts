import { jsPDF } from 'jspdf';

export const generateResumePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = 20;

  // Helper functions
  const addTitle = (text: string) => {
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 102, 102);
    doc.text(text, pageWidth / 2, y, { align: 'center' });
    y += 10;
  };

  const addSection = (title: string) => {
    if (y > 255) {
      doc.addPage();
      y = 20;
    }
    y += 6;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 102, 102);
    doc.text(title, margin, y);
    doc.setDrawColor(0, 102, 102);
    doc.line(margin, y + 2, pageWidth - margin, y + 2);
    y += 8;
    doc.setTextColor(40, 40, 40);
    doc.setFont('helvetica', 'normal');
  };

  const addText = (text: string, indent = 0) => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
    doc.setFontSize(10);
    const lines = doc.splitTextToSize(text, contentWidth - indent);
    doc.text(lines, margin + indent, y);
    y += lines.length * 5;
  };

  const addBullet = (text: string) => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
    doc.setFontSize(10);
    doc.text('•', margin, y);
    const lines = doc.splitTextToSize(text, contentWidth - 8);
    doc.text(lines, margin + 8, y);
    y += lines.length * 5;
  };

  // Header
  addTitle('HARDIK JADHAV');
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  doc.text('Full Stack Web Developer | Cybertechnology Enthusiast', pageWidth / 2, y, { align: 'center' });
  y += 8;

  // Contact Info
  doc.setFontSize(9);
  doc.text('Sangli, Maharashtra, India 416416 | +91 80809 50921 | hardikjadhav307@gmail.com', pageWidth / 2, y, { align: 'center' });
  y += 5;
  doc.setTextColor(0, 102, 102);
  doc.text('LinkedIn: linkedin.com/in/hardik-jadhav-500b48301 | GitHub: github.com/HardikQuantumCybernetic', pageWidth / 2, y, { align: 'center' });
  y += 5;
  doc.text('Portfolio: hardik-jadhav-portfolio.lovable.app', pageWidth / 2, y, { align: 'center' });
  y += 8;
  doc.setTextColor(40, 40, 40);

  // Summary
  addSection('PROFESSIONAL SUMMARY');
  addText('Passionate Full Stack Developer with solid grounding in front-end and back-end development. Skilled in creating responsive, user-friendly web applications using modern technologies including React, TypeScript, and Node.js. Strong problem-solving abilities with experience in AI tool integration and cybersecurity fundamentals. Available for international freelance contracts and remote collaboration.');

  // Skills
  addSection('TECHNICAL SKILLS');
  const skillCategories = [
    'Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, TypeScript, Tailwind CSS, Bootstrap, Framer Motion',
    'Backend: Node.js, Express.js, Python, PHP',
    'Database: MongoDB, PostgreSQL, MySQL, Supabase',
    'DevOps & Tools: Docker, Git, GitHub, CI/CD, Linux, Vercel, Netlify',
    'Cloud Platforms: AWS, Firebase, Supabase',
    'AI & Tools: Lovable, Bolt, GitHub Copilot, ChatGPT integration',
    'Other: RESTful APIs, Responsive Design, UI/UX Principles, Agile Methodologies'
  ];
  skillCategories.forEach(skill => addBullet(skill));

  // Experience
  addSection('PROFESSIONAL EXPERIENCE');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Full Stack Web Developer Intern', margin, y);
  y += 5;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(10);
  doc.text('Swara Software Solution, Sangli, India | June 2025 - August 2025', margin, y);
  y += 6;
  doc.setFont('helvetica', 'normal');
  
  const experiences = [
    'Developed full-stack dental clinic management system with integrated chatbot functionality',
    'Built responsive web interfaces using React, TypeScript, and Tailwind CSS',
    'Implemented secure authentication and user management systems',
    'Collaborated with team members on code reviews and best practices',
    'Optimized application performance and improved page load times by 40%',
    'Integrated AI tools for enhanced development workflow efficiency'
  ];
  experiences.forEach(exp => addBullet(exp));

  // Projects
  addSection('KEY PROJECTS');
  const projects = [
    'Hardik Dental - Full-stack dental clinic management system with appointment booking, patient records, and AI chatbot. Tech: React, TypeScript, Tailwind CSS. Live: secondlast.vercel.app',
    'Kuber Restaurant - Modern restaurant website with menu management and ordering system. Tech: HTML, CSS, JavaScript. Live: kuberpureveg.netlify.app',
    'Digital Studio Portfolio - Creative portfolio showcasing web development projects with animations. Tech: React, Framer Motion. Live: hardik-s-digital-studio.vercel.app',
    'Personal Portfolio - Interactive developer portfolio with 3D elements, theme switching, and multi-language support. Tech: React, Three.js, TypeScript'
  ];
  projects.forEach(project => addBullet(project));

  // Education
  addSection('EDUCATION');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Diploma in Computer Science', margin, y);
  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('Vidyaniketan English School, Sangli | Completed with 81% marks', margin, y);
  y += 6;

  // Certifications
  addSection('CERTIFICATIONS');
  const certs = [
    'DevOps Fundamentals - GeeksforGeeks',
    'Full Stack Web Development - GeeksforGeeks', 
    'Artificial Intelligence Fundamentals - GeeksforGeeks',
    'Git Version Control - GeeksforGeeks',
    'Research Paper Publishing - International Journal of Research and Analytical Reviews (IJRAR)'
  ];
  certs.forEach(cert => addBullet(cert));

  // Research Publication
  addSection('RESEARCH PUBLICATION');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('A Brief Overview on Ethical Hacking, its Attacks and Hardware Tools with Web Penetration Testing', margin, y);
  y += 5;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(10);
  doc.text('Published in IJRAR - International Journal of Research and Analytical Reviews', margin, y);
  y += 6;
  doc.setFont('helvetica', 'normal');
  const researchDetails = [
    'Comprehensive research paper covering ethical hacking methodologies, attack vectors, and defense mechanisms',
    'Analyzed hardware tools used in penetration testing and security assessments',
    'Explored web penetration testing techniques and best practices for secure application development',
    'Contributed to cybersecurity knowledge base with peer-reviewed publication'
  ];
  researchDetails.forEach(detail => addBullet(detail));

  // Languages
  addSection('LANGUAGES');
  addText('English (Fluent) | Hindi (Native) | Marathi (Native)');

  // Additional Info
  addSection('ADDITIONAL INFORMATION');
  addText('Date of Birth: July 30, 2006 | Nationality: Indian');
  addText('Interests: Technology, Dancing, Drawing, Open Source Contribution');
  y += 3;
  addText('Available for remote work and international freelance opportunities');

  // Save the PDF
  doc.save('Hardik_Jadhav_Resume.pdf');
};