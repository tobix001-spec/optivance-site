import { z } from "zod"

export const auditFormSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email required"),
    company: z.string().min(1, "Company name helps us prepare"),
    website: z.string().optional(),
    goals: z.string().min(10, "Share a few words about your goals (10+ chars)"),
    budget: z.enum(["under-5k", "5k-15k", "15k-50k", "50k-plus", "unsure"]),
  })
  .superRefine((data, ctx) => {
    const w = data.website?.trim()
    if (w && !/^https?:\/\/.+/i.test(w)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Enter a valid URL (https://...) or leave blank",
        path: ["website"],
      })
    }
  })

export type AuditFormValues = z.infer<typeof auditFormSchema>
