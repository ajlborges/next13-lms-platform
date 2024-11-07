const { PrismaClient } = require("@prisma/client");
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
  // Create random Categories
  // const categories = await Promise.all(
  //   Array.from({ length: 5 }).map(() =>
  //     prisma.category.create({
  //       data: {
  //         name: faker.commerce.department(),
  //       },
  //     })
  //   )
  // );

  // Create a set to track unique userIds
  const userIds = new Set();

  // Create random Profiles
  const profiles = await Promise.all(
    Array.from({ length: 10 }).map(() => {
      let userId;
      do {
        userId = faker.datatype.uuid;
      } while (userIds.has(userId));
      userIds.add(userId);

      return prisma.profile.create({
        data: {
          userId,
          name: faker.person.findName,
          email: faker.internet.email(),
          imageUrl: faker.image.avatar(),
          role: faker.helpers.arrayElement(['ADMIN', 'TEACHER', 'STUDENT']),
        },
      });
    })
  );

  // Create random Courses
  // const courses = await Promise.all(
  //   Array.from({ length: 10 }).map(() => 
  //     prisma.course.create({
  //       data: {
  //         userId: faker.helpers.arrayElement(profiles).userId,
  //         title: faker.commerce.productName(),
  //         description: faker.lorem.sentence(),
  //         imageUrl: faker.image.imageUrl(),
  //         price: parseFloat(faker.commerce.price()),
  //         isPublished: faker.datatype.boolean(),
  //         categoryId: faker.helpers.arrayElement(categories).id, // Fixed categoryId access
  //       },
  //     })
  //   )
  // );

  // Create random Chapters and Attachments for each Course
  await Promise.all(
    courses.map(async (course) => {
      const chapters = await Promise.all(
        Array.from({ length: 3 }).map(() =>
          prisma.chapter.create({
            data: {
              title: faker.lorem.words(3),
              description: faker.lorem.sentence(),
              videoUrl: faker.internet.url(),
              position: faker.datatype.number({ min: 1, max: 10 }),
              isPublished: faker.datatype.boolean(),
              isFree: faker.datatype.boolean(),
              courseId: course.id,
              uuid: faker.datatype.uuid(), // Ensure your schema supports this
            },
          })
        )
      );

      // Create random Attachments for each Chapter
      // await Promise.all(
      //   chapters.map((chapter) =>
      //     prisma.attachment.create({
      //       data: {
      //         name: faker.system.fileName(),
      //         url: faker.internet.url(),
      //         courseId: course.id,
      //       },
      //     })
      //   )
      // );
    })
  );

  console.log("Database has been populated with random data.");
}

main()
  .catch((e) => {
    console.error("Error populating the database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// const { PrismaClient } = require("@prisma/client");
// const { faker } = require('@faker-js/faker');
// const uuid = faker.string.uuid();
// const database = new PrismaClient();
// require('dotenv').config()

// const profileUserId = uuid
// const memberRole = ['ADMIN', 'TEACHER', 'STUDENT']

// const axios = require('axios');

// const fetchRandomVideo = async () => {
//   const response = await axios.get('https://api.pexels.com/videos/popular', {
//     headers: {
//       Authorization: process.env.PEXEL_API_KEY, 
//     },
//   });
//   const randomVideo = response.data.videos[Math.floor(Math.random() * response.data.videos.length)];
//   console.log(randomVideo.video_files[0].link); // Get the first video file link
// };
// const videoUrlStr = "https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4"
// const videoUrl = videoUrlStr || fetchRandomVideo();

// async function main() {
//   try {
//     // await database.category.createMany({
//     //   data: [
//     //     { name: "Computer Science" },
//     //     { name: "Music" },
//     //     { name: "Fitness" },
//     //     { name: "Photography" },
//     //     { name: "Accounting" },
//     //     { name: "Engineering" },
//     //     { name: "Filming" },
//     //     { name: "Business" },
//     //   ]

//       await database.chapter.create({
//           data: {
//             id: faker.string.uuid(), // Ensure your schema supports this
//             title:  faker.word.words(3),
//             description: faker.lorem.sentences(),
//             videoUrl: videoUrl,
//             position: faker.number.int({ min: 1, max: 100 }),
//             isPublished: faker.datatype.boolean(),
//             isFree: faker.datatype.boolean(),
//             userProgress: null,
//             createdAt:  new Date().toISOString(),
//             updatedAt:  new Date().toISOString(),
//           },
//     });

//     //   await database.profile.create({
//     //       data: {
//     //         id: faker.string.uuid(), // Ensure your schema supports this
//     //         userId:  profileUserId,
//     //         name: faker.person.fullName(),
//     //         imageUrl: faker.image.url(),
//     //         email: faker.internet.email(),
//     //         role: memberRole[1],
//     //         createdAt:  new Date().toISOString(),
//     //         updatedAt:  new Date().toISOString(),
//     //       },
//     // });

//     console.log("Success");
//   } catch (error) {
//     console.log("Error seeding the database categories", error);
//   } finally {
//     await database.$disconnect();
//   }
// }

// main();