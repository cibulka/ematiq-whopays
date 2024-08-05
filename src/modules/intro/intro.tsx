"use client";

import { IntroButton } from "./button";
import { PeopleList } from "./people-list";
import { IntroRange } from "./range";
import { IntroTitle } from "./title";

export function Intro() {
  return (
    <>
      <IntroRange />
      <IntroTitle />
      <IntroButton />
      <PeopleList />
    </>
  );
}
