import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "10+ Projects Completed",
    "3+ Years of Freelancing",
    "Received 2 'Outstanding(7/7)' ratings in 4 CS co-op terms",
    "Awarded for Academic Excellence",
    "Boardgame Developer",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
