# Next.js Vehicle Filter Application

 ## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Getting Started](#getting-started)
5. [Build and Deployment](#build-and-deployment)
6. [Environment Variables](#environment-variables)
7. [Application Architecture](#application-architecture)
8. [API Endpoints](#api-endpoints)

## Overview

This is a Next.js application that allows users to filter and view vehicle models based on their make and model year. The app includes two main pages:

**Home Page**: Users can select a vehicle make and model year using dropdowns. The "Next" button navigates to the result page.

**Result Page**: Displays vehicle models for the selected make and year.

The app is styled with Tailwind CSS and uses React's Suspense component for improved user experience during data fetching.

## Features

**Dynamic Dropdowns**: Fetching vehicles is made dynamically.

**Year Selection**: Supports years from 2015 to the current year.

**Dynamic Routing**: Navigate to a dynamically generated result page based on user selections.

**Static Paths**: Uses generateStaticParams for pre-rendering result pages.

**Loading States**: Implements React Suspense and a loading fallback.

**Responsive Design**: Styled with Tailwind CSS for a mobile-friendly layout.

## Prerequisites

Node.js (version 16 or higher)

npm or yarn package manager

## Getting Started

**Clone the Repository**

git clone https://github.com/laposhko/car_dealer.git
cd <your-local-path-to-project>

**Install Dependencies**
```bash
npm install
# or
yarn install
```

**Run the Development Server**
```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser to view the app.

## Build and Deployment

Build the Application
```bash
npm run build
# or
yarn build
```
Start the Production Server
```bash
npm start
# or
yarn start
```
You can also deploy the app to a hosting provider that supports Next.js, such as Vercel.

## Environment Variables

The app does not require any specific environment variables. However, you can configure them in a .env.local file if needed.

## Application Architecture

**App Directory Structure**: Leverages Next.js' app/ directory for routing and server-side rendering.

**Data Fetching**:

generateStaticParams: Generates static paths for result pages.

Fetching vehicle makes and models dynamically from NHTSA API.

**React Suspense**:

Used to display a loading fallback during data fetching.

**Styling**:

Tailwind CSS for responsive and consistent UI design.

## API Endpoints

**Vehicle Makes**

Endpoint: https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json

**Vehicle Models by Make ID and Year**

Endpoint: https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json

