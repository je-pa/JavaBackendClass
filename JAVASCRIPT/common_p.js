function join(){
    var pwElem1 = document.getElementById('pw1');
    var pwElem2 = document.getElementById('pw2');

    if(pwElem1.value !== pwElem2.value){
        alert('비밀번호를 확인해 주세요');
        return;
    }

    location.href = 'login.html';
}

function goToBack(){
    history.back();
}

function clkLogin(){
    var txtIdElem = document.getElementById('txtId');
    console.log(txtIdElem.value);
    if(txtIdElem.value ===''){
        alert('로그인을 할 수 없습니다.(1)');
        return;
    }

    var txtPwElem = document.getElementById('txtPw');
    if(txtPwElem.value ===''){
        alert('로그인을 할 수 없습니다.(2)');
        return;
    }

    location.hrdf = 'main.html';

}