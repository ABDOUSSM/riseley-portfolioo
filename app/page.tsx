"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, Code, Globe, Layout, Layers, Mail, MessageSquare, Phone, Smartphone } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import MouseFollower from "@/components/mouse-follower"
import ParticleBackground from "@/components/particle-background"
import HeroImage from "@/components/svg/hero-image"
import AboutImage from "@/components/svg/about-image"
import {
  EcommerceProjectImage,
  CorporateProjectImage,
  EducationProjectImage,
  RestaurantProjectImage,
  HealthcareProjectImage,
  RealEstateProjectImage,
} from "@/components/svg/project-images"

// Import the ContactForm component
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  const [isVisible, setIsVisible] = useState({
    about: false,
    services: false,
    portfolio: false,
    testimonials: false,
    contact: false,
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  // Refs for parallax elements
  const heroImageRef = useRef(null)
  const aboutImageRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Parallax effect for hero image
      if (heroImageRef.current) {
        const moveX = (e.clientX - window.innerWidth / 2) / 50
        const moveY = (e.clientY - window.innerHeight / 2) / 50
        heroImageRef.current.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX / 10}deg)`
      }

      // Parallax effect for about image
      if (aboutImageRef.current) {
        const moveX = (e.clientX - window.innerWidth / 2) / -30
        const moveY = (e.clientY - window.innerHeight / 2) / -30
        aboutImageRef.current.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveY / 15}deg)`
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      observer.observe(section)
    })

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const textEnter = () => setCursorVariant("text")
  const buttonEnter = () => setCursorVariant("button")
  const defaultEnter = () => setCursorVariant("default")

  return (
    <div className="flex flex-col w-full min-h-screen">
      <MouseFollower mousePosition={mousePosition} cursorVariant={cursorVariant} />

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2" onMouseEnter={textEnter} onMouseLeave={defaultEnter}>
            <Layers className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-xl font-bold">Riseley</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#home"
              className="text-sm font-medium hover:text-primary transition-colors duration-300"
              onMouseEnter={textEnter}
              onMouseLeave={defaultEnter}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors duration-300"
              onMouseEnter={textEnter}
              onMouseLeave={defaultEnter}
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors duration-300"
              onMouseEnter={textEnter}
              onMouseLeave={defaultEnter}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium hover:text-primary transition-colors duration-300"
              onMouseEnter={textEnter}
              onMouseLeave={defaultEnter}
            >
              Portfolio
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors duration-300"
              onMouseEnter={textEnter}
              onMouseLeave={defaultEnter}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors duration-300"
              onMouseEnter={textEnter}
              onMouseLeave={defaultEnter}
            >
              Contact
            </Link>
          </nav>
          <Button
            className="hidden md:inline-flex hover:scale-105 transition-transform duration-300"
            onMouseEnter={buttonEnter}
            onMouseLeave={defaultEnter}
          >
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Layers className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <ParticleBackground mousePosition={mousePosition} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 animate-gradient-x"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 animate-fade-in-up">
                <div className="space-y-2" onMouseEnter={textEnter} onMouseLeave={defaultEnter}>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-glow">
                    Web Development From Start to Finish
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We create stunning, high-performance websites that drive results for your business.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="group animate-bounce-subtle magnetic-button"
                    onMouseEnter={buttonEnter}
                    onMouseLeave={defaultEnter}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors duration-300 magnetic-button"
                    onMouseEnter={buttonEnter}
                    onMouseLeave={defaultEnter}
                  >
                    View Portfolio
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div
                  ref={heroImageRef}
                  className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] transition-transform duration-300"
                >
                  <HeroImage />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className={`w-full bg-muted/50 py-12 md:py-24 lg:py-32 relative overflow-hidden transition-all duration-1000 ${isVisible.about ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          {/* <div className="absolute inset-0 bg-grid-pattern opacity-5"></div> */}
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2" onMouseEnter={textEnter} onMouseLeave={defaultEnter}>
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground animate-pulse">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-glow">Who We Are</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Riseley is a premier web development agency specializing in creating exceptional digital experiences
                  from concept to completion. With years of industry experience, our team of skilled developers,
                  designers, and strategists work together to deliver websites that not only look stunning but also
                  perform exceptionally well.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li
                    className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300 feature-card"
                    onMouseEnter={textEnter}
                    onMouseLeave={defaultEnter}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground animate-spin-slow">
                      <Layout className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Expert Design</h3>
                      <p className="text-muted-foreground">
                        Our designers create visually stunning interfaces that engage your audience.
                      </p>
                    </div>
                  </li>
                  <li
                    className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300 feature-card"
                    onMouseEnter={textEnter}
                    onMouseLeave={defaultEnter}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground animate-spin-slow animation-delay-500">
                      <Code className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Clean Code</h3>
                      <p className="text-muted-foreground">
                        We write efficient, maintainable code that ensures your website performs optimally.
                      </p>
                    </div>
                  </li>
                  <li
                    className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300 feature-card"
                    onMouseEnter={textEnter}
                    onMouseLeave={defaultEnter}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground animate-spin-slow animation-delay-1000">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Responsive Design</h3>
                      <p className="text-muted-foreground">
                        All our websites work flawlessly across devices of all sizes.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div
                  ref={aboutImageRef}
                  className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] transition-transform duration-300"
                >
                  <AboutImage />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className={`w-full py-12 md:py-24 lg:py-32 transition-all duration-1000 ${isVisible.services ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2" onMouseEnter={textEnter} onMouseLeave={defaultEnter}>
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground animate-pulse">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-glow">What We Offer</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From concept to deployment, we provide comprehensive web development services tailored to your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 service-card"
                onMouseEnter={textEnter}
                onMouseLeave={defaultEnter}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 animate-pulse">
                  <Layout className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Web Design</h3>
                <p className="text-center text-muted-foreground">
                  Custom designs that reflect your brand identity and engage your audience.
                </p>
              </div>
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 service-card"
                onMouseEnter={textEnter}
                onMouseLeave={defaultEnter}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 animate-pulse animation-delay-300">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="text-center text-muted-foreground">
                  Full-stack development with modern technologies for optimal performance.
                </p>
              </div>
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 service-card"
                onMouseEnter={textEnter}
                onMouseLeave={defaultEnter}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 animate-pulse animation-delay-600">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Responsive Design</h3>
                <p className="text-center text-muted-foreground">
                  Websites that look and function perfectly on all devices and screen sizes.
                </p>
              </div>
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 service-card"
                onMouseEnter={textEnter}
                onMouseLeave={defaultEnter}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 animate-pulse animation-delay-900">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">E-Commerce Solutions</h3>
                <p className="text-center text-muted-foreground">
                  Custom online stores with secure payment gateways and inventory management.
                </p>
              </div>
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 service-card"
                onMouseEnter={textEnter}
                onMouseLeave={defaultEnter}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 animate-pulse animation-delay-1200">
                  <Layers className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">CMS Integration</h3>
                <p className="text-center text-muted-foreground">
                  Easy-to-use content management systems that give you control over your website.
                </p>
              </div>
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 service-card"
                onMouseEnter={textEnter}
                onMouseLeave={defaultEnter}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 animate-pulse animation-delay-1500">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Maintenance & Support</h3>
                <p className="text-center text-muted-foreground">
                  Ongoing support and maintenance to keep your website secure and up-to-date.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="portfolio"
          className={`w-full bg-muted/50 py-12 md:py-24 lg:py-32 transition-all duration-1000 ${isVisible.portfolio ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2" onMouseEnter={textEnter} onMouseLeave={defaultEnter}>
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground animate-pulse">
                  Our Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-glow">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a look at some of our recent projects that showcase our expertise and creativity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div
                className="group relative overflow-hidden rounded-lg border shadow-sm hover:shadow-xl transition-all duration-500 project-card"
                onMouseEnter={buttonEnter}
                onMouseLeave={defaultEnter}
              >
                <div className="aspect-video overflow-hidden">
                  <EcommerceProjectImage />
                </div>
                <div className="p-4 bg-background/90 backdrop-blur-sm absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold">E-Commerce Platform</h3>
                  <p className="text-sm text-muted-foreground">
                    A fully responsive online store with custom product filtering and secure checkout.
                  </p>
                  <Button variant="outline" size="sm" className="mt-4 self-start">
                    View Project
                  </Button>
                </div>
              </div>
              <div
                className="group relative overflow-hidden rounded-lg border shadow-sm hover:shadow-xl transition-all duration-500 project-card"
                onMouseEnter={buttonEnter}
                onMouseLeave={defaultEnter}
              >
                <div className="aspect-video overflow-hidden">
                  <CorporateProjectImage />
                </div>
                <div className="p-4 bg-background/90 backdrop-blur-sm absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold">Corporate Website</h3>
                  <p className="text-sm text-muted-foreground">
                    A professional website for a financial services company with custom animations.
                  </p>
                  <Button variant="outline" size="sm" className="mt-4 self-start">
                    View Project
                  </Button>
                </div>
              </div>
              <div
                className="group relative overflow-hidden rounded-lg border shadow-sm hover:shadow-xl transition-all duration-500 project-card"
                onMouseEnter={buttonEnter}
                onMouseLeave={defaultEnter}
              >
                <div className="aspect-video overflow-hidden">
                  <EducationProjectImage />
                </div>
                <div className="p-4 bg-background/90 backdrop-blur-sm absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold">Educational Platform</h3>
                  <p className="text-sm text-muted-foreground">
                    An interactive learning platform with course management and student progress tracking.
                  </p>
                  <Button variant="outline" size="sm" className="mt-4 self-start">
                    View Project
                  </Button>
                </div>
              </div>
              <div
                className="group relative overflow-hidden rounded-lg border shadow-sm hover:shadow-xl transition-all duration-500 project-card"
                onMouseEnter={buttonEnter}
                onMouseLeave={defaultEnter}
              >
                <div className="aspect-video overflow-hidden">
                  <RestaurantProjectImage />
                </div>
                <div className="p-4 bg-background/90 backdrop-blur-sm absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold">Restaurant Website</h3>
                  <p className="text-sm text-muted-foreground">
                    A visually appealing website with online reservation system and menu management.
                  </p>
                  <Button variant="outline" size="sm" className="mt-4 self-start">
                    View Project
                  </Button>
                </div>
              </div>
              <div
                className="group relative overflow-hidden rounded-lg border shadow-sm hover:shadow-xl transition-all duration-500 project-card"
                onMouseEnter={buttonEnter}
                onMouseLeave={defaultEnter}
              >
                <div className="aspect-video overflow-hidden">
                  <HealthcareProjectImage />
                </div>
                <div className="p-4 bg-background/90 backdrop-blur-sm absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold">Healthcare Portal</h3>
                  <p className="text-sm text-muted-foreground">
                    A secure patient portal with appointment scheduling and medical record access.
                  </p>
                  <Button variant="outline" size="sm" className="mt-4 self-start">
                    View Project
                  </Button>
                </div>
              </div>
              <div
                className="group relative overflow-hidden rounded-lg border shadow-sm hover:shadow-xl transition-all duration-500 project-card"
                onMouseEnter={buttonEnter}
                onMouseLeave={defaultEnter}
              >
                <div className="aspect-video overflow-hidden">
                  <RealEstateProjectImage />
                </div>
                <div className="p-4 bg-background/90 backdrop-blur-sm absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold">Real Estate Platform</h3>
                  <p className="text-sm text-muted-foreground">
                    A property listing website with advanced search filters and interactive maps.
                  </p>
                  <Button variant="outline" size="sm" className="mt-4 self-start">
                    View Project
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                size="lg"
                variant="outline"
                className="group hover:scale-105 transition-transform duration-300 magnetic-button"
                onMouseEnter={buttonEnter}
                onMouseLeave={defaultEnter}
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className={`w-full py-12 md:py-24 lg:py-32 transition-all duration-1000 ${isVisible.testimonials ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2" onMouseEnter={textEnter} onMouseLeave={defaultEnter}>
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground animate-pulse">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-glow">What Our Clients Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say about working with us.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div
                className="flex flex-col justify-between rounded-lg border p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 testimonial-card"
                onMouseEnter={textEnter}
                onMouseLeave={defaultEnter}
              >
                <div className="space-y-4">
                  <div className="flex gap-0.5 text-primary animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground">
                    "Riseley transformed our outdated website into a modern, user-friendly platform that has
                    significantly increased our online conversions. Their team was professional, responsive, and
                    delivered beyond our expectations."
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="rounded-full bg-muted p-1 animate-pulse">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">CEO, TechSolutions Inc.</p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-between rounded-lg border p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 testimonial-card"
                onMouseEnter={textEnter}
                onMouseLeave={defaultEnter}
              >
                <div className="space-y-4">
                  <div className="flex gap-0.5 text-primary animate-pulse animation-delay-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground">
                    "Working with Riseley was a game-changer for our business. They built our e-commerce platform from
                    scratch, and it has been performing exceptionally well. Their attention to detail and technical
                    expertise is unmatched."
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="rounded-full bg-muted p-1 animate-pulse animation-delay-300">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Michael Chen</p>
                    <p className="text-xs text-muted-foreground">Founder, StyleHub</p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-between rounded-lg border p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 testimonial-card"
                onMouseEnter={textEnter}
                onMouseLeave={defaultEnter}
              >
                <div className="space-y-4">
                  <div className="flex gap-0.5 text-primary animate-pulse animation-delay-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground">
                    "We hired Riseley to redesign our healthcare portal, and they delivered a secure, intuitive platform
                    that our patients love. Their understanding of both technical requirements and user experience made
                    the project a success."
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="rounded-full bg-muted p-1 animate-pulse animation-delay-600">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Dr. Emily Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Director, HealthFirst Clinic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className={`w-full bg-muted/50 py-12 md:py-24 lg:py-32 relative overflow-hidden transition-all duration-1000 ${isVisible.contact ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          {/* <div className="absolute inset-0 bg-grid-pattern opacity-5"></div> */}
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2" onMouseEnter={textEnter} onMouseLeave={defaultEnter}>
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground animate-pulse">
                Contact Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-glow">
                Let's Discuss Your Project
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to bring your web project to life? Get in touch with us today to discuss how we can help you
                achieve your goals.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row lg:justify-end">
              <div
                className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
                onMouseEnter={textEnter}
                onMouseLeave={defaultEnter}
              >
                <Phone className="h-4 w-4 text-primary animate-bounce-subtle" />
                <span className="text-sm font-medium">+1 (555) 123-4567</span>
              </div>
              <div
                className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
                onMouseEnter={textEnter}
                onMouseLeave={defaultEnter}
              >
                <Mail className="h-4 w-4 text-primary animate-bounce-subtle animation-delay-500" />
                <span className="text-sm font-medium">contact@riseley.com</span>
              </div>
            </div>
            
            {/* Replace the old form with our new ContactForm component */}
            <div className="space-y-4">
              <ContactForm 
                onMouseEnter={textEnter} 
                onMouseLeave={defaultEnter}
                textEnter={textEnter}
                buttonEnter={buttonEnter}
                defaultEnter={defaultEnter}
              />
            </div>
            
            <div className="overflow-hidden rounded-lg border bg-background shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="h-[300px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2157146429!2d-73.98784532342249!3d40.75798903440673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1710234517721!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-10 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-grid-pattern opacity-5"></div> */}
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row relative">
          <div className="flex items-center gap-2" onMouseEnter={textEnter} onMouseLeave={defaultEnter}>
            <Layers className="h-6 w-6 text-primary animate-spin-slow" />
            <span className="text-lg font-bold">Riseley</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Riseley. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              onMouseEnter={textEnter}
              onMouseLeave={defaultEnter}
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              onMouseEnter={textEnter}
              onMouseLeave={defaultEnter}
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              onMouseEnter={textEnter}
              onMouseLeave={defaultEnter}
            >
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
