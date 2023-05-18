const request_Username = window.prompt('Enter your User name : ');

let header = document.getElementById('Main_title');

header.innerHTML = 'Hey '+request_Username+'!'+' '+'Make your goals come true...';

const Fake_User = 'user#';
const Random_User_Number = Math.floor(Math.random() * 100) + 1;

function If_No_Username(Text_if_No_Username,Text_If_Yes_Username){
    if (request_Username === null){

        header.innerHTML =  'Hey! Make your goals come true...';
        console.error(Text_if_No_Username);

    }else{
        console.warn(Text_If_Yes_Username);
    }
}

If_No_Username('No username created...','Username created !')