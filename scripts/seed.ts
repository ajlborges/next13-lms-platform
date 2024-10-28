const { PrismaClient } = require("@prisma/client");
const { faker } = require('@faker-js/faker');
const uuid = faker.string.uuid();
const database = new PrismaClient();
require('dotenv').config()

const profileUserId = uuid
const memberRole = ['ADMIN', 'TEACHER', 'STUDENT']

const axios = require('axios');

const fetchRandomVideo = async () => {
  const response = await axios.get('https://api.pexels.com/videos/popular', {
    headers: {
      Authorization: process.env.PEXEL_API_KEY, 
    },
  });
  const randomVideo = response.data.videos[Math.floor(Math.random() * response.data.videos.length)];
  console.log(randomVideo.video_files[0].link); // Get the first video file link
};
const videoUrlStr = "https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4"
const videoUrl = videoUrlStr || fetchRandomVideo();

async function main() {
  try {
    // await database.category.createMany({
    //   data: [
    //     { name: "Computer Science" },
    //     { name: "Music" },
    //     { name: "Fitness" },
    //     { name: "Photography" },
    //     { name: "Accounting" },
    //     { name: "Engineering" },
    //     { name: "Filming" },
    //     { name: "Business" },
    //   ]

      await database.chapter.create({
          data: {
            id: faker.string.uuid(), // Ensure your schema supports this
            title:  faker.word.words(3),
            description: faker.lorem.sentences(),
            videoUrl: videoUrl,
            position: faker.number.int({ min: 1, max: 100 }),
            isPublished: faker.datatype.boolean(),
            isFree: faker.datatype.boolean(),
            userProgress: null,
            createdAt:  new Date().toISOString(),
            updatedAt:  new Date().toISOString(),
          },
    });

    //   await database.profile.create({
    //       data: {
    //         id: faker.string.uuid(), // Ensure your schema supports this
    //         userId:  profileUserId,
    //         name: faker.person.fullName(),
    //         imageUrl: faker.image.url(),
    //         email: faker.internet.email(),
    //         role: memberRole[1],
    //         createdAt:  new Date().toISOString(),
    //         updatedAt:  new Date().toISOString(),
    //       },
    // });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();