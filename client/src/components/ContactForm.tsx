import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, MessageSquare, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertEnquirySchema, type InsertEnquiry } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertEnquiry>({
    resolver: zodResolver(insertEnquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const submitEnquiry = useMutation({
    mutationFn: async (data: InsertEnquiry) => {
      return await apiRequest("/api/enquiries", "POST", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again or contact us via WhatsApp.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertEnquiry) => {
    submitEnquiry.mutate(data);
  };

  if (isSubmitted) {
    return (
      <Card className="p-6 md:p-8 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-card-foreground">
            Thank You!
          </h3>
          <p className="text-muted-foreground mb-6">
            We've received your enquiry and will get back to you within 24 hours.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            data-testid="button-send-another"
          >
            Send Another Message
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4 md:p-8">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm md:text-base">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </Label>
            <Input
              id="name"
              placeholder="John Smith"
              {...form.register("name")}
              data-testid="input-name"
              className="text-sm md:text-base"
            />
            {form.formState.errors.name && (
              <p className="text-xs md:text-sm text-destructive">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm md:text-base">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...form.register("email")}
              data-testid="input-email"
              className="text-sm md:text-base"
            />
            {form.formState.errors.email && (
              <p className="text-xs md:text-sm text-destructive">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm md:text-base">
            <Phone className="w-4 h-4 inline mr-2" />
            Phone Number *
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+44 7700 900000"
            {...form.register("phone")}
            data-testid="input-phone"
            className="text-sm md:text-base"
          />
          {form.formState.errors.phone && (
            <p className="text-xs md:text-sm text-destructive">
              {form.formState.errors.phone.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm md:text-base">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Your Message *
          </Label>
          <Textarea
            id="message"
            placeholder="Tell us about your travel dates, group size, and any special requirements..."
            rows={5}
            {...form.register("message")}
            data-testid="input-message"
            className="text-sm md:text-base resize-none"
          />
          {form.formState.errors.message && (
            <p className="text-xs md:text-sm text-destructive">
              {form.formState.errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full text-sm md:text-base"
          disabled={submitEnquiry.isPending}
          data-testid="button-submit-enquiry"
        >
          {submitEnquiry.isPending ? (
            <>
              <Loader2 className="w-4 h-4 md:w-5 md:h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Send Enquiry
            </>
          )}
        </Button>

        <p className="text-xs md:text-sm text-center text-muted-foreground">
          We'll respond within 24 hours. For urgent enquiries, WhatsApp us directly.
        </p>
      </form>
    </Card>
  );
}
