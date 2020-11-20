import firebase from "firebase";
import { useCallback, useState } from "react";
import { db } from "../../utils/firebase";
import { CreateMemosError } from "./error";

export const useCreateMemo = () => {
  const [error, setError] = useState<CreateMemosError | undefined>(undefined);

  const createMemo = useCallback(
    async (data: {
      title: string;
      tags: string[];
      body: string;
    }): Promise<boolean> => {
      try {
        const batch = db.batch();
        const memoRef = db.collection("memos").doc();
        // memoドキュメントを追加
        batch.set(memoRef, {
          title: data.title,
          body: data.body,
          tags: data.tags,
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

        // throw new Error();
        await batch.commit();
        return true;
      } catch (e) {
        console.error(e);
        setError(new CreateMemosError("メモの作成に失敗しました。"));
        return false;
      }
    },
    []
  );

  return { createMemo, error };
};
