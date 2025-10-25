import "dotenv/config";
import path from "path";
import express from "express";
import mongoose from "mongoose";
import Chat from "./models/chat.js";
import methodOverride from "method-override";

const app = express();
const port = process.env.PORT || 3000;

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("Connected to whatsapp");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(`${process.env.MONGODB_LINK}/whatsapp`);
}

app.listen(port, () => {
  console.log(`Listening at port no ${port}`);
});

app.get("/", (req, res) => {
  res.redirect(`/chats`);
});

//basic CRUD routes

app.get("/chats", async (req, res) => {
  const chats = await Chat.find();
  res.status(200);
  res.render("index.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("newChat.ejs");
});

app.post("/chats", async (req, res) => {
  const { from, message, to } = req.body;
  const newChat = new Chat({
    from,
    to,
    message,
    created_at: new Date(),
  });
  const result = await newChat.save();
  // newChat
  //   .save()
  //   .then((res) => console.log(res))
  //   .catch((err) => console.err(err));
  res.status(303);
  res.redirect("/chats");
});

app.get("/chats/:id/edit", (req, res) => {
  Chat.findById(req.params.id)
    .then((result) => {
      res.render("updateChat.ejs", { chat: result });
    })
    .catch((err) => console.err(err));
});

app.patch("/chats/:id", async (req, res) => {
  await Chat.findByIdAndUpdate(req.params.id, {
    message: req.body.message,
  });
  res.status(303).redirect("/chats");
});

app.delete("/chats/:id", async (req, res) => {
  await Chat.findByIdAndDelete(req.params.id);
  res.status(303).redirect("/chats");
});
