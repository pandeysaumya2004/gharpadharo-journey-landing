import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Home, MapPin, Mail, Phone, Calendar, CheckCircle, Target, Zap } from "lucide-react";
import gharpadharoLogo from "/lovable-uploads/c40ced00-1521-4653-821d-d2becbbec957.png";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const journeyEvents = [
    {
      year: "2024",
      icon: <Target className="w-6 h-6" />,
      title: "Foundation",
      description: "Gharpadharo was founded to simplify room and rental property discovery."
    },
    {
      year: "Early 2025",
      icon: <CheckCircle className="w-6 h-6" />,
      title: "MVP Launch",
      description: "MVP launched with listings in 3 major cities."
    },
    {
      year: "Mid 2025",
      icon: <Zap className="w-6 h-6" />,
      title: "Growth Milestone",
      description: "Reached 10,000+ users and partnered with local property agents."
    },
    {
      year: "2026 and beyond",
      icon: <MapPin className="w-6 h-6" />,
      title: "Future Vision",
      description: "Expansion to more cities and launch of AI-powered smart room matching."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Header */}
      <header className="fixed top-0 w-full z-50 bg-blue-grey-primary backdrop-blur-sm border-b border-blue-grey-light/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={gharpadharoLogo} alt="Gharpadharo Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-text-light">Gharpadharo</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="https://www.gharpadharo.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light hover:text-text-muted transition-colors font-medium"
            >
              Home
            </a>
            <button 
              onClick={() => scrollToSection('journey')}
              className="text-text-light hover:text-text-muted transition-colors font-medium"
            >
              Journey
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-text-light hover:text-text-muted transition-colors font-medium"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-grey-primary to-blue-grey-dark">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-text-light mb-6 leading-tight">
            Find Your Perfect Room
          </h1>
          <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            Find a variety of properties that suits you very easily, forget all difficulties in finding a place for you.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('journey')}
            className="text-lg px-8 py-4 h-auto"
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 px-4 bg-blue-grey-dark">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">Our Journey</h2>
            <p className="text-xl text-text-muted">Building the future of property discovery</p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-grey-light transform md:-translate-x-1/2"></div>
            
            {journeyEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-grey-light rounded-full transform md:-translate-x-1/2 -translate-y-1/2 top-1/2"></div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="bg-blue-grey-light/20 border-blue-grey-light/30 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-grey-light/30 rounded-lg text-text-light">
                          {event.icon}
                        </div>
                        <CardTitle className="text-2xl font-bold text-text-light">{event.year}</CardTitle>
                      </div>
                      <h3 className="text-xl font-semibold text-text-light">{event.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-muted">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-blue-grey-primary">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">Get In Touch</h2>
            <p className="text-xl text-text-muted">Ready to find your perfect room? Contact us today!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-blue-grey-light/20 border-blue-grey-light/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-text-light">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-blue-grey-dark/50 border-blue-grey-light/30 text-text-light placeholder:text-text-muted"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-blue-grey-dark/50 border-blue-grey-light/30 text-text-light placeholder:text-text-muted"
                />
                <Textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="bg-blue-grey-dark/50 border-blue-grey-light/30 text-text-light placeholder:text-text-muted"
                />
                <Button variant="hero" className="w-full">Send Message</Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-grey-light/30 rounded-lg">
                  <Mail className="w-6 h-6 text-text-light" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-light">Email</h3>
                  <p className="text-text-muted">contact@gharpadharo.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-grey-light/30 rounded-lg">
                  <Phone className="w-6 h-6 text-text-light" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-light">Phone</h3>
                  <p className="text-text-muted">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-grey-light/30 rounded-lg">
                  <Home className="w-6 h-6 text-text-light" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-light">Office</h3>
                  <p className="text-text-muted">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-blue-grey-dark border-t border-blue-grey-light/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={gharpadharoLogo} alt="Gharpadharo Logo" className="w-8 h-8" />
              <span className="text-text-light font-semibold">Gharpadharo</span>
            </div>
            
            <div className="text-center">
              <p className="text-text-muted">© 2025 Gharpadharo. All rights reserved.</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-text-muted hover:text-text-light transition-colors">Terms of Service</a>
              <a href="#" className="text-text-muted hover:text-text-light transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;