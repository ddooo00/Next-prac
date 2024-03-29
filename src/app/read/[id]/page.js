export default async function Read(props) {
  try {
    const resp = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `topics/${props.params.id}`,
      {
        cache: "no-store",
      }
    );

    const topic = await resp.json();

    return (
      <>
        <h2>{topic.title}</h2>
        <p>{topic.body}</p>
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return (
      <>
        <p>Error fetching data</p>
      </>
    );
  }
}
