export type Story = {
  title: string
  image: string
  alt: string
  content: string
}

export const stories: Story[] = [
  {
    title: "Nashville Team Completes Service Project",
    image: "/images/nashville-team.png",
    alt: "Nashville team completing service project",
    content: "Nashville associates partnered with Carol's Aid to host an event for underserved youth. The entire event funding was covered by funding from our First Horizon Foundation. An investment team building activity, the occasion was focused on mentoring and banking skills while giving back to children in need. They presented life skills to first grade students at a local school and hosted sessions on health, safety and financial literacy."
  },
  {
    title: "Teach Children to Save Day",
    image: "/images/teach-children.jpg",
    alt: "Teaching children about financial literacy",
    content: "First Horizon participated in the American Bankers Association's nationwide \"Teach Children to Save Day\" project providing financial literacy skills to more than 7,000 students. In April, over 300 First Horizon bankers volunteered to teach financial literacy classes at First Horizon Foundation partner organizations. Teams worked to instill essential money management skills and promote the value of saving from an early age."
  },
  {
    title: "Mobile Food Pantry",
    image: "/images/food-pantry.png",
    alt: "Mobile food pantry distribution event",
    content: "Members of our Memphis-based Commercial Banking team partnered with the Mid-South Food Nutrition Center, an organization dedicated to providing sustainability to those most vulnerable, with a First Horizon Foundation donation. Through our partnership with the Mid South Food Bank, the NCC and our associates worked to distribute food to more than 300 families in need through a mobile food pantry."
  }
] as const 