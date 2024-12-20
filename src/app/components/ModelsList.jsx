export default async function ModelsList({ makeId, year }) {
  const res = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  const data = await res.json();

  // check and remove dublicates from result array
  const uniqueModels = data.Results.filter(
    (model, index, self) =>
      index === self.findIndex((m) => m.Model_ID === model.Model_ID)
  );

  return !uniqueModels || uniqueModels.length === 0 ? (
    <h1 className="text-2xl font-bold mb-4">
      No models found for Make ID: {makeId} and Year: {year}
    </h1>
  ) : (
    <>
      <h1 className="text-2xl font-bold mb-4">
        Found Vehicle Models for {uniqueModels[0].Make_Name} in {year} year
      </h1>
      <ul className="w-full max-w-lg p-4 bg-white rounded-lg shadow-md">
        {uniqueModels.map((model) => (
          <li key={model.Model_ID} className="mb-2">
            {model.Model_Name}
          </li>
        ))}
      </ul>
    </>
  );
}
