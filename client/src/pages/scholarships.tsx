import { useState } from "react";
import Navbar from "@/components/navbar";
import ScholarshipCard from "@/components/scholarship-card";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import type { Scholarship } from "@shared/schema";

export default function Scholarships() {
  const [filters, setFilters] = useState({
    search: "",
    field: "",
    amount: "",
    deadline: "",
  });

  const { data: scholarships, isLoading } = useQuery<Scholarship[]>({
    queryKey: ["/api/scholarships", filters.field, filters.amount, filters.deadline, filters.search],
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      field: "",
      amount: "",
      deadline: "",
    });
  };

  const filteredCount = scholarships?.length || 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tech <span className="gradient-text">Scholarships</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover funding opportunities that can help you pursue your dreams in technology and computer science.
            </p>
          </div>
          
          {/* Scholarship Filters */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                    Search
                  </Label>
                  <div className="relative">
                    <Input
                      id="search"
                      type="text"
                      placeholder="Search scholarships..."
                      value={filters.search}
                      onChange={(e) => handleFilterChange("search", e.target.value)}
                      className="pl-10"
                    />
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">
                    Field of Study
                  </Label>
                  <Select value={filters.field} onValueChange={(value) => handleFilterChange("field", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Fields" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Fields</SelectItem>
                      <SelectItem value="Computer Science">Computer Science</SelectItem>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="Software Engineering">Software Engineering</SelectItem>
                      <SelectItem value="Data Science">Data Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">
                    Award Amount
                  </Label>
                  <Select value={filters.amount} onValueChange={(value) => handleFilterChange("amount", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Amount" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any Amount</SelectItem>
                      <SelectItem value="$1,000 - $5,000">$1,000 - $5,000</SelectItem>
                      <SelectItem value="$5,000 - $10,000">$5,000 - $10,000</SelectItem>
                      <SelectItem value="$10,000+">$10,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">
                    Deadline
                  </Label>
                  <Select value={filters.deadline} onValueChange={(value) => handleFilterChange("deadline", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Deadlines" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Deadlines</SelectItem>
                      <SelectItem value="Next 30 days">Next 30 days</SelectItem>
                      <SelectItem value="Next 3 months">Next 3 months</SelectItem>
                      <SelectItem value="Next 6 months">Next 6 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <p className="text-gray-600">
                  Showing {filteredCount} scholarships
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : scholarships && scholarships.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scholarships.map((scholarship) => (
                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No scholarships found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters to find more opportunities.
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
