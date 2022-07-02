import React, { useState } from "react";
import { NFTStorage, File } from "nft.storage";
import { NFT_KEY } from "../../env";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Input = (props) => {
  const { setMetaDataURL, setTrackImage, trackImage } = props;
  const [img, setImg] = useState("");
  /**
   *
   * @param {string} image path to an image file
   * @param {string} name a name for the NFT
   * @param {string} description a text description for the NFT
   */
  const storeNFT = async (blob) => {
    // create a new NFTStorage client using our API key
    const nftstorage = new NFTStorage({ token: NFT_KEY });
    const description = "This is your beautiful NFT";

    const image = new File([blob], "Sweet Memory");
    // call client.store, passing in the image & metadata
    const token = await nftstorage.store({
      image,
      name,
      description,
    });

    console.log(token.url);
    // setting the MetaDataURL to the url returned from the token object
    setMetaDataURL(token.url);
    return token.url;
  };

  var FormData = require("form-data");
  let formData = new FormData();

  const onFileChange = (e) => {
    // for testing purposes
    console.log("Image Uploaded", e.target.files[0]);
    toast.success("Image Uploaded, Submit it now!");
    if (e.target && e.target.files[0]) {
      formData.append("file", e.target.files[0]);
      setTrackImage(true);
    }
    console.log("onfilechange", formData);
    const [file] = e.target.files;
    console.log("image here", URL.createObjectURL(file));
    setImg(URL.createObjectURL(file));
  };

  const submitFileData = () => {
    console.log("form data", formData);
    toast.success("Wait for the promise to be resolved");
    const token = storeNFT(img);
    return token
  };

  return (
    <div className="w-11/12 mx-auto mb-4">
      {/* If you want to add the description and the name manually by yourself you can uncomment this code and set it up instead of hardcoding it like me */}
      {/* <input 
     className="text-xl p-1 m-2 rounded ml-12 text-center"
     type="text" id="name" placeholder='Name Your NFT'/>
    <input className='text-xl p-1 m-2 rounded text-center'
     type="text" id="description" placeholder="Describe Your NFT" />  */}
      <input
        className="ml-12 mb-4"
        type="file"
        name="image"
        onChange={onFileChange}
      />
      {/* <p>{metadata}</p> */}
      <img src={img} alt="" />
      {trackImage && (
        <button
          className="inline-block px-12 py-2.5 bg-sky-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out my-2 ml-12"
          onClick={submitFileData}
        >
          Submit
        </button>
      )}
      <ToastContainer />
    </div>
  );
};

export default Input;
