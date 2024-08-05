"use client";

import { useAppContext } from "@/context";
import { Intro } from "@/modules/intro";
import { Roulette } from "@/modules/roulette/roulette";
import { AppSkeleton } from "@/modules/skeleton";

export default function Home() {
  const {
    state: { loaded, people, selectedIndex, suspense },
  } = useAppContext();

  const person = loaded && typeof selectedIndex === "number" ? people[selectedIndex] : undefined;

  if (!loaded) {
    return <AppSkeleton />;
  }

  return person ? <Roulette person={person} /> : <Intro />;
}
