var EventCount = 0;

function increment(){
    EventCount++;
}

function getEventCount(){
    return EventCount;
}

function resetEventCount(){
    EventCount = 0;
};

module.exports={
    increment,
    getEventCount,
    resetEventCount
}