export const API_END_POINT = "https://kdt-frontend.programmers.co.kr";
export const request = async (url, options = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      headers: {
        "x-username": "parkinhwa",
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      return await res.json();
    }

    throw new Error("500 API Error");
  } catch (e) {
    alert(e.message);
  }
};
