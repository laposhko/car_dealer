// "use client";
import { Suspense } from 'react';
import ModelsList from '@/app/components/ModelsList';
import Loader from '@/app/components/Loader';

export async function generateStaticParams() {
  const makesRes = await fetch(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
  );
  const makes = await makesRes.json();
  const years = Array.from(
    { length: new Date().getFullYear() - 2015 + 1 },
    (_, i) => 2015 + i
  );

  return (
    makes &&
    makes.Results.flatMap((make) =>
      years.map((year) => ({
        makeId: make.MakeId.toString(),
        year: year.toString(),
      }))
    )
  );
}

export default function ResultPage({ params }) {
  const { makeId, year } = params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">
        Vehicle Models for Make ID: {makeId} and Year: {year}
      </h1>
      <Suspense fallback={<Loader></Loader>}>
        <ModelsList makeId={makeId} year={year}></ModelsList>
      </Suspense>
    </div>
  );
}
