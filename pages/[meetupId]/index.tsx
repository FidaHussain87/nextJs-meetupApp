import MeetupDetail from '../../components/meetups/MeetupDetail'
import { MongoClient, ObjectId } from 'mongodb'
const MeetupDetails = (props: any) => {
  const { meetupData } = props
  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  )
}

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://auth_user:plmzaq098321@cluster0.5tms4kp.mongodb.net/?retryWrites=true&w=majority',
  )
  const db = client.db()
  const meetupCollection: any = db.collection('meetup')
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray()
  client.close()
  return {
    fallback: false,
    paths: meetups.map((meetup: any) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  }
}
export const getStaticProps = async (context: any) => {
  const meetupId = context.params.meetupId
  const client = await MongoClient.connect(
    'mongodb+srv://auth_user:plmzaq098321@cluster0.5tms4kp.mongodb.net/?retryWrites=true&w=majority',
  )
  const db = client.db()
  const meetupCollection: any = db.collection('meetup')
  const selectedMeetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  })
  client.close()
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  }
}
export default MeetupDetails
