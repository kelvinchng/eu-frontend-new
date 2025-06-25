'use client'

import { ContactForm } from '@/components/ui/forms/contact-form'

export function ContactFormWrapper() {
  const handleSubmit = (data: any) => {
    console.log('Contact form submitted:', data)
    // Handle form submission logic here
  }

  return <ContactForm onSubmit={handleSubmit} />
}