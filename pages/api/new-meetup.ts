import { MongoClient } from "mongodb";
const handler = async (req: any, res: any) => {
  if (req.method == "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://auth_user:plmzaq098321@cluster0.5tms4kp.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupCollection = db.collection("meetup");
    const result = await meetupCollection.insertOne(data);
    client.close();
    res
      .status(201)
      .send({ message: "data Inserted successfully", data: result });
  }
};
export default handler;
