import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Card } from "./Card";

export function Hero() {
  return (
    <HeroHighlight>
      <Card />
      <p className="text-white hidden sm:block font-[500] text-sm text-center">
        Author - Nikola Dojcinovic
      </p>
    </HeroHighlight>
  );
}
