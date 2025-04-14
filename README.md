## Backend:  Node.js + Express + TypeScript
Directory: `server`
Uses:
- Node
- Express
- TypeScript
- Jest + Supertest for testing

### Start server
- Run using `npm run dev`

### Log
- Initialized NPM project: `npm init -y`
- Installed dependencies: `npm install express cors dotenv`
- Installed dev dependencies: `npm install -D typescript ts-node nodemon`
- Added Typescript type definitions for node and express: `npm install @types/node @types/express @types/cors`
- Created tsconfig.json:`npx tsc --init`
  - `npx` runs the `tsc` command without having to install it globally
- Added Jest and Supertest for testing:
  - `npm install -D jest ts-jest supertest @types/jest`
- Set up database:
  - Installed and initialized Prisma (ORM):
  `npm install prisma --save-dev`<br>
  `npm install @prisma/client`<br>
  `npx prisma init`

## Frontend:  React + TypeScript + Vite
Directory: `client`
Uses:
- Node
- React + Vite
- TypeScript
- Vitest + React Testing Library for testing

### Log
- Created Vite project:
`npm create vite@latest . -- --template react-ts`
- Install devDepnendencies:
`npm install -D typescript ts-node nodemon`
- Install testing tools (Vitest + React Testing Library)
`npm install -D vitest @testing-library/react @testing-library/jest-dom`
<br>
<br>
<br>

# ChatGPT Summary:
# 🐞 Bug Tracker App — Project Setup Summary

A full-stack bug tracking application built with TypeScript, React, Node.js, and PostgreSQL. Includes automated testing with Vitest and Playwright.

---

## 🧱 Project Structure

bug-tracker/ ├── client/ ← Frontend (React + Vite) ├── server/ ← Backend (Node.js + Express + PostgreSQL) ├── package.json ← Root-level config (if needed)


---

## 🔧 Backend Setup (`/server`)

### ✅ Init + Install

```bash
mkdir server
cd server
npm init -y
npm install express cors dotenv
npm install -D typescript ts-node @types/node @types/express @types/cors nodemon
npx tsc --init

✅ Folder Structure

server/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── tests/
│   └── index.ts
├── tsconfig.json
├── package.json

✅ Express Server (src/index.ts)

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Bug Tracker API is running 🎯');
});

export default app;

✅ Scripts (package.json)

"scripts": {
  "dev": "nodemon src/index.ts",
  "build": "tsc"
}

🧪 Backend Testing with Jest + Supertest
✅ Install Testing Tools

npm install -D jest ts-jest @types/jest supertest
npx ts-jest config:init

✅ jest.config.js

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
};

✅ Sample Test (src/tests/sample.test.ts)

import request from 'supertest';
import app from '../index';

describe('Health Check', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Bug Tracker API is running 🎯');
  });
});

🖥️ Frontend Setup (/client)
✅ Create Vite + React App

npm create vite@latest client -- --template react-ts
cd client
npm install
npm run dev

🧪 Frontend Testing with Vitest + Playwright
✅ Install Vitest + Testing Lib

npm install -D vitest @testing-library/react jsdom

✅ Install Playwright

npm install -D playwright @playwright/test
npx playwright install

✅ Update vite.config.ts

/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});

⚙️ Environment Variables

    Backend: .env for DB connection, ports, etc.

    Frontend: .env with VITE_API_URL

Use dotenv to load backend environment variables:

npm install dotenv

🔁 Version Control

    Use Git

    Add .gitignore (e.g., node_modules, dist, .env)

    Optionally set up GitHub Actions for CI/CD

🐳 Optional: Docker Setup

Add Dockerfiles for both client and server for containerization and deployment.
🚧 Next Steps

    Build core features: auth, bug creation, status, assignment

    Add PostgreSQL database integration

    Deploy using Render, Railway, or Vercel