
//UC1 :-Check Employee is Present OR Absent
{
const IS_ABSENT = 0                          // declare const variable for Emp Absent
let empCheck= Math.floor(Math.random()*10)%2; // generate Random no. for Present Or Not
// Use IF-ELSE condition 
    if (empCheck == IS_ABSENT){
        console.log("UC1- Employee is Absent, Exiting the program");
    }else{
        console.log("UC1 - Employee is PRESENT");
    }
}

// //UC2:- Calculate Employee Wage
// //declare all the constant variables.
// const IS_PART_TIME =1;
// const IS_FULL_TIME =2;
// const PART_TIME_HOURS =4;
// const FULL_TIME_HOURS =8;
// const WAGE_PER_HOUR =20;

// let empHrs=0;
// let empCheck =Math.floor(Math.random()*10)%3;

// //Use swoitch case to check Absent, Part time, full Time
//     switch (empCheck){
//     case IS_PART_TIME:
//         empHrs = PART_TIME_HOURS;
//     break;
//     case IS_FULL_TIME:
//         empHrs = FULL_TIME_HOURS;
//     break;
//     default:
//         empHrs = 0;   
// }

// let empWage = empHrs* WAGE_PER_HOUR;// Calculate Employee wage
// console.log("UC2 - Employee Wage: ", empWage );


// UC3:- Refactor Code to write function for daily working hrs.
//declare all the constant variables.
// const IS_PART_TIME =1;
// const IS_FULL_TIME =2;
// const PART_TIME_HOURS =4;
// const FULL_TIME_HOURS =8;
// const WAGE_PER_HOUR =20;

// let empCheck =Math.floor(Math.random()*10)%3;
// //Use function and switch case to check Absent, Part time, full Time
// function getWorkingHours(empCheck){    
//     switch (empCheck){
//     case IS_PART_TIME:
//         return PART_TIME_HOURS;
//     case IS_FULL_TIME:
//         return FULL_TIME_HOURS;
//     default:
//         return 0;   
//     }
// }


// let empHrs = getWorkingHours(empCheck);
// let empWage = empHrs* WAGE_PER_HOUR;// Calculate Employee wage
// console.log("Working Hrs: ", empHrs," Employee Wage: ", empWage );

//UC4:Calculating Emp Wage for month considering 20 days of whole month
// const IS_PART_TIME =1;
// const IS_FULL_TIME =2;
// const PART_TIME_HOURS =4;
// const FULL_TIME_HOURS =8;
// const WAGE_PER_HOUR =20;
// const NUM_OF_WORKING_DAYS= 20;

// let empCheck =Math.floor(Math.random()*10)%3;
// //Use function and switch case to check Absent, Part time, full Time
// function getWorkingHours(empCheck){    
//     switch (empCheck){
//     case IS_PART_TIME:
//         return PART_TIME_HOURS;
//     case IS_FULL_TIME:
//         return FULL_TIME_HOURS;
//     default:
//         return 0;   
//     }
// }


// let totalEmpHrs = 0;
//use for loop as UC condition
// for (let day =0;day<NUM_OF_WORKING_DAYS; day++){
//     let empCheck =Math.floor(Math.random()*10)%3;
//     totalEmpHrs += getWorkingHours(empCheck);

// }

// let empWage = totalEmpHrs* WAGE_PER_HOUR;// Calculate Employee wage
// console.log("Working Hrs: ", totalEmpHrs," Employee Wage: ", empWage );


//UC5:- Calculate Wage till Wrk hrs of 160 OR reached max days 20 of month
const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS =4;
const FULL_TIME_HOURS =8;
const WAGE_PER_HOUR =20;
const NUM_OF_WORKING_DAYS= 20;
const MAX_HRS_IN_MONTH = 160;


let empCheck =Math.floor(Math.random()*10)%3;
//Use function and switch case to check Absent, Part time, full Time
function getWorkingHours(empCheck){    
    switch (empCheck){
    case IS_PART_TIME:
        return PART_TIME_HOURS;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
    default:
        return 0;   
    }
}


let totalEmpHrs = 0;
let totalWorkingDays = 0;
//use while loop as UC condition
while(totalEmpHrs<= MAX_HRS_IN_MONTH && totalWorkingDays< NUM_OF_WORKING_DAYS ){
    totalWorkingDays++;
    let empCheck =Math.floor(Math.random()*10)%3;
    totalEmpHrs += getWorkingHours(empCheck); 
}
let empWage = totalEmpHrs* WAGE_PER_HOUR;// Calculate Employee wage
console.log("Total Days: ",totalWorkingDays,",", "Total Working Hrs: ", totalEmpHrs,","," Employee Wage: ", empWage );