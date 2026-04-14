import { z } from "zod"

export const auditFormSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email required"),
    company: z.string().min(1, "Brand name helps me prepare"),
    website: z.string().optional(),
    goals: z
      .string()
      .min(10, "Tell me a bit about your business (10+ chars)"),
    budget: z.enum(["under-5k", "5k-8k", "8k-15k", "15k-plus", "unsure"]),
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
