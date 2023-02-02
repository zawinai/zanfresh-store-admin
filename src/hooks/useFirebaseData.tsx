import { useEffect, useState } from "react";
import { db } from "../firebase.config";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";

// This hook updates realtime data
export function useFirebase<T>(key: string) {
  const [data, setData] = useState<T[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      let list: T[] = [];

      try {
        const res = await getDocs(collection(db, key));

        res.forEach((doc) => {
          list.push({ id: doc.id, data: doc.data() } as T);
        });
        setData(list);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
    const unsub = onSnapshot(collection(db, key), (snapShot) => {
      let list: any = [];
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setData(list);
    });

    return () => {
      setLoading(false);
      unsub();
    };
  }, []);

  return { data, loading };
}
