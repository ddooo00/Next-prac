"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

//id값을 가져와야 해서 useParams 사용 => 하지만 이건 server에서는 사용 xx(레이아웃.js)
//그래서 up, de 두개만 가져와서 client로 변경시켜 params사용함.
export function Control() {
  const params = useParams();
  const id = params.id;
  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={"/update/" + id}>Update</Link>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </>
      ) : null}
    </ul>
  );
}
