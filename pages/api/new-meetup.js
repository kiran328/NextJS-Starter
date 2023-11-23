import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, description, address } = data;

    var password = encodeURIComponent("Kiran123#@!");
    const client = await MongoClient.connect(
      `mongodb+srv://kiran:${password}@cluster0.llwxw4h.mongodb.net/MeetupApp?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne({
      title,
      image,
      description,
      address,
    });

    console.log(result);
    client.close();

    res.status(201).json({ message: "Meetup inserted"});
  }
};

export default handler;
