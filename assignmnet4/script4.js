function jambScore(score) {
  if (score >= 180) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
}
jambScore(190);

function votingAge(age) {
  if (age >= 18) {
    console.log("You are eligible to vote");
  } else {
    console.log("Not Eligible");
  }
}
votingAge(13);

function studentGrade(name, score) {
  if (score >= 90) {
    console.log("Excellent");
  } else if (score >= 75) {
    console.log("Good");
  } else if (score >= 50) {
    console.log("Average");
  } else {
    console.log("Fail");
  }
}

studentGrade("lol", 75);

function checkAccess(hasID, above18) {
  return hasID && above18 ? "Access Granted" : "Access Denied";
}

console.log(checkAccess(true, false));

function eval(score) {
  for (let i = 0; i < score.length; i++) {
    if (score[i] >= 50) {
      console.log("Pass");
    } else {
      console.log("Fail");
    }
  }
}

eval([30, 50, 56, 93, 10 ,36])

const  passBothSub = (math, english) => (math >= 50 && english >= 50 ? "Yes" : "No")

console.log(passBothSub(57,47))


function signUp(email, number){
    if(email || number){
        console.log("You can sign up")
    }else{
        console.log("You can't sign up, please provide both email or number")
    }
}

signUp("","")

function logIN(username, password){
    if(username || password == null){
        console.log("Invalid Input")
    }
}

function jobType(hours) {
    return hours >= 40 ? "Full Time" : "Part Time";
}

console.log(jobType(55))

const  large = (a,b) => (a > b ? a : b)

console.log(large(5,56))