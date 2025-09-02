import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, DollarSign, Users, ExternalLink, CheckCircle, Globe } from "lucide-react";
import type { Scholarship } from "@shared/schema";
import techGirlsImage from "@assets/generated_images/TechGirls_STEM_program_participants_e9afc913.png";

export default function ScholarshipDetail() {
  const { id } = useParams();
  
  const { data: scholarship, isLoading } = useQuery<Scholarship>({
    queryKey: ["/api/scholarships", id],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!scholarship) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Scholarship Not Found</h1>
          <p className="text-gray-600">The scholarship you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // TechGirls specific content
  const isTechGirls = scholarship.id === 'scholarship-1';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Badge className={`mb-4 ${
              scholarship.status === 'open' ? 'bg-green-100 text-green-800' :
              scholarship.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {scholarship.status === 'open' ? 'Open for Applications' :
               scholarship.status === 'upcoming' ? 'Upcoming Application Period' :
               'Closing Soon'}
            </Badge>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {scholarship.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              {scholarship.description}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                <span className="font-medium">${scholarship.amount.toLocaleString()} Value</span>
              </div>
              <div className="flex items-center">
                <CalendarDays className="w-4 h-4 mr-2" />
                <span>Deadline: {scholarship.deadline.toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{scholarship.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>{scholarship.organizationName}</span>
              </div>
            </div>
          </div>

          {/* Program Image */}
          {isTechGirls && (
            <div className="mb-8">
              <img 
                src={techGirlsImage} 
                alt="TechGirls program participants working on STEM projects"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* TechGirls Specific Content */}
          {isTechGirls ? (
            <div className="space-y-8">
              {/* Program Overview */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About TechGirls Program</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    TechGirls is a prestigious, fully-funded U.S. Department of State exchange program that empowers young women from around the world to pursue careers in science, technology, engineering, and mathematics (STEM). This life-changing opportunity combines intensive technology training at Virginia Tech University with cultural immersion across the United States.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Program Highlights</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          23-day intensive experience in the United States
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          38 hours of cutting-edge STEM coursework
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Technology camp at Virginia Tech University
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Host family cultural immersion experience
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          7-month mentoring program post-exchange
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">What's Included</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Round-trip international airfare
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          All accommodation and meals
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Educational activities and site visits
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Tech company visits (NASA, Smithsonian)
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Living stipend and cultural activities
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Eligibility Requirements */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility Requirements</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Basic Requirements</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Ages 15-17 at program start</li>
                        <li>• Citizens/residents of eligible countries</li>
                        <li>• Strong interest in STEM fields</li>
                        <li>• Advanced intermediate English proficiency</li>
                        <li>• Good academic standing</li>
                        <li>• No prior coding experience required</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Personal Qualities</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Demonstrated leadership potential</li>
                        <li>• Community service experience</li>
                        <li>• Maturity and open-mindedness</li>
                        <li>• Commitment to community action project</li>
                        <li>• Limited prior U.S. experience (preferred)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Eligible Countries/Territories (37 total)</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Sub-Saharan Africa:</strong> Cameroon, Kenya, Nigeria, Rwanda, South Africa, Zambia<br/>
                        <strong>East Asia & Pacific:</strong> Cambodia, Fiji, Indonesia, Mongolia, Taiwan, Vietnam<br/>
                        <strong>Europe & Eurasia:</strong> Albania, Cyprus, Greece, Kosovo, Montenegro, Türkiye<br/>
                        <strong>Middle East & North Africa:</strong> Algeria, Egypt, Jordan, Lebanon, Morocco, Palestinian Territories, Tunisia<br/>
                        <strong>South & Central Asia:</strong> Kazakhstan, Kyrgyzstan, Pakistan, Tajikistan, Turkmenistan, Uzbekistan<br/>
                        <strong>Western Hemisphere:</strong> Brazil, Costa Rica, Ecuador, Panama, Peru, Suriname<br/>
                        <strong>United States:</strong> U.S. citizens and residents are also eligible
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Program Structure */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Structure</h2>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Phase 1: Tech Camp at Virginia Tech</h3>
                      <p className="text-gray-700">
                        Intensive technology camp featuring hands-on STEM training, lab visits, job shadowing with tech professionals, and leadership workshops.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Phase 2: Community Immersion</h3>
                      <p className="text-gray-700 mb-2">
                        Cultural immersion in U.S. cities including Austin, Cincinnati, Denver, Detroit, Kansas City, or Seattle. Experience host family life and visit major tech companies.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-accent pl-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Phase 3: Community Action Project</h3>
                      <p className="text-gray-700">
                        Upon returning home, implement a community-based STEM project such as starting tech clubs, teaching coding, or organizing career fairs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Application Information */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Information</h2>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-blue-900 mb-2">2026 Application Timeline</h3>
                    <ul className="text-blue-800 space-y-1">
                      <li>• Application Opens: Fall 2025</li>
                      <li>• Application Deadline: December 2025</li>
                      <li>• Notification: March 2026</li>
                      <li>• Program Dates: July 2026</li>
                    </ul>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Application Requirements</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Complete online application in English</li>
                        <li>• Personal portrait/headshot photo</li>
                        <li>• Most recent academic transcript</li>
                        <li>• Essays and personal statements</li>
                        <li>• All responses must be original work</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Selection Process</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Independent committee reviews applications</li>
                        <li>• U.S. embassy interviews for international candidates</li>
                        <li>• Legacy International interviews for U.S. candidates</li>
                        <li>• Final selection and notification</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            /* Generic scholarship content */
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Scholarship Details</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Field of Study</h3>
                    <p className="text-gray-700">{scholarship.field}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Eligibility</h3>
                    <p className="text-gray-700">{scholarship.eligibility}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Organization</h3>
                    <p className="text-gray-700">{scholarship.organizationName}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Application Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white flex-1"
            >
              <a href={scholarship.applicationUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Apply Now
              </a>
            </Button>
            
            {isTechGirls && (
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="flex-1"
              >
                <a href="https://techgirlsglobal.org/" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-5 h-5 mr-2" />
                  Visit TechGirls Website
                </a>
              </Button>
            )}
          </div>

          {/* Contact Information */}
          {isTechGirls && (
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
                <p className="text-gray-700">
                  For specific country inquiries, contact your local U.S. embassy or consulate. 
                  General program questions can be submitted through the TechGirls website contact form.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}