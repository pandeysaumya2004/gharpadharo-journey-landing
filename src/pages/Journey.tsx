import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, CheckCircle, Zap, MapPin, Users, Building, Rocket, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import backgroundImage from "/lovable-uploads/85cc878b-ccee-43ca-bc00-29abbb289d15.png";

const Journey = () => {
  const journeyEvents = [
    {
      year: "2024",
      quarter: "Q1",
      icon: <Target className="w-6 h-6" />,
      title: "Foundation & Vision",
      description: "Gharpadharo was founded with a mission to revolutionize the way people discover and secure rental properties. Our team identified the pain points in traditional property hunting and set out to create a seamless solution.",
      highlights: ["Team formation", "Market research", "Initial concept development", "Technology stack selection"]
    },
    {
      year: "2024",
      quarter: "Q4",
      icon: <Building className="w-6 h-6" />,
      title: "Product Development",
      description: "Intensive development phase where we built our core platform, integrated advanced search algorithms, and established partnerships with local property agents and landlords.",
      highlights: ["Platform architecture", "Database design", "UI/UX development", "Property listing system"]
    },
    {
      year: "Early 2025",
      quarter: "Q1",
      icon: <CheckCircle className="w-6 h-6" />,
      title: "MVP Launch",
      description: "Successfully launched our minimum viable product in 3 major cities: Mumbai, Delhi, and Bangalore. The platform featured comprehensive property listings, advanced filters, and direct communication tools.",
      highlights: ["3 cities coverage", "500+ initial listings", "Beta user testing", "Feedback integration"]
    },
    {
      year: "Mid 2025",
      quarter: "Q2-Q3",
      icon: <Users className="w-6 h-6" />,
      title: "Growth & Partnerships",
      description: "Achieved significant user growth milestone of 10,000+ active users. Established strategic partnerships with local property agents, verified landlords, and property management companies.",
      highlights: ["10,000+ users", "50+ partner agents", "Verification system", "Trust & safety features"]
    },
    {
      year: "Late 2025",
      quarter: "Q4",
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Market Expansion",
      description: "Expanded to 10 additional cities across India, implementing city-specific features and local market insights. Enhanced platform with advanced analytics and user behavior tracking.",
      highlights: ["13 cities total", "Regional customization", "Analytics dashboard", "Mobile app launch"]
    },
    {
      year: "2026",
      quarter: "Q1-Q2",
      icon: <Zap className="w-6 h-6" />,
      title: "AI Integration",
      description: "Launched our revolutionary AI-powered smart room matching system that uses machine learning to understand user preferences and provide personalized property recommendations.",
      highlights: ["AI matching algorithm", "Personalization engine", "Smart recommendations", "Predictive analytics"]
    },
    {
      year: "2026 & Beyond",
      quarter: "Future",
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation & Scale",
      description: "Continuous innovation with virtual property tours, blockchain-based rental agreements, IoT integration for smart homes, and expansion to international markets.",
      highlights: ["Virtual tours", "Blockchain contracts", "IoT integration", "International expansion"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      
      {/* Content with overlay */}
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-grey-primary/80 to-blue-grey-dark/80">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-text-light mb-6 leading-tight">
              Our Journey
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
              From a simple idea to revolutionizing property discovery across India. Discover how we're building the future of rental housing.
            </p>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 px-4 bg-blue-grey-dark/90">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">Building the Future</h2>
              <p className="text-xl text-text-muted">Every milestone in our journey towards transforming property discovery</p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-grey-light transform md:-translate-x-1/2"></div>
              
              {journeyEvents.map((event, index) => (
                <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-grey-light rounded-full transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 border-2 border-blue-grey-primary"></div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card className="bg-blue-grey-light/20 border-blue-grey-light/30 backdrop-blur-sm hover:bg-blue-grey-light/30 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-3 bg-blue-grey-light/30 rounded-lg text-text-light">
                            {event.icon}
                          </div>
                          <div>
                            <CardTitle className="text-2xl font-bold text-text-light">{event.year}</CardTitle>
                            <p className="text-sm text-text-muted">{event.quarter}</p>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-text-light">{event.title}</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-text-muted mb-4 leading-relaxed">{event.description}</p>
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-text-light">Key Highlights:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                            {event.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-sm text-text-muted flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-grey-light rounded-full"></div>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 px-4 bg-blue-grey-primary/90">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">Our Vision for Tomorrow</h2>
            <p className="text-xl text-text-muted mb-12 leading-relaxed">
              We envision a world where finding the perfect home is as simple as a few clicks. Through cutting-edge technology, 
              transparent processes, and unwavering commitment to user experience, we're building the future of property discovery.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-blue-grey-light/20 rounded-lg backdrop-blur-sm border border-blue-grey-light/30">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-text-light mb-2">Global Reach</h3>
                <p className="text-text-muted">Expanding beyond India to serve international markets and global nomads.</p>
              </div>
              
              <div className="p-6 bg-blue-grey-light/20 rounded-lg backdrop-blur-sm border border-blue-grey-light/30">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-text-light mb-2">AI-First</h3>
                <p className="text-text-muted">Leading with artificial intelligence to create smarter, more intuitive experiences.</p>
              </div>
              
              <div className="p-6 bg-blue-grey-light/20 rounded-lg backdrop-blur-sm border border-blue-grey-light/30">
                <div className="text-4xl mb-4">🏘️</div>
                <h3 className="text-xl font-semibold text-text-light mb-2">Community</h3>
                <p className="text-text-muted">Building stronger communities by connecting people with their perfect homes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-blue-grey-dark/90 border-t border-blue-grey-light/20">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <img src="/lovable-uploads/c40ced00-1521-4653-821d-d2becbbec957.png" alt="Gharpadharo Logo" className="w-8 h-8" />
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
    </div>
  );
};

export default Journey;