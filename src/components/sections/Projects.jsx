import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import belgiumBagsHomepageImg from "@/assets/images/belgiumbags-homepage.png";
import fitnessTrackerPreviewImg from "@/assets/images/fitness-tracker-mobile-collage.png";
import jobnetAcademicImg from "@/assets/images/jobnet-mobile-collage.png";
import mediconnectImg from "@/assets/images/mediconnect-github.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Belgium Bags: Production-Grade E-commerce Platform",
      description:
        "Live freelance delivery (www.belgiumbags.com): complete customer storefront, admin dashboard, and secure Spring Boot backend powering real-world commerce workflows.",
      image: belgiumBagsHomepageImg,
      link: "https://www.belgiumbags.com",
      github: "https://github.com/saifshamsi28",
      featured: true,
      showAllFeatures: true,
      features: [
        "Developed customer-side web app with category browsing, search, wishlist, cart, coupon apply/check, and secure checkout.",
        "Built profile, paginated orders page, order details with progress tracking, return-tracker flow, and invoice download.",
        "Implemented full address management and smooth checkout UX with Razorpay payment gateway integration.",
        "Added payment signature verification, plus webhook processing for payment captured/failed and refund processed/failed events.",
        "Built admin dashboard modules for products, categories, orders, order details, returns, return details, payments, and coupons.",
        "Implemented coupon controls: code name, flat or percentage discount type, expiry date, total max usage, and per-user limits.",
        "Created admin product/category create flows with multi-variant product support for catalog operations.",
        "Implemented OTP account verification emails from noreply@auth.belgiumbags.com; login blocked until verification is completed.",
        "Implemented OTP-based password reset workflow and transactional order emails from updates@orders.belgiumbags.com.",
        "Delivered shipped/delivered email notifications with direct order link (belgiumbags.com/orders/{id}) and post-delivery review CTA (belgiumbags.com/product/{id}).",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Spring Boot",
        "PostgreSQL",
        "Redis",
        "Flyway",
        "JWT",
        "Razorpay",
        "Cloudinary",
      ],
    },
    {
      title: "Fitness App: Microservices Architecture",
      description:
        "Scalable Spring Boot microservices backend with centralized config, service discovery, API gateway, and event-driven processing.",
      image: fitnessTrackerPreviewImg,
      imageClassName: "object-contain object-top p-3 bg-slate-950",
      link: "https://github.com/saifshamsi28/fitness-microservices",
      github: "https://github.com/saifshamsi28/fitness-microservices",
      featured: true,
      features: [
        "Implemented Spring Cloud components: Eureka, Config Server, and API Gateway.",
        "Enabled event-driven communication using Apache Kafka between Activity and AI services.",
        "Built independent User, Activity, and AI microservices with clear boundaries.",
        "Integrated PostgreSQL and MongoDB for structured and semi-structured workloads.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Cloud",
        "Eureka",
        "API Gateway",
        "Apache Kafka",
        "PostgreSQL",
        "MongoDB",
        "Docker",
      ],
    },
    {
      title: "JobNet: A Smart Job Finder (Academic Project)",
      description:
        "Academic project: job discovery platform with Spring Boot backend, Flask-based job scraping, and Android app optimization with local caching.",
      image: jobnetAcademicImg,
      imageClassName: "object-contain object-top p-3 bg-slate-950",
      link: "https://github.com/saifshamsi28/JobNet-A-Smart-Job-Finder",
      github: "https://github.com/saifshamsi28/JobNet-Springboot-backend",
      featured: true,
      features: [
        "Built Spring Boot APIs for job listing and discovery with MongoDB data models.",
        "Developed Python Flask scraper for Naukri/Indeed ingestion secured by JWT authentication.",
        "Integrated Room Database in Android app, improving speed and reducing redundant API calls.",
        "Implemented resume parsing to recommend relevant jobs based on skill matching.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "MongoDB",
        "Python",
        "Flask",
        "JWT",
        "Android",
        "Room DB",
      ],
    },
    {
      title: "MediConnect Microservices",
      description:
        "Smart digital healthcare backend connecting patients, doctors, and pharmacies through a scalable microservices architecture.",
      image: mediconnectImg,
      link: "https://github.com/saifshamsi28/MediConnect-Microservices",
      github: "https://github.com/saifshamsi28/MediConnect-Microservices",
      features: [
        "Designed domain-driven services for appointment, consultation, and medicine workflows.",
        "Structured APIs for prescription handling and medicine-ordering flows.",
        "Applied scalable service boundaries and clean communication patterns.",
        "Focused on production-grade backend design for healthcare use cases.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "REST APIs",
        "JWT",
        "PostgreSQL",
        "MongoDB",
      ],
    },
  ];

  return (
    <section className="py-24 relative" id="projects">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-primary/5 rounded-3xl"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 25, repeat: Infinity }}
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
            <span className="text-sm font-medium">Portfolio</span>
          </motion.div>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            Featured
            <motion.span
              className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {" "}Projects
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.18 }}
          >
            High-impact projects spanning Spring Boot microservices, secure backend systems, Android development, and production-grade commerce.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -10 }}
            >
              <Card className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 h-full flex flex-col">
                <motion.div
                  className="relative h-[280px] overflow-hidden bg-gradient-to-br from-primary/10 to-purple-500/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.featured && (
                    <motion.div
                      className="absolute top-4 left-4 z-20"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15, type: "spring" }}
                    >
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white shadow-lg">
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-xs font-semibold">Latest Project</span>
                      </div>
                    </motion.div>
                  )}
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-full ${project.imageClassName || "object-cover"}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  {/* Floating action buttons */}
                  <motion.div
                    className="absolute top-4 right-4 flex gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + index * 0.05 }}
                  >
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                      <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-background/80" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View source code"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                      <Button size="sm" className="backdrop-blur-sm" asChild>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <CardHeader className="pb-4 flex-shrink-0">
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </motion.div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6 flex-grow">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                  >
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <motion.div
                        className="w-1 h-4 bg-primary rounded-full"
                        animate={{ height: [16, 20, 16] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {(project.showAllFeatures ? project.features : project.features.slice(0, 3)).map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + idx * 0.06 }}
                        >
                          <motion.div
                            className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                          />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.22 }}
                  >
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <motion.div
                        className="w-1 h-4 bg-purple-500 rounded-full"
                        animate={{ height: [16, 20, 16] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 + 0.5 }}
                      />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.25 + techIndex * 0.03 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="outline"
                            className="text-xs hover:bg-primary/10 hover:border-primary/30 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>

                <CardFooter className="pt-6 flex gap-3 flex-shrink-0">
                  <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" size="sm" className="w-full group/btn" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                          <Github className="mr-2 h-4 w-4" />
                        </motion.div>
                        Source Code
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button size="sm" className="w-full group/btn" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                        </motion.div>
                        Live Demo
                      </a>
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
