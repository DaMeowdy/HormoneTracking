import { HomeWelcome } from "~/components/home/home-welcome";
import type { Route } from "./+types/home";
import { NextDose } from "~/components/home/next-dose";
import { WeeklyOverview } from "~/components/home/weekly-overview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="bg-gray-950">
      <HomeWelcome/>
      <NextDose/>
      <WeeklyOverview/>
    </div>
  );
}
