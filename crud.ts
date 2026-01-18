import { prisma } from "./lib/prisma";

async function run() {
  //!Creating User
  //   const createUser  = await prisma.user.create({
  //     data: {
  //       name: "Shafayat",
  //       email: "shafayatnew@gmail.com",
  //     },
  //   });
  //   console.log("User Created", createUser);
  //!Creating Post
  const createPost = await prisma.post.create({
    data: {
      title: "title",
      content: "content",
      authorId: 1,
    },
  });
  console.log("Post Created", createPost);
}
run();
