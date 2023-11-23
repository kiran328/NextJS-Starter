import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const Meetup = ({ meetupData }) => {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
      </Head>
      <MeetupDetail
        image={meetupData?.image}
        title={meetupData?.title}
        address={meetupData?.address}
        description={meetupData?.description}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  var password = encodeURIComponent("Kiran123#@!");
  const client = await MongoClient.connect(
    `mongodb+srv://kiran:${password}@cluster0.llwxw4h.mongodb.net/MeetupApp?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    paths: meetups.map((meetup) => {
      return {
        params: {
          meetupId: meetup._id.toString(),
        },
      };
    }),
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  var password = encodeURIComponent("Kiran123#@!");
  const client = await MongoClient.connect(
    `mongodb+srv://kiran:${password}@cluster0.llwxw4h.mongodb.net/MeetupApp?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: { ...meetup, _id: meetup._id.toString() },
    },
  };
};

export default Meetup;
