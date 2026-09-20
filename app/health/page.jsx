export const dynamic = "force-dynamic";

export default async function HealthPage() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Health check failed");
  }

  const data = await response.json();

  return (
    <main>
      <h1>Health Check</h1>
      <p>Recipe API is responding successfully.</p>
      <p>Fetched recipes: {data.meals ? data.meals.length : 0}</p>
    </main>
  );
}