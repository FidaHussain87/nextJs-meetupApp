import { MongoClient } from 'mongodb'
import MeetupList from '../components/meetups/MeetupList'
const HomePage = (props: any) => {
  return <MeetupList meetups={props.meetups} />
}
export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://auth_user:plmzaq098321@cluster0.5tms4kp.mongodb.net/?retryWrites=true&w=majority',
  )
  const db = client.db()
  const meetupCollection = db.collection('meetup')
  const meetups = await meetupCollection.find().toArray()
  client.close()
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
  }
}

export default HomePage
