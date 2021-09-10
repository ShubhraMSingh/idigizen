

function OurSchedule({startDate, numOfClasses, daysSelected}){
  
   
    /*const numOfClasses = 10;
    const startDateStr = "Oct 1, 2021";
    const startDate = new Date(startDateStr);
    const daysSelected = [0,1,2];
    */

    console.log(`Days Selected ${daysSelected}`);
    console.log(`num of classes - ${numOfClasses}`)
    const startDay = startDate.getDay();

         
    var arrNextDates = [];
    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }
    let count = 0;
    let i=0;
    let objTemp = {
        nextClassDate:'',
        nextClassDay:''
    };

    console.log(`Array Dates Earlier ${arrNextDates}`);
    console.log(`Count Earlier ${count}`);
    console.log(`length of array.. days selected.. ${daysSelected.length}`);
        if(daysSelected.length>0){
        while(count<numOfClasses){
            i++
            var  maybeNextDate = startDate.addDays(i);
            var  maybeNextDateDay = maybeNextDate.getDay();
                if(daysSelected.includes(maybeNextDateDay)){
                   objTemp.nextClassDate = maybeNextDate;
                   objTemp.nextClassDay  = maybeNextDateDay;
                   console.log(objTemp);
                   arrNextDates.push(objTemp);
                   count++;
                }
                
               
        } 
       
    }       
        
   

    
}


export default OurSchedule 
