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
      className="w-full border-b"
      style={{ 
        backgroundColor: '#FAF7F2',
        borderBottomColor: '#E6DED5',
        height: '42px',
        marginTop: '8px',
        marginBottom: '8px',
        paddingTop: '4px',
        paddingBottom: '4px'
      }}
    >
      <div className="w-full px-4 md:px-6 h-full">
        <form onSubmit={handleSubmit} className="flex flex-row items-center h-full" style={{ gap: '12px' }}>
          {/* Text */}
          <p 
            className="flex-shrink-0"
            style={{ 
              fontSize: '12px',
              fontWeight: 600,
              color: '#333',
              marginRight: 'auto',
              whiteSpace: 'nowrap'
            }}
          >
            FREE GUIDE: Don't Book a Marrakech Villa Before Reading This
          </p>
          
          {/* Email input */}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={mutation.isPending}
            required
            data-testid="input-lead-email"
            className="px-3 border focus:outline-none focus:ring-1 focus:ring-opacity-50 flex-shrink-0"
            style={{
              height: '28px',
              borderRadius: '6px',
              width: '150px',
              fontSize: '12px',
              borderColor: '#D8D4CD'
            }}
          />
          
          {/* Button */}
          <button 
            type="submit" 
            disabled={mutation.isPending}
            data-testid="button-submit-lead"
            className="text-white transition-colors hover:opacity-90 disabled:opacity-50 flex-shrink-0"
            style={{
              backgroundColor: '#C48A3E',
              height: '30px',
              paddingLeft: '12px',
              paddingRight: '12px',
              borderRadius: '6px',
              fontSize: '12px'
            }}
          >
            {mutation.isPending ? "..." : "Get Guide"}
          </button>
        </form>
      </div>
    </section>
  );
}
