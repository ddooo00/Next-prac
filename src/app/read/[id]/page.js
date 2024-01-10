export default async function Read(props) {
  const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`, {
    cache: "no-store",
    //글 목록이 수정되지 않는 이유는 캐시를 사용히서(cache HIT) = 캐쉬 끄기
  });
  const topic = await resp.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
