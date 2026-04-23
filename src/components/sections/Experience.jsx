import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";


export default function Experience() {
  const experiences = [
    {
      company: "Freelance Client Project",
      position: "Full-Stack Engineer (Contract)",
      location: "Remote",
      period: "2025 - Present",
      description: [
        "Delivered Belgium Bags (www.belgiumbags.com) end-to-end with customer web app, admin panel, and production backend APIs.",
        "Implemented customer features: category exploration, search, wishlist, cart, coupon handling, address management, and checkout.",
        "Built profile and order modules with pagination, order-progress tracker, return-tracker flow, and invoice download.",
        "Implemented secure payments with Razorpay, signature verification, and webhook handling for capture/failure/refund states.",
        "Built admin workflows for products, categories, orders, returns, payments, and advanced coupon controls with usage limits.",
        "Implemented OTP verification and password-reset email workflows, plus order lifecycle notifications with deep links and review CTA.",
      ],
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Spring Boot",
        "PostgreSQL",
        "Flyway",
        "Razorpay",
        "Cloudinary",
      ],
      current: true,
    },
    {
      company: "Independent Engineering Projects",
      position: "Backend Engineer",
      location: "Hyderabad, Telangana",
      period: "2025 - Present",
      description: [
        "Architected microservices systems using Spring Boot and Spring Cloud components (Eureka, Config Server, API Gateway).",
        "Implemented event-driven communication with Apache Kafka across distributed service boundaries.",
        "Designed secure REST APIs with JWT-based authentication, request validation, and robust service layering.",
        "Optimized data access and caching patterns across PostgreSQL, MongoDB, and Redis for better performance.",
      ],
      skills: [
        "Java",
        "Spring Boot",
        "Spring Cloud",
        "Apache Kafka",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Docker",
      ],
      current: false,
    },
    {
      company: "JobNet Platform",
      position: "Full-Stack & Android Developer",
      location: "Hyderabad, Telangana",
      period: "Nov 2024 - Jan 2025",
      description: [
        "Built Spring Boot backend services for job listings with optimized MongoDB query paths.",
        "Developed Flask-based scraping pipeline to aggregate jobs from Naukri and Indeed with JWT-secured access.",
        "Integrated Room DB in Android client to reduce redundant API calls and improve app responsiveness.",
        "Implemented resume parsing and skills-driven recommendation flow for smarter job matching.",
      ],
      skills: [
        "Java",
        "Spring Boot",
        "MongoDB",
        "Python",
        "Flask",
        "JWT",
        "Android",
        "Room DB",
        "JavaScript",
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-primary/5 rounded-3xl"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 30, repeat: Infinity }}
        style={{ backgroundSize: "200% 200%" }}
      />
      
      <motion.div 
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.45 }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-medium">Career Journey</span>
          </motion.div>
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            Professional 
            <motion.span 
              className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {" "}Experience
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.18 }}
          >
            A focused journey across freelance and independent builds, delivering secure backend systems and production-ready products.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ x: 10 }}
            >
              <Card className={`group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 ${
                exp.current ? 'ring-2 ring-primary/30' : ''
              }`}>
                {/* Animated timeline line */}
                <motion.div 
                  className="absolute left-6 top-0 bottom-0 w-px bg-border/30"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <motion.div 
                    className="absolute top-8 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.24 + index * 0.06, type: "spring" }}
                  >
                    <motion.div 
                      className={`w-3 h-3 rounded-full border-2 ${
                        exp.current 
                          ? 'bg-primary border-primary shadow-lg shadow-primary/30' 
                          : 'bg-background border-border'
                      }`}
                      animate={exp.current ? { 
                        scale: [1, 1.2, 1],
                        boxShadow: ["0 0 0 0 rgba(var(--primary), 0.7)", "0 0 0 10px rgba(var(--primary), 0)", "0 0 0 0 rgba(var(--primary), 0)"]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </motion.div>

                {exp.current && (
                  <motion.div 
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.24, type: "spring" }}
                  >
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                      <motion.div 
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-xs font-medium text-green-600 dark:text-green-400">Current</span>
                    </div>
                  </motion.div>
                )}

                <CardHeader className="pl-16 pb-4">
                  <motion.div 
                    className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.16 + index * 0.06 }}
                  >
                    <div className="space-y-2">
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                          {exp.position}
                        </CardTitle>
                      </motion.div>
                      <div className="space-y-1">
                        <CardDescription className="text-base font-medium">
                          {exp.company}
                        </CardDescription>
                        <CardDescription className="text-sm">
                          📍 {exp.location}
                        </CardDescription>
                      </div>
                    </div>
                    <motion.div 
                      className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-sm font-medium text-primary">{exp.period}</span>
                    </motion.div>
                  </motion.div>
                </CardHeader>
                
                <CardContent className="pl-16 space-y-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.06 }}
                  >
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <motion.div 
                        className="w-1 h-4 bg-primary rounded-full"
                        animate={{ height: [16, 20, 16] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                      Key Accomplishments
                    </h4>
                    <ul className="space-y-3">
                      {exp.description.map((item, idx) => (
                        <motion.li 
                          key={idx} 
                          className="text-sm text-muted-foreground flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.24 + index * 0.06 + idx * 0.06 }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                          />
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.28 + index * 0.06 }}
                  >
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <motion.div 
                        className="w-1 h-4 bg-blue-500 rounded-full"
                        animate={{ height: [16, 20, 16] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 + 0.5 }}
                      />
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.06 + skillIndex * 0.03 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs hover:bg-primary/10 hover:border-primary/30 transition-colors duration-200"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
