import { useEffect, useState } from "react";
import { baseApi } from "./api";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    baseApi("GET")
      .then((result) => {
        // Обработка успешного результата
        console.log("Результат запроса:", result);
        setData(result);
      })
      .catch((error) => {
        // Обработка ошибки
        console.error("Ошибка запроса:", error.message);
      });
  }, []);

  return (
    <>
      <div>
        ErpSystem
        {Array.isArray(data) &&
          data.map((item) => {
            return <div key={item.id}>{item.title}</div>;
          })}
      </div>
    </>
  );
}

export default App;
