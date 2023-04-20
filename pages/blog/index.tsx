import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Blog = ({ data = [] }) => {
  const route = useRouter();
  return (
    <>
      <Navbar />
      <h1 className="heading">My Blog</h1>
      <div className=" h-[450px] rounded-xl shadow-2xl  border-2 w-1/2 mx-auto p-12 overflow-y-auto">
        {data?.slice(0, 10)?.map((items: any) => {
          return (
            <ul
              onClick={() => route.push(`/blog/${items?.id}`)}
              className=" cursor-pointer list-disc text-base  mx-auto border-2 p-6 shadow-xl mb-4 rounded-2xl  "
            >
              <li className="font-bold">{items?.id}</li>
              <li>{items?.title}</li>
            </ul>
          );
        })}
      </div>
      <style jsx>
        {`
          .heading {
            color: red;
            text-align: center;
            font-size: 2rem;
            margin-bottom: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default Blog;
