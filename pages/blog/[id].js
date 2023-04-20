import Navbar from "../../components/Navbar";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        id: curElem.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Post = ({ data = [] }) => {
  console.log("Data", data);
  return (
    <div>
      <Navbar />

      <ul className=" w-1/2 mx-auto cursor-pointer list-disc text-base mt-4 border-2 p-6 shadow-xl mb-4 rounded-2xl  ">
        <li className="font-bold">{data?.id}</li>
        <li>{data?.title}</li>
        <li>{data?.body}</li>
      </ul>
    </div>
  );
};

export default Post;
