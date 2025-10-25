import mongoose from "mongoose";
import Chat from "./models/chat.js";

main()
  .then(() => {
    console.log("Connected to app");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(`${process.env.MONGODB_LINK}/whatsapp`);
}

const allChats = [
  {
    from: "friend-1",
    to: "me",
    message: "let's chat a bit",
    created_at: new Date(),
  },
  {
    from: "me",
    to: "friend-1",
    message: "sure",
    created_at: new Date(),
  },
  {
    from: "friend-2",
    to: "me",
    message: "kitna padh liya be",
    created_at: new Date(),
  },
  {
    from: "me",
    to: "friend-2",
    message: "kuch nahi padha h bhai",
    created_at: new Date(),
  },
  {
    from: "friend-1",
    to: "me",
    message: "assignment kar liya h kya ?",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
