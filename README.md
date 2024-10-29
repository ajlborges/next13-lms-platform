## Build an LMS Platform: Next.js 13.4.12, React 18.2.0, Typescript 5.2.2, Tailwind 3.3.3, Prisma 5.3.0, PostgreSQL, Docker, DjangoRestFramework(API)

![Project Screenshot](./img/lms_screenshot.gif)

This repository is an ongoing enhancement of the original LMS platform created by CodeWithAntonio with the goal to decouple & implement extra features

- Dashboard Display with RBAC between Students, Teachers & the general Public (Anonymous)
- Decouple Dependency on Clerk for Api Authentication to enable custom backend apis like DRF, Spring, Expressjs ....
- DB Connection from online hosted platforms to local Instance support.
- Include more Payment Processing Platforms like (Paypal, Flutterwave, Paystack)
- Include extra Video Streaming Option for YouTube & Vimeo
- Implement Docker Support for easy support dealing with dependency issues on different OS
- Include Localization Support for students in multiple countries
- Include extra upload platforms like S3
- Integrate extra options for video streaming like (Youtube, Vimeo)
- Live Classroom Collaboration Between students for Brainstorming and presentations.

[Tutorial](https://www.youtube.com/watch?v=Big_aFLmekI)

Key Features:

- Browse & Filter Courses
- Purchase Courses using Stripe
- Mark Chapters as Completed or Uncompleted
- Progress Calculation of each Course
- Student Dashboard
- Teacher mode
- Create new Courses
- Create new Chapters
- Easily reorder chapter position with drag n’ drop
- Upload thumbnails, attachments and videos using UploadThing
- Video processing using Mux
- HLS Video player using Mux
- Rich text editor for chapter description
- Authentication using Clerk
- ORM using Prisma
- MySQL database using Planetscale

### Prerequisites

**Node version 18.17.0**

### Cloning the repository

```shell
git clone https://github.com/MrChike/LMS.git
```

### Install packages

```shell
npm install
```

### Setup .env file


```js
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_TEACHER_ID=

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

MUX_TOKEN_ID=
MUX_TOKEN_SECRET=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
```

### Setup Prisma

Using Postgres Local Instance

```shell
npx prisma migrate reset
npx prisma generate
npx prisma db push
npx prisma studio
```

### Start the app

```shell
npm run dev # For Local Interactive Development
npm run build # For Production Environment Simulation
npm run export # For Static Files Build
npm start # For Running your application
```
