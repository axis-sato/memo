import { useCallback, useEffect, useState } from "react";
import { db } from "../../../lib/firebase";

export type Memo = {
  id: string;
  title: string;
  body: string;
  tags: string[];
};

export const useFetchMemos = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const fetchMemos = useCallback(async () => {
    // TODO: エラーハンドリング
    const memosSnapshot = await db
      .collection("memos")
      .orderBy("createdAt", "desc")
      .get();
    const memos: Memo[] = [];
    memosSnapshot.forEach((memo) => {
      memos.push({
        id: memo.id,
        title: memo.data().title,
        body: memo.data().body,
        tags: memo.data().tags,
      });
    });
    setMemos(memos);
  }, []);

  useEffect(() => {
    fetchMemos();
  }, [fetchMemos]);

  return { memos };
};
