export type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
  /** Short tag, e.g. industry or outcome */
  metric: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Our new site finally looks like the business we are. Enquiries are up and people actually understand what we sell.",
    name: "Elena Marsh",
    role: "Owner",
    company: "Independent retail",
    metric: "E-commerce",
  },
  {
    quote:
      "They rebuilt our booking flow and added a chatbot for FAQs. My team spends less time on the same five questions.",
    name: "James Okafor",
    role: "Operations lead",
    company: "Health & wellness studio",
    metric: "Automation",
  },
  {
    quote:
      "Fast, professional, and easy to work with. We got a landing page and integrations without a six-month project.",
    name: "Priya Nandakumar",
    role: "Founder",
    company: "B2B consultancy",
    metric: "Website + tools",
  },
  {
    quote:
      "Clear communication from day one. The storefront handles our catalog and checkout exactly how we pictured it.",
    name: "Tom Hughes",
    role: "Co-founder",
    company: "Online brand",
    metric: "Storefront",
  },
  {
    quote:
      "Worth every penny—our old site embarrassed us. Now we’re proud to send clients the link.",
    name: "Sarah Cole",
    role: "Director",
    company: "Creative agency",
    metric: "Website redesign",
  },
  {
    quote:
      "They connected our forms to email and the CRM so nothing falls through the cracks anymore.",
    name: "Marcus Webb",
    role: "Owner",
    company: "Local services",
    metric: "Integrations",
  },
]
