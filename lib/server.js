export const sendContactForm = async (data) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  return response;
};
