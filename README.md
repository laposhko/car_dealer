**#Next.js Vehicle Filter Application
## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Getting Started](#getting-started)
5. [Build and Deployment](#build-and-deployment)
6. [Environment Variables](#environment-variables)
7. [Application Architecture](#application-architecture)
8. [API Endpoints](#api-endpoints)
9. [Troubleshooting](#troubleshooting)
10. [Contributing](#contributing)

##Overview

This is a Next.js application that allows users to filter and view vehicle models based on their make and model year. The app includes two main pages:

Home Page: Users can select a vehicle make and model year using dropdowns. The "Next" button navigates to the result page.

Result Page: Displays vehicle models for the selected make and year.

The app is styled with Tailwind CSS and uses React's Suspense component for improved user experience during data fetching.

##Features

Dynamic Dropdowns: Fetches vehicle makes dynamically from the NHTSA API.

Year Selection: Supports years from 2015 to the current year.

Dynamic Routing: Navigates to a dynamically generated result page based on user selections.

Static Paths: Uses generateStaticParams for pre-rendering result pages.

Loading States: Implements React Suspense and a loading fallback.

Responsive Design: Styled with Tailwind CSS for a mobile-friendly layout.

##Prerequisites

Node.js (version 16 or higher)

npm or yarn package manager

##Getting Started

Clone the Repository

git clone <repository-url>
cd nextjs-vehicle-filter

Install Dependencies

npm install
# or
yarn install

Run the Development Server

npm run dev
# or
yarn dev

Open http://localhost:3000 in your browser to view the app.

##Build and Deployment

Build the Application

npm run build
# or
yarn build

Start the Production Server

npm start
# or
yarn start

You can also deploy the app to a hosting provider that supports Next.js, such as Vercel.

##Environment Variables

The app does not require any specific environment variables. However, you can configure them in a .env.local file if needed.

##Application Architecture

App Directory Structure: Leverages Next.js' app/ directory for routing and server-side rendering.

Data Fetching:

generateStaticParams: Generates static paths for result pages.

Fetching vehicle makes and models dynamically from NHTSA API.

React Suspense:

Used to display a loading fallback during data fetching.

Styling:

Tailwind CSS for responsive and consistent UI design.

##API Endpoints

Vehicle Makes

Endpoint: https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json

Vehicle Models by Make ID and Year

Endpoint: https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json

##Troubleshooting

No Vehicle Makes Displayed: Ensure you have an active internet connection and the NHTSA API is accessible.

Navigation Issues: Ensure both make and year are selected before clicking "Next."

Build Errors: Check Node.js and npm versions, and ensure all dependencies are installed.

##Contributing

Contributions are welcome! Please create an issue or submit a pull request with detailed information about the changes.
