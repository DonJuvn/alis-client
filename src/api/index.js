import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const baseApi = (method, payload) => {
  // Создаем объект конфигурации для Axios
  const config = {
    method: method,
    url: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      // Добавьте другие необходимые заголовки здесь
    },
    withCredentials: true,
  };

  // Устанавливаем данные запроса в зависимости от метода
  switch (method) {
    case "GET":
      // Нет необходимости устанавливать данные для GET-запроса
      break;
    case "POST":
    case "PUT":
    case "PATCH":
    case "DELETE":
      config.data = payload;
      break;
    default:
      throw new Error("Неподдерживаемый метод запроса");
  }

  // Отправляем запрос с использованием Axios
  return axios(config)
    .then((response) => {
      // Обработка успешного ответа
      console.log("Успешный ответ:", response.data);
      return response.data;
    })
    .catch((error) => {
      // Обработка ошибки
      console.error("Ошибка запроса:", error.message);
      throw error;
    });
};
