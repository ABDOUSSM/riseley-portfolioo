"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { submitContactForm } from "@/lib/api"

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormProps = {
  onMouseEnter: () => void
  onMouseLeave: () => void
  textEnter: () => void
  buttonEnter: () => void
  defaultEnter: () => void
}

export function ContactForm({ 
  onMouseEnter, 
  onMouseLeave, 
  textEnter, 
  buttonEnter, 
  defaultEnter 
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  })

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    try {
      // Submit form data directly to API without transforming
      const response = await submitContactForm(values)
      
      // Show success message
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
        variant: "default",
      })
      
      // Reset form
      form.reset()
    } catch (error) {
      // Show error message
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel
                  onMouseEnter={textEnter}
                  onMouseLeave={defaultEnter}
                >
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your first name"
                    className="transition-all duration-300 focus:border-primary input-glow"
                    onMouseEnter={textEnter}
                    onMouseLeave={defaultEnter}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel
                  onMouseEnter={textEnter}
                  onMouseLeave={defaultEnter}
                >
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your last name"
                    className="transition-all duration-300 focus:border-primary input-glow"
                    onMouseEnter={textEnter}
                    onMouseLeave={defaultEnter}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel
                onMouseEnter={textEnter}
                onMouseLeave={defaultEnter}
              >
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="transition-all duration-300 focus:border-primary input-glow"
                  onMouseEnter={textEnter}
                  onMouseLeave={defaultEnter}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel
                onMouseEnter={textEnter}
                onMouseLeave={defaultEnter}
              >
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your message"
                  className="min-h-[120px] transition-all duration-300 focus:border-primary input-glow"
                  onMouseEnter={textEnter}
                  onMouseLeave={defaultEnter}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          className="w-full hover:scale-105 transition-transform duration-300 animate-pulse magnetic-button"
          onMouseEnter={buttonEnter}
          onMouseLeave={defaultEnter}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  )
}