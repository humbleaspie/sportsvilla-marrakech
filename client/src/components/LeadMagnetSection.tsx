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
        title: "Success",
        description: "One of our team will email you our expert guide shortly",
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
        backgroundColor: '#FFF7E9',
        width: '100%',
        paddingTop: '5px',
        paddingBottom: '5px',
        marginTop: '6px',
        marginBottom: '6px',
        borderBottom: '1px solid #E5DED3'
      }}
    >
      <div className="w-full px-4 md:px-6">
        {/* Header text - centered */}
        <div className="w-full text-center mb-1">
          <p 
            style={{ 
              fontSize: '10.8px',
              textAlign: 'center',
              color: '#6B583F',
              fontWeight: 700
            }}
          >
            MARRAKECH VILLAS - Avoid these 7 Mistakes!
          </p>
        </div>
        
        {/* Form - centered */}
        <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2">
          {/* Email input */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={mutation.isPending}
            required
            data-testid="input-lead-email"
            className="border focus:outline-none focus:ring-1 focus:ring-opacity-50"
            style={{
              height: '28px',
              borderRadius: '4px',
              width: '68%',
              maxWidth: '200px',
              fontSize: '16px',
              borderColor: '#DDD6CE',
              paddingLeft: '8px',
              boxSizing: 'border-box'
            }}
          />
          
          {/* Button */}
          <button 
            type="submit" 
            disabled={mutation.isPending}
            data-testid="button-submit-lead"
            className="transition-colors hover:opacity-90 disabled:opacity-50"
            style={{
              backgroundColor: '#C48A3E',
              color: 'white',
              height: '28px',
              minHeight: '28px',
              maxHeight: '28px',
              padding: '0 10px',
              borderRadius: '4px',
              fontSize: '12px',
              lineHeight: '1',
              boxSizing: 'border-box',
              border: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              verticalAlign: 'middle'
            }}
          >
            {mutation.isPending ? "..." : "Get My Free Guide"}
          </button>
        </form>
        
        {/* Trust badge text */}
        <div className="w-full text-center mt-1">
          <p 
            style={{ 
              fontSize: '10px',
              textAlign: 'center',
              color: '#6B583F',
              fontWeight: 400,
              opacity: 0.8,
              fontStyle: 'italic'
            }}
          >
            Trusted by 15,000+ Marrakech travellers since 2016
          </p>
        </div>
      </div>
    </section>
  );
}
