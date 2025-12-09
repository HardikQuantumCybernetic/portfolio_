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
    doc.setTextColor(0, 102, 153);
    doc.text(text, pageWidth / 2, y, { align: 'center' });
    y += 10;
  };

  const addSection = (title: string) => {
    if (y > 260) {
      doc.addPage();
      y = 20;
    }
    y += 5;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 102, 153);
    doc.text(title, margin, y);
    doc.setDrawColor(0, 102, 153);
    doc.line(margin, y + 2, pageWidth - margin, y + 2);
    y += 8;
    doc.setTextColor(0, 0, 0);
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
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  doc.text('Full Stack Web Developer', pageWidth / 2, y, { align: 'center' });
  y += 8;

  // Contact Info
  doc.setFontSize(9);
  doc.text('📍 Sangli, Maharashtra, India 416416  |  📱 +91 80809 50921  |  📧 hardikjadhav307@gmail.com', pageWidth / 2, y, { align: 'center' });
  y += 5;
  doc.text('LinkedIn: linkedin.com/in/hardik-jadhav-500b48301  |  GitHub: github.com/HardikQuantumCybernetic', pageWidth / 2, y, { align: 'center' });
  y += 10;

  // Summary
  addSection('PROFESSIONAL SUMMARY');
  addText('Tech industry professional with solid grounding in both front-end and back-end development. Adept at creating responsive, user-friendly web applications using HTML, CSS, JavaScript, and Python. Strong collaborative skills, contributing effectively to team projects and problem-solving in fast-paced environments.');

  // Experience
  addSection('EXPERIENCE');
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
    'Engineered dentist website featuring hard-coded chatbot functionality.',
    'Acquired proficiency in HTML, CSS, JavaScript, PHP, and MySQL.',
    'Mastered Python, TypeScript, Bootstrap, and Tailwind frameworks for web development.',
    'Familiar with latest AI tools including Lovable, Bolt, GitCopilot, and emerging AI technologies.',
    'Designed and developed user-friendly website interfaces for improved user engagement.',
    'Developed secure login and authentication features to protect user data and privacy.',
    'Collaborated with team members to resolve complex software issues.',
    'Conducted code reviews to ensure adherence to industry standards.',
    'Optimised existing codebase for improved efficiency and speed.',
  ];
  experiences.forEach(exp => addBullet(exp));

  // Skills
  addSection('SKILLS');
  const skills = [
    'Frontend: HTML, CSS, JavaScript, React.js, TypeScript, Tailwind CSS, Bootstrap',
    'Backend: Node.js, Express.js, Python, PHP',
    'Database: MongoDB, PostgreSQL, MySQL',
    'DevOps: Docker, Git, CI/CD, Linux',
    'Cloud: AWS, Firebase, Vercel',
    'Other: Technical Liaison, UI Design, Code Optimization, AI Tool Integration, API Integration, Agile Methodologies'
  ];
  skills.forEach(skill => addBullet(skill));

  // Projects
  addSection('PROJECTS');
  const projects = [
    'Hardik Dental - Full-stack dental clinic management system with chatbot (secondlast.vercel.app)',
    'Kuber - Pure vegetarian restaurant website with menu and ordering features (kuberpureveg.netlify.app)',
    'Digital Studio Portfolio - Creative portfolio showcasing digital work (hardik-s-digital-studio.vercel.app)',
    'Amazon Clone - Login page clone implementation',
    'Netflix Clone - Login page clone implementation'
  ];
  projects.forEach(project => addBullet(project));

  // Education
  addSection('EDUCATION');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Diploma of Higher Education | Computer', margin, y);
  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('Vidyaniketan English School, Sangli', margin, y);
  y += 5;
  addBullet('Scored 81% in 10th');

  // Certifications
  addSection('CERTIFICATIONS');
  const certs = [
    'DevOps Certification - GeeksforGeeks',
    'Full Stack Web Development - GeeksforGeeks',
    'Artificial Intelligence - GeeksforGeeks',
    'Research Paper Publishing - IJRAR'
  ];
  certs.forEach(cert => addBullet(cert));

  // Languages
  addSection('LANGUAGES');
  addText('English (First Language), Hindi, Marathi');

  // Personal Information
  addSection('PERSONAL INFORMATION');
  addText('Date of Birth: 30/07/2006  |  Nationality: Indian  |  Gender: Male');

  // Hobbies
  addSection('HOBBIES & INTERESTS');
  addText('Dancing and Drawing');

  // Save the PDF
  doc.save('Hardik_Jadhav_Resume.pdf');
};
