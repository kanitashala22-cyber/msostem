import { Card, CardContent } from "@/components/ui/card";

const successStories = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Software Engineer at Google",
    location: "San Francisco",
    education: "Stanford CS '23",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    quote: "MsoSTEM gave me the confidence to pursue computer science. The supportive community and step-by-step approach made coding feel achievable for the first time.",
    gradientClass: "from-primary to-secondary"
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    title: "Founder of TechWomen Startup",
    location: "Austin",
    achievement: "$25K Scholarship",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    quote: "I discovered my passion for web development through MsoSTEM. Now I'm building platforms to help other women in tech connect and grow.",
    gradientClass: "from-secondary to-accent"
  },
  {
    id: 3,
    name: "Priya Patel",
    title: "UX Designer at Microsoft",
    location: "Seattle",
    achievement: "Career Changer",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    quote: "The HTML/CSS courses here opened my eyes to the beautiful intersection of design and code. It changed my entire career path!",
    gradientClass: "from-accent to-primary"
  }
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet amazing women who started their coding journey with us and are now making a difference in tech.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div 
              key={story.id}
              className={`bg-gradient-to-br ${story.gradientClass} p-1 rounded-2xl hover:scale-105 transition-transform duration-300`}
            >
              <Card className="bg-white rounded-2xl h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <img 
                    src={story.image} 
                    alt={`${story.name} - successful female developer`}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="text-center flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{story.name}</h3>
                    <p className={`text-sm font-medium mb-3 ${
                      story.gradientClass.includes('primary') ? 'text-primary' :
                      story.gradientClass.includes('secondary') ? 'text-secondary' :
                      'text-accent'
                    }`}>
                      {story.title}
                    </p>
                    <p className="text-gray-600 text-sm italic mb-4 flex-grow">
                      "{story.quote}"
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mt-auto">
                      <span>📍 {story.location}</span>
                      <span>
                        {story.education ? `🎓 ${story.education}` : `🎯 ${story.achievement}`}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
