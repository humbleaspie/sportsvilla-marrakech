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
        width: '100%',
        paddingTop: '10px',
        paddingBottom: '10px',
        marginTop: '10px',
        marginBottom: '10px'
      }}
    >
      <div className="w-full px-4 md:px-6">
        {/* Line 1: Text - centered, full width */}
        <div className="w-full text-center mb-2">
          <p 
            style={{ 
              fontSize: '13px',
              fontWeight: 600,
              textAlign: 'center',
              color: '#333',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            FREE GUIDE: Don't Book a Marrakech Villa Before Reading This
          </p>
        </div>
        
        {/* Line 2: Form - centered, prevents overflow */}
        <form onSubmit={handleSubmit} className="flex justify-center items-center flex-wrap">
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
              height: '32px',
              borderRadius: '6px',
              width: '70%',
              maxWidth: '260px',
              minWidth: '150px',
              fontSize: '13px',
              borderColor: '#D8D4CD',
              marginRight: '8px'
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
              color: 'white',
              height: '32px',
              paddingLeft: '14px',
              paddingRight: '14px',
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
