import React, { useEffect, useState } from 'react'
import { useSigner, useProvider, useContract } from 'wagmi'
import { abi, EVENT_CONTRACT_ADDRESS } from '../constants';

const EventCard = (): JSX.Element => {
    const [eventsArray, setEventsArray] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [ticketQuantity, setTicketQuantity] = useState<number>(0);
    const [eventDate, setEventDate] = useState<string>("");
    const [transferTicketData, setTransferTicketData] = useState<object>({
        quantity: 0,
        address: ""
    })

    const handleTicketsTransfer = (e: any): void => {
        setTransferTicketData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    console.log(transferTicketData)

    function handleBuyTicketData(e: any): void {
        setTicketQuantity(+e.target.value);
        console.log("ticketQuantity", ticketQuantity)
    }
    console.log(ticketQuantity, "outside")

    const provider = useProvider();
    const {data: signer} = useSigner();
    const contract = useContract({
        addressOrName: EVENT_CONTRACT_ADDRESS,
        contractInterface: abi,
        signerOrProvider: signer || provider
    });

    const fetchEvent = async(_id: number) => {
        try{
            const event = await contract.events(_id);
            await event.date.toNumber();
            const timestamp = await event.date * 1000;
            let _date: Date = new Date(timestamp)
            const data = {
                Name: event.name, 
                Location: event.location,
                Date: _date.toLocaleString(),
                Price: event.ticketPrice.toString() ,
                Available: event.ticketsAvailable.toString()
            }
            console.log(data) ;
            return data
        }catch(err){
            console.log(err);
        }
    }

    const fetchEvents = async(): Promise<void> => {
        try {
           const eventID: number = await contract.nextId();
           console.log(eventID.toString())
           const promises = [];
           for(let id: number = 0; id < eventID; id++) {
            const promisedEvent = fetchEvent(id);
            promises.push(promisedEvent);
           }
            const events = await Promise.all(promises);
            console.log("events", events)
            setLoading(true)
            setEventsArray(events)
            setLoading(false)            
        } catch (err) {
            console.error(err)
        }
    }

    const purchaseTickets = async (id: number, _quantity: number): Promise <void> => {
        try {
            if(ticketQuantity) {
                const _value = `${_quantity}`
                const tx: any = await contract.buyTickets(id, _quantity, {
                    value: _value
                });
                setLoading(true);
                await tx.wait();
                setLoading(false);
            }
        } catch (err: any) {
            alert(err.reason)
            console.error(err)
        }
    }

    const transferTickets = async (id: number, val: any): Promise<void> => {
        try {
            if(val.quantity && val.address)
            {
                const _quantity: number = val.quantity
                // const _value: string = `${val.quantity}`;
                // only used for payable methods
                const tx: any = await contract.transferTickets(id, _quantity, val.address)
                setLoading(true);
                await tx.wait();
                setLoading(false);
            }
        } catch (err: any) {
            alert(err.reason)
            console.error(err)
        }
    }

    const getEventDate = async (id: number): Promise <void> => {
        try {
            const date = await contract.getDate(id);
            await date.toNumber();
            const timestamp = await date * 1000;
            let _date: Date = new Date(timestamp)
            console.log("date from backend in func", _date.toLocaleString())
            setEventDate(_date.toLocaleString())
        } catch (err: any) {
            alert(err.reason)
            console.error(err)
        }
    }
    console.log(eventDate)

    const testingTimestamp = (): void => {
        let timestamp: number = 1661497575 * 1000;
        let date: Date = new Date(timestamp);
        console.log(date.toLocaleDateString())
        console.log("date: ",date)
    }
   
    useEffect(() => {
        fetchEvents()
        testingTimestamp()
        getEventDate(0)
    }, [loading])

    
    return (
        <div className='px-1'>
    {eventsArray.map((property, idx) => {
        return (
            <div key={idx} 
            className='text-white border-y-2 border-blue-200 md:flex md:justify-between'>
            <div className='text-2xl sm:border-r-4 border-sky-300 md:flex md:flex-col md:justify-center py-4'>
                <h3>Starting Date and Time </h3>
                <p>{property.Date}</p>
        </div>
        <div className='text-2xl my-4 md:flex md:flex-col md:justify-center'>
            <p>{property.Name}</p>
            <p>{property.Location}</p>
            <p>Ticket Price: {property.Price}</p>
            <p>Tickets Available: {property.Available}</p>
        </div>
        <div className='flex flex-col sm:justify-center my-4 sm:items-center'>
            <button className='bg-blue-400 hover:bg-sky-500 rounded-3xl w-40 py-2 mb-4'
             onClick={() => purchaseTickets(idx, ticketQuantity)}
            >
                Buy Tickets
            </button>
            <p className='text-lg pb-2'>Enter the amount of Tickets you want to purchase</p>
            <input
            onChange={handleBuyTicketData}
            className='text-black text-2xl w-10 text-center'
            type="number"
            />
        </div>
        <div className='flex flex-col sm:justify-center my-4 sm:items-center'>
            <button className='bg-blue-400 hover:bg-sky-500 rounded-3xl w-40 py-2 mb-2'
            onClick={() => transferTickets(idx, transferTicketData)}
            >
                Transfer Tickets
            </button>
            <p className='text-lg pb-2'>Enter the amount of Tickets you want to Transfer</p>
            <input
            name='quantity'
            onChange={handleTicketsTransfer}
            className='text-black text-2xl w-10 text-center'
            type="number"
            />
            <p className='text-lg pb-2'>Enter the recipents Address</p>
            <input 
            name="address"
            className='text-black text-xl py-1 w-full'
            onChange={handleTicketsTransfer}
            />
        </div>
         </div>
        )
        })}
    </div>
  )
}

export default EventCard