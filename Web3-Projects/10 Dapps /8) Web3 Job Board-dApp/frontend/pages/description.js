import React,{useEffect, useState} from 'react'
import Navbar from './Components/navbar'
import { useGlobalContext } from '../Context/Context'
import { JOB_BOARD_CONTRACT_ADDRESS, JOB_BOARD_CONTRACT_ABI } from '../Constants/constants';
import { useProvider, useSigner, useContract } from 'wagmi';

const description = () => {
    const {darkMode , indexData} = useGlobalContext();
    const [descriptionData , setDescriptionData] = useState([]);

    const provider = useProvider();
    const {data: signer} = useSigner();
    const contract = useContract( {
      addressOrName: JOB_BOARD_CONTRACT_ADDRESS,
      contractInterface: JOB_BOARD_CONTRACT_ABI,
      signerOrProvider: signer || provider
    });
  
    const getAllJobs = async () => {
      try{
        const getJobsArr = contract.getJobs();
        await getJobsArr;
      
        const resolvedArray = await getJobsArr.then((promise) => promise);
        console.log("resolved Array ka variable", resolvedArray)
     
       let desArr = [];
        resolvedArray.forEach(itm =>{
          desArr.push({
            title : itm.title,
            companyName : itm.companyName,
            description : itm.description,
            employmentType : itm.employmentType,
            location : itm.location,
            salary: itm.salary,
            applyUrl : itm.applyUrl,
            contactEmail : itm.contactEmail
          })
        })
        setDescriptionData(desArr)
      }
      catch(err){
        console.error(err)
      }
    }

    useEffect(() => {
      getAllJobs();
    }, [])

   
    console.log("idx", descriptionData[indexData])

  return (
    <div className={`${darkMode && 'dark'}`}>
        <Navbar />
       { descriptionData[indexData] && <section className='p-8 dark:bg-[#10172a] dark:text-white sm:p-20 lg:p-24 '>
        
            <div>
        <div className='flex flex-col items-center h-48'>
        <p className='text-2xl'>{descriptionData[indexData].companyName} is hiring a</p>
        <p className='text-2xl font-bold md:text-3xl'>{descriptionData[indexData].title}</p>
        <p className='text-base mt-8 md:text-lg'>Compensation {descriptionData[indexData].salary.toString()}k</p>
        <p className='mt-4 md:text-xl'>{descriptionData[indexData].location}</p>
        </div>

        <p className='md:px-8 lg:px-12'>
          {descriptionData[indexData].description}
        </p>

        <div className='mt-4 md:px-8 lg:px-12'>

        <p className='text-lg'>Contact us at</p>
        <p className='text-lg'>{descriptionData[indexData].contactEmail}</p>
        <p className='text-lg'>Official Website</p>
        <p className='text-blue-400 text-lg'>{descriptionData[indexData].applyUrl}</p>
        </div>
            
            
            </div>
         

        {/* <div className='flex flex-col items-center h-48'>
        <p className='text-2xl'>LearnWeb3 is hiring a</p>
        <p className='text-2xl font-bold md:text-3xl'> Full Stack Developer</p>
        <p className='text-base mt-8 md:text-lg'>Compensation $120k-$180k</p>
        <p className='mt-4 md:text-xl'>Remote</p>
        </div>

        <p className='md:px-8 lg:px-12'>
        The standard Lorem Ipsum passage, used since the 1500s
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

        1914 translation by H. Rackham
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

        Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>

        <div className='mt-4 md:px-8 lg:px-12'>

        <p className='text-lg'>Contact us at</p>
        <p className='text-lg'>abbaskhan61999@gmail.com</p>
        <p className='text-lg'>Official Website</p>
        <p className='text-blue-400 text-lg'>Learnweb3.io</p>
        </div> */}

        </section>
}
    </div>
  )
}

export default description