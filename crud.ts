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
  //   const createPost = await prisma.post.create({
  //     data: {
  //       title: "title",
  //       content: "content",
  //       authorId: 1,
  //     },
  //   });
  //   console.log("Post Created", createPost);
  //! Retrieve all the users
    // const users = await prisma.user.findMany({
    //   //--->include use korle shb data to dekhabei pashapashi relation er je data ase oigulao dekhabe
    //   include: {
    //     posts: true,
    //     profiles: true,
    //   },
    //   // When we will use select, we cant use include here --> eta use korle just select kora jinish e dekhabe.. baki kichu dekhabe na
    // //   select: {
    // //     posts: true,
    // //     profiles: true,
    // //   },
    // });
    // console.dir(users, { depth: Infinity }); // if we use console.dir then we can see the object between the array but we have to add { depth: Infinity }
  //! Get one use data
  //   const singleUser = await prisma.user.findUnique({
  //     where: {
  //       id: 1,
  //     },
  //     include: {
  //       posts: true,
  //       profiles: true,
  //     },
  //   });
  //   console.dir(singleUser, { depth: Infinity });
  //! update user data
  //   const updateUser = await prisma.profile.update({
  //     where: {
  //       userId: 1,
  //     },
  //     data: {
  //       //just ki update korte chai oita bole dibo
  //       bio: "Something",
  //       dob: "date anything",
  //     },
  //     //--> can use select also
  //     select: {
  //       id: true,
  //       bio: true,
  //       user: {
  //         select: {
  //           //---> we can use select here also
  //           name: true,
  //           email: true,
  //         },
  //       },
  //     },
  //   });
  //! Deleting single user
  //? --->> Jodi single user delete korte jai erpr jodi oitar sathe onno table er data available thake tahole oita delete kora jabena error dibe
  //   const deleteUser = await prisma.user.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });

  //! Data upsert--> Either delete Or create
  const upsertUser = await prisma.user.upsert({
    where: {
      email: "shafayatnew@gmail.com",
    },
    update: {
      name: "Md. Shafayat Hossain Patowary",
    },
    create: {
      name: "New Shafayat",
      email: "newId.gmail.com",
    },
  });
  console.log(upsertUser);
}
run();
