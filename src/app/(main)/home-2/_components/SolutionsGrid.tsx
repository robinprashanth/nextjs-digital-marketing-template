"use client";


export function SolutionsGrid() {
  const solutions = [
    { title: "WEB ANALYTICS" },
    { title: "EMAIL MARKETING" },
    { title: "SEO 2.0" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
       

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="border border-gray-800 rounded-2xl p-6"
            >
              <p className="text-sm">{solution.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 