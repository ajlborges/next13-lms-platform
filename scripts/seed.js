const { PrismaClient } = require("@prisma/client");
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
  // Create random Categories
  const categories = await Promise.all(
    Array.from({ length: 5 }).map(() =>
      prisma.category.create({
        data: {
          name: faker.commerce.department(),
        },
      })
    )
  );

  // Create a set to track unique userIds
  const userIds = new Set();

  // Create random Profiles
  const profiles = await Promise.all(
    Array.from({ length: 10 }).map(() => {
      let userId;
      do {
        userId = faker.datatype.uuid();
      } while (userIds.has(userId));
      userIds.add(userId);

      return prisma.profile.create({
        data: {
          userId,
          name: faker.name.findName(),
          email: faker.internet.email(),
          imageUrl: faker.image.avatar(),
          role: faker.helpers.arrayElement(['ADMIN', 'TEACHER', 'STUDENT']),
        },
      });
    })
  );

  // Create random Courses
  const courses = await Promise.all(
    Array.from({ length: 10 }).map(() => 
      prisma.course.create({
        data: {
          userId: faker.helpers.arrayElement(profiles).userId,
          title: faker.commerce.productName(),
          description: faker.lorem.sentence(),
          imageUrl: faker.image.imageUrl(),
          price: parseFloat(faker.commerce.price()),
          isPublished: faker.datatype.boolean(),
          categoryId: faker.helpers.arrayElement(categories).id,
        },
      })
    )
  );

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
            },
          })
        )
      );

      // Create random Attachments for each Chapter
      await Promise.all(
        chapters.map((chapter) =>
          prisma.attachment.create({
            data: {
              name: faker.system.fileName(),
              url: faker.internet.url(),
              courseId: course.id,
            },
          })
        )
      );
    })
  );

  console.log("Database has been populated with random data.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
