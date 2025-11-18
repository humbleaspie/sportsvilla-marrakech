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
      className="w-full"
      style={{ 
        backgroundColor: '#FFF9F3',
        width: '100%',
        paddingTop: '5px',
        paddingBottom: '5px',
        marginTop: '6px',
        marginBottom: '6px'
      }}
    >
      <div className="w-full px-4 md:px-6">
        {/* Header text - centered */}
        <div className="w-full text-center mb-1">
          <p 
            style={{ 
              fontSize: '12px',
              fontWeight: 600,
              textAlign: 'center',
              color: '#6B583F'
            }}
          >
            FREE GUIDE - How to Choose the Right Marrakech Villa
          </p>
        </div>
        
        {/* Form - centered */}
        <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2">
          {/* Email input */}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={mutation.isPending}
            required
            data-testid="input-lead-email"
            className="border focus:outline-none focus:ring-1 focus:ring-opacity-50"
            style={{
              height: '34px',
              borderRadius: '6px',
              width: '68%',
              maxWidth: '240px',
              fontSize: '16px',
              borderColor: '#DDD6CE',
              paddingLeft: '10px'
            }}
          />
          
          {/* Button */}
          <button 
            type="submit" 
            disabled={mutation.isPending}
            data-testid="button-submit-lead"
            className="text-white transition-colors hover:opacity-90 disabled:opacity-50"
            style={{
              backgroundColor: '#C48A3E',
              color: 'white',
              height: '34px',
              paddingLeft: '12px',
              paddingRight: '12px',
              borderRadius: '6px',
              fontSize: '13px'
            }}
          >
            {mutation.isPending ? "..." : "Get Guide"}
          </button>
        </form>
      </div>
    </section>
  );
}
