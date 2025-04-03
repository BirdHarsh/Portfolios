import { SplashCursor } from "@/components/ui/splash-cursor"
import { Gallery6 } from "@/components/gallery6";

export default function Home() {


  const demoData = {
    heading: "Featured Projects",
    demoUrl: "https://www.shadcnblocks.com",
    items: [
      {
        id: "item-1",
        title: "Build Modern UIs",
        summary:
          "Create stunning user interfaces with our comprehensive design system.",
        url: "#",
        image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
      },
      {
        id: "item-2",
        title: "Design System Components",
        summary:
          "Explore our library of customizable components built with shadcn/ui and Tailwind CSS.",
        url: "#",
        image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
      },
      {
        id: "item-3",
        title: "Responsive Layouts",
        summary:
          "Build websites that look great on any device with our responsive design patterns.",
        url: "#",
        image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
      },
      {
        id: "item-4",
        title: "Developer Experience",
        summary:
          "Streamline your workflow with our developer-friendly tools and documentation.",
        url: "#",
        image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
      },
      {
        id: "item-5",
        title: "Performance First",
        summary:
          "Create fast, optimized websites using our performance-focused components.",
        url: "#",
        image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
      },
    ],
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
  
   <Gallery6 {...demoData} />
   <SplashCursor/>
  </main>
  );
}






