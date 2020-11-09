import firebase from "firebase";
import { useCallback } from "react";
import { db } from "../../../lib/firebase";

export const useCreateMemo = () => {
  const createMemo = useCallback(
    async (data: { title: string; tags: string[]; body: string }) => {
      const batch = db.batch();
      const memoRef = db.collection("memos").doc();
      // memoドキュメントを追加
      batch.set(memoRef, {
        title: data.title,
        body: data.body,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      data.tags.forEach((tag) => {
        // 追加したmemoドキュメントのサブコレクションにtagsを追加
        batch.set(memoRef.collection("tags").doc(tag), {});
        // tagドキュメントを追加
        const tagRef = db.collection("tags").doc(tag);
        batch.set(tagRef, {});
      });

      // TODO: エラーハンドリング
      batch.commit();
    },
    []
  );

  return { createMemo };
};
