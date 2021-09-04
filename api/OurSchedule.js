

function OurSchedule({startDate, numOfClasses, daysSelected}){
  
   
    /*const numOfClasses = 10;
    const startDateStr = "Oct 1, 2021";
    const startDate = new Date(startDateStr);
    const daysSelected = [0,1,2];
    */


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

        if(daysSelected.length>0){
        while(count<numOfClasses){
    
            var  maybeNextDate = startDate.addDays(i++);
            var  maybeNextDateDay = maybeNextDate.getDay();
                if(daysSelected.includes(maybeNextDateDay)){
                   objTemp.nextClassDate = maybeNextDate;
                   objTemp.nextClassDay  = maybeNextDateDay;
                   arrNextDates.push(objTemp);
                   count++;
                }
                console.log(arrNextDates);
                console.log(count);
               
        }      
    }       
        

    
}


export default OurSchedule 