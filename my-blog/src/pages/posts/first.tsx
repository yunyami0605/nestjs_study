import Layout from "@/components/Layout";

const getSortedPostData = () => {
  return {
    id: 1,
    title: "타이틀",
    contents: "테스트",
  };
};

export async function getStaticProps() {
  const allPostsData = await new Promise((resolve) => {
    resolve(getSortedPostData());
  });

  return {
    props: {
      allPostsData,
    },
  };
}

export default function FirstPost({ allPostsData }) {
  console.log(allPostsData);
  return (
    <Layout>
      <h1>첫 번째 글</h1>
    </Layout>
  );
}
