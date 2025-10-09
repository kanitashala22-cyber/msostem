import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { University, Calendar, GraduationCap, MapPin } from "lucide-react";
import { Link } from "wouter";
import type { Scholarship } from "@shared/schema";
import { useLanguage } from "@/contexts/LanguageContext";

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

export default function ScholarshipCard({ scholarship }: ScholarshipCardProps) {
  const { t } = useLanguage();
  
  // Get translated content with proper type assertion
  const scholarshipContent = (t.scholarshipContent as any)[scholarship.id];
  const displayTitle = scholarshipContent?.title || scholarship.title;
  const displayDescription = scholarshipContent?.description || scholarship.description;
  const displayField = scholarshipContent?.field || scholarship.field;
  const displayLocation = scholarshipContent?.location || scholarship.location;
  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800";
      case "closing_soon":
        return "bg-orange-100 text-orange-800";
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "closed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "open":
        return "Open";
      case "closing_soon":
        return "Closing Soon";
      case "upcoming":
        return "Upcoming";
      case "closed":
        return "Closed";
      default:
        return status;
    }
  };

  const getButtonColor = (index: number) => {
    const colors = [
      "bg-primary hover:bg-primary/90",
      "bg-secondary hover:bg-secondary/90",
      "bg-accent hover:bg-accent/90",
      "bg-green-500 hover:bg-green-600",
      "bg-purple-500 hover:bg-purple-600",
      "bg-indigo-500 hover:bg-indigo-600",
    ];
    return colors[index % colors.length];
  };

  const getIconColor = (index: number) => {
    const colors = [
      "from-primary to-secondary",
      "from-secondary to-accent",
      "from-accent to-primary",
      "from-green-500 to-blue-500",
      "from-purple-500 to-pink-500",
      "from-indigo-500 to-purple-500",
    ];
    return colors[index % colors.length];
  };

  // Generate a consistent index based on scholarship ID
  const index = scholarship.id ? parseInt(scholarship.id.slice(-1)) || 0 : 0;

  return (
    <Card className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 bg-gradient-to-r ${getIconColor(index)} rounded-lg flex items-center justify-center`}
          >
            <University className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-success">
              ${scholarship.amount.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">Award Amount</div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {displayTitle}
        </h3>
        <p className="text-gray-600 mb-4">{displayDescription}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            <span>
              {t.home.scholarships.deadline}: {new Date(scholarship.deadline).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <GraduationCap className="w-4 h-4 mr-2 text-primary" />
            <span>{displayField}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            <span>{displayLocation}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(scholarship.status)}`}
          >
            {getStatusText(scholarship.status)}
          </span>
          {scholarship.status === "closed" ? (
            <Button
              className="bg-gray-400 text-white cursor-not-allowed"
              disabled
            >
              Applications Closed
            </Button>
          ) : (
            <Link href={`/scholarships/${scholarship.id}`}>
              <Button className={`${getButtonColor(index)} text-white`}>
                View Details
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
