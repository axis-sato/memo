import { useCallback, useEffect, useRef, useState } from "react";
import { db } from "../../../lib/firebase";
import firebase from "firebase/app";

export type Memo = {
  id: string;
  title: string;
  body: string;
  tags: string[];
};

const limit = 2;

export const useFetchMemos = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const lastMemo = useRef<firebase.firestore.QueryDocumentSnapshot<
    firebase.firestore.DocumentData
  > | null>(null);

  const fetchMemos = useCallback(async () => {
    // TODO: エラーハンドリング
    const query = lastMemo.current
      ? db
          .collection("memos")
          .orderBy("createdAt", "desc")
          .startAfter(lastMemo.current)
          .limit(limit)
      : db.collection("memos").orderBy("createdAt", "desc").limit(limit);

    const memosSnapshot = await query.get();
    lastMemo.current = memosSnapshot.docs[memosSnapshot.docs.length - 1];
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
  }, []);

  useEffect(() => {
    fetchMemos();
  }, [fetchMemos]);

  return { memos, fetchMemos };
};
