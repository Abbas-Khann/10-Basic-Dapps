import React, { useState } from "react";

const AddBlog = (props) => {
  const { toggleModal, addBlogPosts } = props;
  const [form, setForm] = useState({
    url: "",
    title: "",
    type: "",
    description: "",
  });

  console.log(form);

  const handleChange = (event) => {
    setForm((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleAddBlogPosts = () => {
    addBlogPosts(form.url, form.title, form.type, form.description);
  };

  return (
    <div
      className={`flex mx-auto items-center flex-col bg-lime-50  w-11/12 rounded px-5 pb-10  sm:w-5/12 px-7 dark:bg-white dark:text-black `}
    >
      <h1 className="border-b-2 text-2xl py-2 my-4">Add a new Blog</h1>

      <h1 className="text-2xl py-2 w-full">Image URL</h1>
      <input
        className="bg-blue-300 w-full py-3 rounded px-4 text-xl"
        type="text"
        onChange={handleChange}
        name="url"
        value={form.url}
      />
      <h1 className="text-2xl py-2 w-full">Title</h1>
      <input
        className="bg-red-300 w-full py-3 rounded px-4 text-xl"
        type="text"
        name="title"
        onChange={handleChange}
        value={form.title}
      />

      <h1 className="text-2xl py-2 w-full">Type</h1>
      <input
        className="bg-fuchsia-300 w-full py-3 rounded px-4 text-xl"
        type="text"
        name="type"
        onChange={handleChange}
        value={form.type}
      />

      <h1 className="text-2xl py-3 w-full">Description</h1>
      <textarea
        className="w-full pb-36 border-b-2 text-xl dark:text-black dark:bg-red-100"
        type="text"
        name="description"
        onChange={handleChange}
        value={form.description}
      />
      <div className="flex items-center justify-end w-full mt-4">
        <button
          className="bg-violet-300 px-3 py-2 rounded mr-5 text-lg"
          onClick={toggleModal}
        >
          Close
        </button>
        <button
          className="bg-violet-300 px-3 py-2 rounded text-lg"
          onClick={handleAddBlogPosts}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AddBlog;
