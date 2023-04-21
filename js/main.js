const inputNum = document.querySelector("#findPrimeNumberId");
const btn = document.querySelector("#btnId");
const ans = document.querySelector("#ansId");

btn.addEventListener("click", function () {
    
    pn = parseInt(inputNum.value);//將要輸入要計算的值轉成數字後才能進行計算
    var arr = [];//建立一個清單放質數
    let i; //除數
    let j; //被除數

                   //11  i 10
    for (i = 2; i <= pn; i++) {
        for (j = 2; j < i; j++)
            if (i / j == 0) {
                break;
            } else if (j == i - 1) {
                arr.push(i);
            }
    }

    console.log(arr);
    ans.innerText = `${arr}`;
})


