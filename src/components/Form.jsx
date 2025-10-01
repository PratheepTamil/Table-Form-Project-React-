
import React from "react";

const Form = ({formData, handleFormDataChange, handleSubmit, editIndex}) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Forms and Table Example</h1>
      <form action="" className="border rounded-lg p-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Name"
          className="w-full p-2 border  rounded m-2"
          onChange={(e) => {
            const { value } = e.target;
            handleFormDataChange("name", value);
          }}
          required
          value={formData.name}
        />

        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="w-full p-2 border  rounded m-2"
              onChange={(e) => {
            const { value } = e.target;
            handleFormDataChange("email", value);
          }}
          required
          value={formData.email}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded m-2"
          type="submit"
        >
          {editIndex === null ? "Add" : "Edit"}
        </button>
      </form>
    </>
  );
};
export default Form;