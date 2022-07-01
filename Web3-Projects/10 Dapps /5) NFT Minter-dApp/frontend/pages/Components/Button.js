import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useProvider, useSigner, useContract } from 'wagmi';
import { NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI } from '../../Constants/constants';

const Button = ({metaDataURL, setMinted}) => {
  const provider = useProvider();
  const {data: signer, isError, isLoading} = useSigner();
  
  const contract = useContract({
    addressOrName: NFT_CONTRACT_ADDRESS,
    contractInterface: NFT_CONTRACT_ABI,
    signerOrProvider: signer, provider
  })

  const mint = async (metaDataURL) => {
    if (metaDataURL !== ""){

      const tx = await contract.mintNFT(metaDataURL);
      await tx.wait();
      toast.success('🦄 NFT minted Successfully!');
      console.log(`NFT minted Successfully`);
      setMinted(true);      
    }
    else
    {
        toast.error('Please upload an image and then mint');
      console.log("Please upload an image and then mint");
    }
    
  }

  return (
    <div
      className="mt-8 max-w-sm mx-auto rounded-xl bg-green-300 text-center font-semibold text-lg"
      onClick={() => mint(metaDataURL)}
    >
      <span
        className="block px-16 py-4 rounded-xl bg-emerald-500 
      text-xl text-white -translate-y-2 active:-translate-y-1 cursor-pointer"
      >
        Mint 🚀
      </span>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default Button