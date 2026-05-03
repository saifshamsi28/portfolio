import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

import githubLogo from "@/assets/images/githublogo.png";
import gitLogo from "@/assets/images/gitlogo.png";
import hibernateLogo from "@/assets/images/hibernate.svg";
import intellijLogo from "@/assets/images/intellij.svg";
import androidStudioLogo from "@/assets/images/android-studio.svg";
import javaLogo from "@/assets/images/javalogo.png";
import jsLogo from "@/assets/images/jslogo.png";
import jwtLogo from "@/assets/images/jwt.svg";
import kafkaLogo from "@/assets/images/kafka.svg";
import mavenLogo from "@/assets/images/maven.svg";
import mongoLogo from "@/assets/images/mongologo.png";
import mysqlLogo from "@/assets/images/mysqllogo.png";
import postgresqlLogo from "@/assets/images/postgresql.svg";
import postmanLogo from "@/assets/images/postman.svg";
import pythonLogo from "@/assets/images/pythonlogo.png";
import redisLogo from "@/assets/images/redis.svg";
import springBootLogo from "@/assets/images/spring-boot.svg";
import springCloudLogo from "@/assets/images/spring-cloud.svg";
import springDataLogo from "@/assets/images/spring-data.svg";
import springSecurityLogo from "@/assets/images/spring-security.svg";
import vsLogo from "@/assets/images/vslogo.png";
import dockerLogo from "@/assets/images/docker.svg";
import cLogo from "@/assets/images/clogo.png";
import cppLogo from "@/assets/images/cplusplus.svg";

export default function Skills() {
  const skills = {
    "Core Languages": [
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
    ],
    "Java Backend": [
      { name: "Spring Boot", logo: springBootLogo },
      { name: "Spring Security", logo: springSecurityLogo },
      { name: "Spring Data JPA", logo: springDataLogo },
      { name: "Hibernate", logo: hibernateLogo },
      { name: "Spring Cloud", logo: springCloudLogo },
      { name: "JWT Authentication", logo: jwtLogo },
    ],
    "Data, Caching & Messaging": [
      { name: "PostgreSQL", logo: postgresqlLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongoLogo },
      { name: "Redis", logo: redisLogo },
      { name: "Apache Kafka", logo: kafkaLogo },
    ],
    "Tools & Workflow": [
      { name: "Maven", logo: mavenLogo },
      { name: "Docker", logo: dockerLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "IntelliJ IDEA", logo: intellijLogo },
      { name: "Android Studio", logo: androidStudioLogo },
      { name: "VS Code", logo: vsLogo },
    ],
  };

  return (
    <section id="skills" className="py-24 relative">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 rounded-3xl"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 20, repeat: Infinity }}
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
            <span className="text-sm font-medium">Technical Expertise</span>
          </motion.div>
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            Skills & 
            <motion.span 
              className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {" "}Technologies
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.18 }}
          >
            Java backend-focused stack centered around Spring ecosystem architecture, secure APIs, databases, caching, and production tooling.
          </motion.p>
        </motion.div>
        
        <div className="grid gap-6 lg:grid-cols-2">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold flex items-center gap-3">
                    <motion.div 
                      className="w-2 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-full"
                      animate={{ height: [32, 40, 32] }}
                      transition={{ duration: 2, repeat: Infinity, delay: categoryIndex * 0.5 }}
                    />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {items.map((skill, index) => (
                      <motion.div 
                        key={skill.name} 
                        className="group/skill flex flex-col items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.25, 
                          delay: (categoryIndex * 0.1) + (index * 0.03),
                          type: "spring",
                          stiffness: 300 
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          y: -5,
                          transition: { type: "spring", stiffness: 400 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="relative">
                          <motion.div 
                            className="w-12 h-12 rounded-xl bg-background border border-border/50 p-2 flex items-center justify-center group-hover/skill:border-primary/30 group-hover/skill:bg-primary/5 transition-all duration-300"
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <motion.img 
                              src={skill.logo} 
                              alt={`${skill.name} logo`} 
                              className="max-h-full max-w-full object-contain"
                              whileHover={{ scale: 1.1 }}
                            />
                          </motion.div>
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          />
                        </div>
                        <motion.span 
                          className="text-xs font-medium text-center leading-tight group-hover/skill:text-primary transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill.name}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}