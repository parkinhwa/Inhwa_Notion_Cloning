export const request = async (url, options = {}) => {
  try {
    const res = await fetch(`${process.env.API_END_POINT}${url}`, {
      ...options,
      headers: {
        "x-username": `${process.env.API_KEY}`,
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
