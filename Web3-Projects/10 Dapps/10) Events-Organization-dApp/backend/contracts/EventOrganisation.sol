// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
/*
  -> Required functionalities 
  -> We should have a struct to store all the properties and event consists of
  -> We should be able to create new events (maybe make it onlyOwner)
  -> We should be able to buy tickets for the event if it exists
  -> We should be able to transfer tickets to another address if we want
  -> We should have an ID using which we should be able to use inside our mappings and make that a public state variable
*/

contract EventContract is Ownable {
  struct Event {
    address admin;
    string name;
    string location;
    uint date;
    uint ticketPrice;
    uint ticketCount; 
    uint ticketsAvailable; 
  }

  mapping(uint => Event) public events;
  mapping(address => mapping(uint => uint)) public tickets;
  uint public nextId;

  function createEvent(string memory _name, string memory _location, uint _date, uint _ticketPrice, uint _ticketsCount) public onlyOwner {
    require(_date > block.timestamp,
     "You can't create events in the past, You've been smoking some low quality weed");
     require(_ticketsCount > 0, 
     "There's no tickets to this event, What kind of scary ass clowns came to your birthday???");
     events[nextId] = Event(msg.sender, _name, _location, _date, _ticketPrice, _ticketsCount, _ticketsCount);
     nextId++;
  }

  modifier noActiveEvents(uint _id) {
    require(events[_id].date != 0, "Event does not even exist");
    _;
  }

  modifier eventAlreadyOccured(uint _id) {
    require(events[_id].date > block.timestamp,
    "You're living in the past my friend wake up!");
    _;
  }

  function buyTickets(uint _id, uint _quantity) external payable noActiveEvents(_id) eventAlreadyOccured(_id) {
    require(events[_id].ticketsAvailable > 0,
     "No tickets left for this event, You could have been abit more responsible lazy bastard");
    //  require(msg.value >= (_event.ticketPrice * _quantity), "You're broke my friend!!!");
     require(msg.value >= events[_id].ticketPrice * _quantity, "You're broke Bitch!");
     tickets[msg.sender][_id] += _quantity;
     events[_id].ticketsAvailable -= _quantity;
  }

  function transferTickets(uint _id, uint _quantity, address _reciever) external noActiveEvents(_id) eventAlreadyOccured(_id) {
    require(tickets[msg.sender][_id] >= _quantity,
     "You don't have enough tickets to transfer dummy!");
    tickets[msg.sender][_id] -= _quantity;
    tickets[_reciever][_id] += _quantity;
  }
  
  function getEvent(uint _id) public view returns(Event memory) {
    return events[_id];
  }
  
  function getDate(uint _id) public view returns(uint) {
    return events[_id].date;
  }

}