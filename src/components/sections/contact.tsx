"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Clock, Mail } from "lucide-react"
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
import type { AuditFormValues } from "@/lib/schemas/contact"
import { auditFormSchema } from "@/lib/schemas/contact"
import { SITE } from "@/lib/site-config"

const BUDGET_OPTIONS: { value: AuditFormValues["budget"]; label: string }[] = [
  { value: "under-5k", label: "Under £5k" },
  { value: "5k-8k", label: "£5k – £8k" },
  { value: "8k-15k", label: "£8k – £15k" },
  { value: "15k-plus", label: "£15k+" },
  { value: "unsure", label: "Not sure yet" },
]

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
            Ready to fix your jewelry e-commerce?
          </h2>
          <p className="mt-3 text-zinc-400">
            Book a 20-minute discovery call or send a message. I'll review your
            current setup and tell you exactly what's possible.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            {SITE.calendlyUrl ? (
              <div className="rounded-lg border border-white/10 bg-[#121820]/60 p-4">
                <p className="text-sm font-medium text-white">
                  Book a discovery call
                </p>
                <p className="mt-1 text-xs text-zinc-400">
                  20 minutes · free · no obligation
                </p>
                <a
                  href={SITE.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-500"
                >
                  Open Calendly
                </a>
              </div>
            ) : (
              <div className="rounded-lg border border-white/10 bg-[#121820]/60 p-4">
                <p className="text-sm font-medium text-white">
                  Book a discovery call
                </p>
                <p className="mt-1 text-xs text-zinc-400">
                  20 minutes · free · no obligation
                </p>
                <p className="mt-3 text-xs text-zinc-500 italic">
                  Calendly link coming soon — use the form for now.
                </p>
              </div>
            )}

            <div className="rounded-lg border border-white/10 bg-[#121820]/60 p-4 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-sky-400" />
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm text-zinc-400 hover:text-sky-400"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-sky-400" />
                <div>
                  <p className="text-sm font-medium text-white">Response time</p>
                  <p className="text-sm text-zinc-400">Same day</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-white/10 bg-[#121820]/80 lg:col-span-3">
            <CardHeader>
              <CardTitle className="font-heading text-base text-white">
                Send a message
              </CardTitle>
              <CardDescription className="text-zinc-500">
                Tell me about your jewelry business
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
                      <p className="text-xs text-red-400">
                        {errors.name.message}
                      </p>
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
                      <p className="text-xs text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-zinc-300">
                    Company / Brand name
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
                    Current website (optional)
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
                    Tell me about your jewelry business and what you're trying to
                    solve
                  </Label>
                  <Textarea
                    id="goals"
                    rows={4}
                    className="border-white/15 bg-white/5 text-white"
                    {...register("goals")}
                  />
                  {errors.goals && (
                    <p className="text-xs text-red-400">
                      {errors.goals.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label className="text-zinc-300">
                    Budget range (optional)
                  </Label>
                  <select
                    className="flex h-9 w-full rounded-lg border border-white/15 bg-white/5 px-2.5 text-sm text-white outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    {...register("budget")}
                  >
                    {BUDGET_OPTIONS.map((o) => (
                      <option
                        key={o.value}
                        value={o.value}
                        className="bg-[#121820]"
                      >
                        {o.label}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-xs text-red-400">
                      {errors.budget.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-sky-600 text-white hover:bg-sky-500"
                >
                  Send message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
