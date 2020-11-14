import { useCallback, useEffect, useRef, useState } from "react";
import { db } from "../../../lib/firebase";
import firebase from "firebase/app";
import { FetchMemosError } from "./error";

export type Memo = {
  id: string;
  title: string;
  body: string;
  tags: string[];
};

const limit = 2;

export const useFetchMemos = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [error, setError] = useState<FetchMemosError | null>(null);
  const lastMemo = useRef<firebase.firestore.QueryDocumentSnapshot<
    firebase.firestore.DocumentData
  > | null>(null);

  const changeHasMore = useCallback((newMemosCount: number) => {
    setHasMore(newMemosCount !== 0);
  }, []);

  const fetchMemos = useCallback(async () => {
    setError(null);

    const query = lastMemo.current
      ? db
          .collection("memos")
          .orderBy("createdAt", "desc")
          .startAfter(lastMemo.current)
          .limit(limit)
      : db.collection("memos").orderBy("createdAt", "desc").limit(limit);

    try {
      const memosSnapshot = await query.get();
      lastMemo.current = memosSnapshot.docs[memosSnapshot.docs.length - 1];
      changeHasMore(memosSnapshot.docs.length);
      const newMemos: Memo[] = [];
      memosSnapshot.forEach((memo) => {
        newMemos.push({
          id: memo.id,
          title: memo.data().title,
          body: memo.data().body,
          tags: memo.data().tags,
        });
      });
      setMemos((oldMemos) => [...oldMemos, ...newMemos]);
    } catch (e) {
      setHasMore(false);
      setError(new FetchMemosError());
    }
  }, [changeHasMore]);

  useEffect(() => {
    fetchMemos();
  }, [fetchMemos]);

  return { memos, fetchMemos, hasMore, error };
};
