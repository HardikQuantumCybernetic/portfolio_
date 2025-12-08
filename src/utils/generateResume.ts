export const generateResumePDF = () => {
  const resumeContent = `
HARDIK JADHAV
Web Developer & Cybertechnology Enthusiast

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT
━━━━━━
📧 Email: hardikjadhav307@gmail.com
📱 Phone: +91 80809 50921
📍 Location: Sangli, Maharashtra, India
💼 LinkedIn: linkedin.com/in/hardik-jadhav-500b48301
🐙 GitHub: github.com/HardikQuantumCybernetic

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROFESSIONAL SUMMARY
━━━━━━━━━━━━━━━━━━━
I design secure, efficient web apps and system tools. Available for 
international freelance contracts and remote collaboration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SKILLS
━━━━━━
Frontend:     HTML, CSS, JavaScript, React.js, TypeScript, Tailwind CSS
Backend:      Node.js, Express.js, Python
Database:     MongoDB, PostgreSQL, MySQL
DevOps:       Docker, Git, CI/CD, Linux
Cloud:        AWS, Firebase, Vercel
Other:        API Development, System Design, Cybersecurity

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROJECTS
━━━━━━━━

1. Hardik Dental - Dental Clinic Management App
   • Full-stack dental clinic management system
   • Live: secondlast.vercel.app
   • GitHub: github.com/HardikQuantumCybernetic/hardik-dental

2. Kuber - Pure Veg Restaurant Website
   • Restaurant website with menu and ordering features
   • Live: kuberpureveg.netlify.app
   • GitHub: github.com/HardikQuantumCybernetic/kuber

3. Digital Studio Portfolio
   • Creative portfolio showcasing digital work
   • Live: hardik-s-digital-studio.vercel.app
   • GitHub: github.com/HardikQuantumCybernetic/portfolio_

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CERTIFICATIONS
━━━━━━━━━━━━━━
• DevOps Certification - GeeksforGeeks
• Full Stack Web Development - GeeksforGeeks
• Artificial Intelligence - GeeksforGeeks
• Research Paper Publishing - IJRAR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SERVICES
━━━━━━━━
• Website Development - $5 USD per page
• Custom responsive websites
• Advertisement websites
• Database integration
• E-commerce, portfolios, blogs, dashboards

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AVAILABILITY
━━━━━━━━━━━━
Currently available for:
• Freelance projects
• Contract work
• Full-time remote opportunities

Available worldwide for international collaboration.
`;

  // Create a Blob with the text content
  const blob = new Blob([resumeContent], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  
  // Create download link
  const link = document.createElement("a");
  link.href = url;
  link.download = "Hardik_Jadhav_Resume.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
