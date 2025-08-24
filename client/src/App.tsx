//import { Switch, Route } from "wouter";
/*import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Courses from "@/pages/courses";
import CourseDetail from "@/pages/course-detail";
import Scholarships from "@/pages/scholarships";
import Playground from "@/pages/playground";
import ScholarshipDetails from "@/pages/scholarship-details"; // Create this page
import { Route } from "wouter";
import { Route, Switch } from "wouter";
import Home from "./Home";
import ScholarshipDetails from "./ScholarshipDetails";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/scholarships/:id" component={ScholarshipDetails} />
      <Route>404 Page Not Found</Route>
    </Switch>
  );
}

//import React, { FunctionComponent, ReactElement, MouseEventHandler } from "react";

function Router() {
  return (
    <Route>
      <Route path="/" component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/course/:id" component={CourseDetail} />
      <Route path="/scholarships" component={Scholarships} />
      <Route path="/playground" component={Playground} />
      <Route component={NotFound} />
    </Route>
  );
}

// Example: App.tsx

function App() {
  return (
    <><>
      {/* ...other routes... }
      <Route path="/scholarships/:id" component={ScholarshipDetails} /> 
    </>
      //  );
      //  return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider></>
  );
}  

export default App; */

import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Courses from "@/pages/courses";
import CourseDetail from "@/pages/course-detail";
import Scholarships from "@/pages/scholarships";
import Playground from "@/pages/playground";
import ScholarshipDetails from "@/pages/scholarship-details";

import { Route, Switch } from "wouter";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/course/:id" component={CourseDetail} />
          <Route path="/scholarships" component={Scholarships} />
          <Route path="/scholarships/:id" component={ScholarshipDetails} />
          <Route path="/playground" component={Playground} />
          <Route component={NotFound} />
        </Switch>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

