import React from "react";
import * as IPFS from "ipfs-core";

const Records = (props) => {
  // recieving props
  const { onChange, setHash, selectedFile, setSelectedFile } = props;
  const addDataIPFS = async () => {
    try {
      // create an IPFS node
      const node = await IPFS.create();
      // data will be set up to the selected file
      const data = selectedFile;
      // using the add function we will add the data(selectedFile) to the result variable
      const result = node.add(data);
      // The result variable will return a promise which we will then resolve and set it's path to the hash state
      const resolvedPromise = result.then((promise) => setHash(promise.path));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col justify-center text-white">
      <h1 className="text-xl mb-4 ">Upload your documents here</h1>
      <input
        onChange={onChange}
        className="p-2 rounded text-black"
        placeholder="Enter your File Name"
      />
      <input
        onChange={(e) => setSelectedFile(e.target.files[0])}
        className="bg-white rounded mt-2 text-black"
        type="file"
      />
      <div>
        <button
          onClick={() => addDataIPFS()}
          className="bg-cyan-500 hover:bg-cyan-400 rounded px-4 py-2 mt-2 text-white"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default Records;
