
      let eleMsgError = document.getElementById("error");
      let eleIp1 = document.getElementById("ip1");
      let eleIp2 = document.getElementById("ip2");
      let eleResult = document.getElementById("result");
      let eleBtnOperators = document.querySelectorAll(".operator");

      eleBtnOperators.forEach((e, index) => {
        e.addEventListener("click", (event) => {
          console.log(event.target.id);
          let op = event.target.id;
          calculate(op);
        });
      });

      function calculate(op) {
        let x = eleIp1.value;
        let y = eleIp2.value;
        let s = x + op + y;
        eleResult.value = eval(s);

        // if (op == "+") {
        //   z = +x + +y;
        // } else if (op == "-") {
        //   z = +x - +y;
        // } else if (op == "*") {
        //   z = +x * +y;
        // } else if (op == "/") {
        //   z = +x / +y;
        // }

        let eleClear = document.querySelector("#clr");
        eleClear.addEventListener("click", () => {
          eleIp1.value = "";
          eleIp2.value = "";
          eleResult.value = "";
        });
      }
   