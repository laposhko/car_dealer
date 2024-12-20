export default async function ModelsList({ makeId, year }) {
  const res = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  const data = await res.json();

  if (!data.Results || data.Results.length === 0) {
    return (
      <p className="text-lg font-medium text-red-500">
        No models found for Make ID: {makeId} and Year: {year}
      </p>
    );
  }

  return (
    <ul className="w-full max-w-lg p-4 bg-white rounded-lg shadow-md">
      {data.Results.map((model) => (
        <li key={model.Model_ID} className="mb-2">
          {model.Model_Name}
        </li>
      ))}
    </ul>
  );
}
