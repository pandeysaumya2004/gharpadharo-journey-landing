import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageCircle, Users, Headphones } from "lucide-react";
import Header from "@/components/Header";
import backgroundImage from "/lovable-uploads/85cc878b-ccee-43ca-bc00-29abbb289d15.png";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "contact@gharpadharo.com",
      action: "mailto:contact@gharpadharo.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak directly with our support team",
      contact: "+91 98765 43210",
      action: "tel:+919876543210"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Get instant help through our live chat",
      contact: "Available 9 AM - 9 PM",
      action: "#"
    }
  ];

  const offices = [
    {
      city: "Mumbai",
      address: "WeWork, Bandra Kurla Complex, Mumbai 400051",
      phone: "+91 98765 43210",
      email: "mumbai@gharpadharo.com"
    },
    {
      city: "Delhi",
      address: "Cyber City, Gurugram, Haryana 122002",
      phone: "+91 98765 43211",
      email: "delhi@gharpadharo.com"
    },
    {
      city: "Bangalore",
      address: "Koramangala, Bangalore, Karnataka 560034",
      phone: "+91 98765 43212",
      email: "bangalore@gharpadharo.com"
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
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
              Have questions? Need support? Want to partner with us? We're here to help you find your perfect room.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-4 bg-blue-grey-dark/90">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">How Can We Help?</h2>
              <p className="text-xl text-text-muted">Choose the best way to reach us</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-blue-grey-light/20 border-blue-grey-light/30 backdrop-blur-sm hover:bg-blue-grey-light/30 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-grey-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-text-light">
                        {method.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-text-light">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-text-muted mb-4">{method.description}</p>
                    <a 
                      href={method.action}
                      className="text-blue-grey-light hover:text-text-light transition-colors font-semibold"
                    >
                      {method.contact}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 px-4 bg-blue-grey-primary/90">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-text-light mb-6">Send us a Message</h2>
                <Card className="bg-blue-grey-light/20 border-blue-grey-light/30 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-text-light mb-2">Full Name *</label>
                          <Input 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Full Name" 
                            className="bg-blue-grey-dark/50 border-blue-grey-light/30 text-text-light placeholder:text-text-muted"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-light mb-2">Email Address *</label>
                          <Input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com" 
                            className="bg-blue-grey-dark/50 border-blue-grey-light/30 text-text-light placeholder:text-text-muted"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-text-light mb-2">Phone Number</label>
                          <Input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210" 
                            className="bg-blue-grey-dark/50 border-blue-grey-light/30 text-text-light placeholder:text-text-muted"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-light mb-2">Subject *</label>
                          <Input 
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="How can we help you?" 
                            className="bg-blue-grey-dark/50 border-blue-grey-light/30 text-text-light placeholder:text-text-muted"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-text-light mb-2">Message *</label>
                        <Textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us more about your inquiry..." 
                          rows={6}
                          className="bg-blue-grey-dark/50 border-blue-grey-light/30 text-text-light placeholder:text-text-muted"
                          required
                        />
                      </div>
                      
                      <Button type="submit" variant="hero" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-text-light mb-6">Our Offices</h2>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={index} className="bg-blue-grey-light/20 border-blue-grey-light/30 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-xl text-text-light flex items-center gap-2">
                          <MapPin className="w-5 h-5" />
                          {office.city}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-text-muted">{office.address}</p>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-blue-grey-light" />
                            <a href={`tel:${office.phone}`} className="text-text-muted hover:text-text-light transition-colors">
                              {office.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-blue-grey-light" />
                            <a href={`mailto:${office.email}`} className="text-text-muted hover:text-text-light transition-colors">
                              {office.email}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Business Hours */}
                <Card className="mt-6 bg-blue-grey-light/20 border-blue-grey-light/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-text-light flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-text-muted">Monday - Friday</span>
                        <span className="text-text-light">9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-muted">Saturday</span>
                        <span className="text-text-light">10:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-muted">Sunday</span>
                        <span className="text-text-light">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-blue-grey-dark/90">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-text-light mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-text-muted">Quick answers to common questions</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-blue-grey-light/20 border-blue-grey-light/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-text-light">How do I list my property?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-muted">Simply create an account, verify your property ownership, and use our easy listing tool. Our team will review and approve within 24 hours.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-grey-light/20 border-blue-grey-light/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-text-light">Is there a booking fee?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-muted">No, Gharpadharo is completely free for renters. Property owners pay a small commission only after successful bookings.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-grey-light/20 border-blue-grey-light/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-text-light">How are properties verified?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-muted">We conduct thorough verification including document checks, property visits, and owner identity confirmation before listing.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-grey-light/20 border-blue-grey-light/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-text-light">What if I need support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-muted">Our support team is available 9 AM - 9 PM through phone, email, and live chat. We're here to help every step of the way.</p>
                </CardContent>
              </Card>
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

export default Contact;