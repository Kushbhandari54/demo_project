import { useRouter } from 'next/router';

function Post1(){
    const router = useRouter();
    const   {postId}=router.query;
    return <div>Post {postId}</div>
}

export default Post1;