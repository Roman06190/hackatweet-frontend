import Hashtag from "../components/Hashtag";
import { useRouter } from "next/router";

function HashtagPage() {
  const router = useRouter();
  return (
    <>
      <Hashtag />
      <p>Post: {router.query.slug}</p>
    </>
  );
}

export default HashtagPage;
