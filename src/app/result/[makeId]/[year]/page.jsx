// "use client";
import React, { Suspense } from 'react';
import Link from 'next/link';
import ModelsList from '@/app/components/ModelsList';
import Loader from '@/app/components/Loader';

export async function generateStaticParams() {
  console.log('sss');
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

export default async function ResultPage({ params }) {
  const { makeId, year } = await params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <Link
        href={'/'}
        className="absolute top-10 left-10 px-4 py-2 rounded shadow text-white bg-blue-500 hover:bg-blue-600"
      >
        &lt; Back
      </Link>
      <Suspense fallback={<Loader></Loader>}>
        <ModelsList makeId={makeId} year={year}></ModelsList>
      </Suspense>
    </div>
  );
}
