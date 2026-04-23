import { motion } from "framer-motion";
import { Github, Activity, TrendingUp, GitBranch } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GithubActivity() {
  const githubUsername = "saifshamsi28";

  return (
    <section id="github-activity" className="py-24 relative">
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-primary/5 rounded-3xl"
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
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Activity className="w-4 h-4" />
            </motion.div>
            <span className="text-sm font-medium">GitHub Contributions</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Activity 
            <motion.span 
              className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {" "}Graph
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A visual representation of my coding journey and contributions on GitHub
          </motion.p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { 
              icon: Github, 
              label: "GitHub Profile", 
              value: "@" + githubUsername,
              color: "from-purple-500 to-pink-500",
              href: `https://github.com/${githubUsername}`
            },
            { 
              icon: GitBranch, 
              label: "Open Source", 
              value: "Backend Projects",
              color: "from-blue-500 to-cyan-500"
            },
            { 
              icon: TrendingUp, 
              label: "Activity Status", 
              value: "Shipping Consistently",
              color: "from-green-500 to-emerald-500"
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className={`h-4 w-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                  </motion.div>
                </CardHeader>
                <CardContent>
                  {stat.href ? (
                    <motion.a
                      href={stat.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {stat.value}
                    </motion.a>
                  ) : (
                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Divider */}
        <motion.div 
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="h-px flex-grow bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="mx-4 p-2 rounded-full bg-primary/10 border border-primary/20"
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Activity className="w-4 h-4 text-primary" />
          </motion.div>
          <motion.div 
            className="h-px flex-grow bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />
        </motion.div>

        {/* Activity Graph */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="border-border/50 overflow-hidden bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-primary" />
                Contribution Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <motion.div 
                className="relative w-full overflow-hidden rounded-b-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient overlay for better blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent z-10 pointer-events-none" />
                
                <img 
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=github-compact&hide_border=true&bg_color=transparent&color=6366f1&line=8b5cf6&point=ec4899&area=true&area_color=8b5cf6`}
                  alt="GitHub Activity Graph"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Profile Counter */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="border-border/50 overflow-hidden bg-card/50 backdrop-blur-sm w-full max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <TrendingUp className="h-5 w-5 text-primary" />
                </motion.div>
                Profile Views
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center pb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={`https://profile-counter.glitch.me/${githubUsername}/count.svg?`}
                  alt="Profile Counter"
                  className="rounded-lg"
                  loading="lazy"
                />
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px -10px rgba(99, 102, 241, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-5 w-5" />
            View Full GitHub Profile
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
