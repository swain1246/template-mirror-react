// src/api/moveRequestApi.js

export const submitMoveRequest = async (formData) => {
  const API_URL = `${import.meta.env.VITE_APP_API_BASE_URL}drm/move-request/`;
  debugger;

  // Prepare backend payload (keys must match Django fields)
  const payload = {
    first_name: formData.firstName,
    last_name: formData.lastName,
    email_address: formData.email,
    phone: formData.phone || "",
    country: formData.country || "",
    zip_code: formData.zip || "",
    address: formData.address || "",
    requested_move_date: formData.moveDate || null,
    type_of_residence: formData.residenceType || "",
    moving_from_zip: formData.fromZip || "",
    describe_from_location: formData.fromLocation || "",
    moving_to_zip: formData.toZip || "",
    describe_to_location: formData.toLocation || "",
    message: formData.message || "",
  };

  console.log("Submitting to API:", API_URL, payload);

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  console.log("Response status:", response.status);

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Server error:", errorText);
    throw new Error("Failed to submit your enquiry. Please try again later.");
  }

  const result = await response.json();
  console.log("Response JSON:", result);

  return result;
};
