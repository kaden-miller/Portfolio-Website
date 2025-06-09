"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-40 text-center">
        <div className="max-w-4xl mx-auto grid grid-cols-5 gap-4">
          <div className="col-span-3 flex flex-col text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-gray-300 bg-gradient-to-r bg-clip-text text-transparent">
              Kaden Miller
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 dark:text-gray-300 bg-gradient-to-r  bg-clip-text text-transparent">
              Web Developer
            </h2>

            <p className="text-m md:text-l  dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Hello! I&apos;m a self taught web developer with 5+ years of
              experience building websites. I&apos;ve primarily been involved
              with builing Wordpress websites and working in HTML, PHP,
              Javascript, and CSS. I&apos;m passoniate about bringing ideas from
              concept, to deployment, and helping improve businesses systems and
              processes. Being self taught, my problem solving skills are one of
              my top assets. I&apos;m a quick learner and can lead my own
              projects, finding solutions to issues that arise during the
              development process.
            </p>
            <div className="flex flex-row gap-8">
              <div className="space-x-6">
                <a
                  className=" dark:text-gray-300 cursor-pointer"
                  href="https://github.com/kaden-miller/"
                  target="_blank"
                >
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  className=" dark:text-gray-300 cursor-pointer"
                  href="mailto:hello@kadenmiller.dev"
                  target="_blank"
                >
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  className=" dark:text-gray-300 cursor-pointer"
                  href="https://www.linkedin.com/in/kaden-miller-547a48a4/"
                  target="_blank"
                >
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
              <div className="gap-4 mb-8">
                <Button
                  size="lg"
                  className="text-lg px-8 py-3 cursor-pointer"
                  onClick={() => {
                    document.getElementById("portfolio")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-8 col-span-2">
            <Image
              src="/kaden-headshot.jpg" // Add your photo to public folder
              alt="Kaden Miller"
              width={300}
              height={300}
              className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </section>

      <section id="portfolio" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Business Website",
                description:
                  "E-commerce website for local boat dealer. Built in Wordpress",
                image: "/aea-site.png",
                live: "https://allelementsautoandmarine.com/",
              },
              {
                title: "Tutorial Plugin",
                description:
                  "Custom, remote updatable, tutorial plugin for client website tutorials.",
                image: "/tutorial-plugin.png",
                github:
                  "https://github.com/kaden-miller/Tutorial-Plugin/blob/main/index.php",
              },
              {
                title: "Online Music Player",
                description:
                  "A simple music player to play a set list of songs. Hosted on Vercel.",
                image: "/vbs-player.png",
                github: "https://github.com/kaden-miller/vbs_song_player",
                live: "https://vbs.coding.pizza/",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow pt-0"
              >
                <div className="relative overflow-hidden rounded-t-lg p-2 pb-0">
                  {/* It might be cool to have these as videos that play on hover? Or video fades in on hover? */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-2">
                      {project.github && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}

                      {/* Only show Live button if live URL exists */}
                      {project.live && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          asChild
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} live site`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl  dark:text-gray-300 mb-12">
            I&apos;m always open to discussing new opportunities and interesting
            projects
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              className=" dark:text-gray-300"
              href="https://github.com/kaden-miller/"
              target="_blank"
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Github className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  github.com/kadenmiller
                </CardContent>
              </Card>
            </a>
            <a
              className=" dark:text-gray-300"
              href="mailto:hello@kadenmiller.dev"
              target="_blank"
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Mail className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  hello@kadenmiller.dev
                </CardContent>
              </Card>
            </a>
            <a
              className=" dark:text-gray-300"
              href="https://www.linkedin.com/in/kaden-miller-547a48a4/"
              target="_blank"
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Linkedin className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  linkedin.com/in/kadenmiller
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>
      <footer className=" text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Kaden Miller. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
