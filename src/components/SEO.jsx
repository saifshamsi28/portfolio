import { Helmet } from 'react-helmet-async';

/**
 * SEO Component for dynamic meta tag management
 * Usage: <SEO title="Page Title" description="Page Description" />
 */
export const SEO = ({ 
  title = "Md Saifullah - Backend Engineer | Spring Boot Microservices",
  description = "Backend engineer specializing in Spring Boot microservices, distributed systems, and secure APIs. Built production-ready full-stack platforms with JWT auth, event-driven workflows, and resilient payment orchestration.",
  keywords = "Md Saifullah, Backend Engineer, Spring Boot, Java, Microservices, PostgreSQL, MongoDB, Redis, JWT, Razorpay, Full-Stack Development",
  author = "Md Saifullah",
  image = "/og-image.png",
  url = "https://iamsaifullah.me",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
