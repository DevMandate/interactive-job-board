import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '../components/ui/carousel'
import companies from '../data/companies.json'
import faqs from "../data/faq.json";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle} from '../components/ui/card'
import { Search, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
      <section className='text-center'>
        <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl'>Connecting Talents with Opportunities{""} 
          <span className='flex items-center gap-2 sm:gap-6'><img src="/logo.png" alt="Hired Image" className='h-14 sm:h-24 lg:h-32 tracking-tighter py-4'/> </span>
        </h1>
        <p className='text-grey-300 sm:mt-4 text-xs sm:text-xl'>One platform, endless opportunities. Whether you’re hiring or job hunting.</p>
      </section>

      <section>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Link to="/jobs" className="w-full sm:w-auto">
            <Button variant="emerald" size="xl" className="w-full sm:w-auto">
              <Search className="w-5 h-5" /> Explore Opportunities
            </Button>
          </Link>
          <Link to="/post-job" className="w-full sm:w-auto">
            <Button variant="indigo" size="xl" className="w-full sm:w-auto">
              <Users className="w-5 h-5" /> Hire Talent
            </Button>
          </Link>
        </div>
      </section>

      

      {/* carousel */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

    {/* banner */}
    <img src="/banner.png" alt="" className='w-full'/>
    
    {/* cards */}
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Easily search and apply for roles while keeping track of every application to stay in control of your career journey. Our platform empowers you to highlight your skills, connect with employers who value your talent, and uncover opportunities that truly match your aspirations.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post job openings quickly, manage applications seamlessly, and identify the best candidates for your roles. From attracting top talent to building high-performing teams, our tools simplify your hiring process and empower you to make smarter decisions. 
          </CardContent>
        </Card>
      </section>

    {/* accordion */}
    <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
  </main>
)}

export default LandingPage