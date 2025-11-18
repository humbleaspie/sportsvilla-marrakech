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
    <section className="py-3 md:py-4 bg-primary/5 border-y border-primary/10">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Left: Heading with icon */}
          <div className="flex items-center gap-2 text-center md:text-left">
            <Gift className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
            <h3 className="font-semibold text-xs md:text-sm text-foreground">
              <span className="text-primary font-bold">FREE GUIDE:</span> Don't Book a Marrakech Villa Before Reading this
            </h3>
          </div>
          
          {/* Right: Email form */}
          <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto md:min-w-[300px]">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={mutation.isPending}
              className="flex-1 text-xs md:text-sm h-8"
              data-testid="input-lead-email"
              required
            />
            <Button 
              type="submit" 
              disabled={mutation.isPending}
              size="sm"
              className="text-xs md:text-sm whitespace-nowrap"
              data-testid="button-submit-lead"
            >
              {mutation.isPending ? "Sending..." : "Get Guide"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
