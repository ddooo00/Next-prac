"use client";
//사용자가 보고 있는 페이지를 방금 생성한 lastid의 글로 리디렉션 시켜야 함
//client compo에서만 사용 가능

import { useRouter } from "next/navigation";
//m routing에서는 navigation을 사용해야함
export default function Create() {
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        //client compo에서만 가능
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };
        fetch(`http://localhost:9999/topics`, options)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const lastid = result.id;
            router.push(`/read/${lastid}`);
            router.refresh();
            //글 목록 담당하고 있는 fetch가 no-cache를 하기 때문에 router.refresh를 하면 새로운 데이터를 가져와서 뿌려줌.
          });
      }}
    >
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="create " />
      </p>
    </form>
  );
}
