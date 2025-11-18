import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { Gift } from "lucide-react";

export default function LeadMagnetSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (emailAddress: string) => {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailAddress })
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit email');
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Check your email for the free guide.",
      });
      setEmail("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send guide. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      mutation.mutate(email);
    } else {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-2 bg-card border-y border-border">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3">
          {/* Left: Heading with icon */}
          <div className="flex items-center gap-2 text-center md:text-left">
            <Gift className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <p className="text-xs md:text-sm text-foreground">
              <span className="font-bold text-foreground">FREE GUIDE:</span> <span className="font-normal">Don't Book a Marrakech Villa Before Reading this</span>
            </p>
          </div>
          
          {/* Right: Email form */}
          <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto md:min-w-[280px]">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={mutation.isPending}
              className="flex-1 text-base h-8"
              data-testid="input-lead-email"
              required
            />
            <Button 
              type="submit" 
              disabled={mutation.isPending}
              size="sm"
              className="text-xs whitespace-nowrap h-8"
              data-testid="button-submit-lead"
            >
              {mutation.isPending ? "..." : "Get Guide"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
