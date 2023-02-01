import { useEffect, useState } from "react";
import { db } from "../firebase.config";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";

export const useFirebase = (key: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchData<T>() {
    let list: T[] = [];

    try {
      const res = await getDocs(collection(db, key, "food", "fruit"));

      res.forEach((doc) => {
        list.push({ id: doc.id, data: doc.data() } as T);
      });
      setData(list);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  return { fetchData, data, loading };
};
