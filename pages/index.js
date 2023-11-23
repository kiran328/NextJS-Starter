import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Meetups for react devs" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

export const getServerSideProps = async (context) => {
  const req = context.req;
  const res = context.res;

  var password = encodeURIComponent("Kiran123#@!");
  const client = await MongoClient.connect(
    `mongodb+srv://kiran:${password}@cluster0.llwxw4h.mongodb.net/MeetupApp?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetups = await db.collection("meetups").find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      })),
    },
  };
};

/*export const getStaticProps = async () => {
    //server side code can go here

    let meetupPromise = await new Promise((res, rej)=> {
        setTimeout(() => {
            res(DUMMY_MEETUPS)
        }, 3000);
    });

    return {
        props: {
            meetups: meetupPromise
        },
        revalidate: 10
    };
}*/

export default HomePage;
