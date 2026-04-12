"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { TESTIMONIALS } from "@/lib/data/testimonials"
import type { AuditFormValues } from "@/lib/schemas/contact"
import { auditFormSchema } from "@/lib/schemas/contact"
import { SITE } from "@/lib/site-config"

const BUDGET_OPTIONS: { value: AuditFormValues["budget"]; label: string }[] = [
  { value: "under-5k", label: "Under $5k" },
  { value: "5k-15k", label: "$5k – $15k" },
  { value: "15k-50k", label: "$15k – $50k" },
  { value: "50k-plus", label: "$50k+" },
  { value: "unsure", label: "Not sure yet" },
]

const QUOTES = TESTIMONIALS.slice(4, 6)

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuditFormValues>({
    resolver: zodResolver(auditFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      goals: "",
      budget: "unsure",
    },
  })

  const onSubmit = (data: AuditFormValues) => {
    console.log("Contact form:", data)
    reset()
  }

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Contact {SITE.name}
          </h2>
          <p className="mt-3 text-zinc-400">
            Tell us what you need. We usually reply within two business days.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            {QUOTES.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-lg border border-white/10 bg-[#121820]/60 p-4 text-sm text-zinc-400"
              >
                <p className="text-zinc-300">“{t.quote}”</p>
                <footer className="mt-3 text-xs text-zinc-500">
                  — {t.name}, {t.company}
                </footer>
              </blockquote>
            ))}
          </div>

          <Card className="border-white/10 bg-[#121820]/80 lg:col-span-3">
            <CardHeader>
              <CardTitle className="font-heading text-base text-white">
                Send a message
              </CardTitle>
              <CardDescription className="text-zinc-500">
                {SITE.email}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-zinc-300">
                      Name
                    </Label>
                    <Input
                      id="name"
                      className="border-white/15 bg-white/5 text-white"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="border-white/15 bg-white/5 text-white"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-zinc-300">
                    Company
                  </Label>
                  <Input
                    id="company"
                    className="border-white/15 bg-white/5 text-white"
                    {...register("company")}
                  />
                  {errors.company && (
                    <p className="text-xs text-red-400">
                      {errors.company.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-zinc-300">
                    Website (optional)
                  </Label>
                  <Input
                    id="website"
                    placeholder="https://"
                    className="border-white/15 bg-white/5 text-white"
                    {...register("website")}
                  />
                  {errors.website && (
                    <p className="text-xs text-red-400">
                      {errors.website.message as string}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goals" className="text-zinc-300">
                    What are you trying to solve?
                  </Label>
                  <Textarea
                    id="goals"
                    rows={4}
                    className="border-white/15 bg-white/5 text-white"
                    {...register("goals")}
                  />
                  {errors.goals && (
                    <p className="text-xs text-red-400">{errors.goals.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label className="text-zinc-300">Budget (rough idea)</Label>
                  <select
                    className="flex h-9 w-full rounded-lg border border-white/15 bg-white/5 px-2.5 text-sm text-white outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    {...register("budget")}
                  >
                    {BUDGET_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value} className="bg-[#121820]">
                        {o.label}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-xs text-red-400">{errors.budget.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-sky-600 text-white hover:bg-sky-500"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
