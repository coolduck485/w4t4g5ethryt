import { Marquee } from "@/components/marquee";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CEO at TechCorp",
    content:
      "An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Bob Smith",
    role: "Project Manager at InnovateCo",
    content:
      "Working with this developer was a pleasure. They have a great understanding of modern web technologies and always meet deadlines.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Carol Williams",
    role: "Lead Designer at CreativeStudio",
    content:
      "Their ability to translate designs into pixel-perfect, responsive websites is impressive. A true professional in every sense.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="min-h-screen py-20 px-4 bg-black">
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-heading text-foreground">
          Testimonials
        </h2>

        {/* Marquee with 1 row */}
        <Marquee pauseOnHover={true} speed={50} gradient={false} className="overflow-hidden">
          <div className="flex space-x-4"> {/* Flex for single row */}
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="mx-2">
                <Card
                  className={cn(
                    "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                  )}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Marquee>

        {/* Subtle gradient on sides */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white opacity-50 dark:from-background dark:opacity-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white opacity-100 dark:from-background dark:opacity-10"></div>
      </div>
    </section>
  );
}
