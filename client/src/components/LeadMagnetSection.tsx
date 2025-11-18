import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

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
    <section 
      className="w-full border-b py-2"
      style={{ 
        backgroundColor: '#F8F4EF',
        borderBottomColor: '#E8E1D9',
        minHeight: '45px',
        maxHeight: '55px'
      }}
    >
      <div className="w-full px-4 md:px-6 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 h-full">
          {/* Left: Text */}
          <p 
            className="text-left"
            style={{ 
              fontSize: '13px',
              fontWeight: 500,
              color: '#3A3A3A'
            }}
          >
            <span style={{ fontWeight: 600 }}>FREE GUIDE:</span> Don't Book a Marrakech Villa Before Reading This
          </p>
          
          {/* Right: Email form */}
          <form onSubmit={handleSubmit} className="flex gap-2 flex-shrink-0">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={mutation.isPending}
              required
              data-testid="input-lead-email"
              className="px-3 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{
                height: '32px',
                borderRadius: '6px',
                minWidth: '200px',
                fontSize: '13px'
              }}
            />
            <button 
              type="submit" 
              disabled={mutation.isPending}
              data-testid="button-submit-lead"
              className="px-4 font-medium text-white transition-colors hover:opacity-90 disabled:opacity-50"
              style={{
                backgroundColor: '#C48A3E',
                height: '32px',
                borderRadius: '6px',
                fontSize: '13px'
              }}
            >
              {mutation.isPending ? "..." : "Get Guide"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
