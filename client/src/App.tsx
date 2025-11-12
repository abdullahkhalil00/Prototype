import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Home from "@/pages/Home";
import CategoryPage from "@/pages/CategoryPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/personal">
        <CategoryPage category="Personal" />
      </Route>
      <Route path="/nature">
        <CategoryPage category="Nature" />
      </Route>
      <Route path="/art">
        <CategoryPage category="ART" />
      </Route>
      <Route path="/character">
        <CategoryPage category="Character" />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Navigation />
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
