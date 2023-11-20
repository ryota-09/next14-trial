"use server";
export async function deleteAction(formData: FormData) {
  try {
    console.log("Actions");
    console.log(formData);
    return { message: "Deleted" };
  } catch (error) {
    return { message: "Database Error: Failed to Delete." };
  }
}
