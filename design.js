class TinhBTDS {
	constructor(name){
		this.name = name;
	}
	BTDS() {
		var infixval = document.getElementById("infixvalue").value;
		var stackarr = [];
		var topp = -1
		// Push phần tử vào Stack và tăng biến đếm lên 1 đơn vị
		function push(e) {
			topp++;
			stackarr[topp] = e;
		}
		// Pop lấy ra 1 phần tử đầu stack giảm biển đếm xuống 1 đơn vị
		// và trả về giá trị biến đã lấy.
		function pop() {
			if (topp == -1)
				return 0;
			else {
				var popped_ele = stackarr[topp];
				topp--;
				return popped_ele;
			}
		}
		// hàm kiểm tra phần tử truyền vào có phải toán tử không
		function operator(op) {
			if (op == '+' || op == '-' ||
				op == '^' || op == '*' ||
				op == '/' || op == '(' ||
				op == ')') {
				return true;
			}
			else
				return false;
		}
		// Hàm kiểm tra đô ưu tiên của toán tử truyền vào
		function precedency(pre) {
			if (pre == '@' || pre == '(' || pre == ')') {
				return 1;
			}
			else if (pre == '+' || pre == '-') {
				return 2;
			}
			else if (pre == '/' || pre == '*') {
				return 3;
			}
			else if (pre == '^') {
				return 4;
			}
			else
				return 0;
		}
		// Hàm chuyển đổi biểu thức tiền tố sang hậu tố
		function InfixtoPostfix() {

			// Postfix array created ->tạo mảng postfix.
			var postfix = [];
			var temp = 0;
			push('@');
			// Iterate on infix string -> lặp chuỗi Infix
			for (var i = 0; i < infixval.length; i++) {
				var el = infixval[i];
		
				// Checking whether operator or not ->Kiểm tra nó có phải toán tử hay không
				if (operator(el)) {
					if (el == ')') {
						while (stackarr[topp] != "(") {
							postfix[temp++] = pop();
						}
						pop();
					}
		
					// Checking whether el is ( or not -> kiểm tra phần tử el[i] có phải là "(" hay không
					else if (el == '(') {
						push(el);
					}
		
					// Comparing precedency of el and -> so sanh độ ưu tiên củab el và stackarr
					// stackarr[topp]
					else if (precedency(el) > precedency(stackarr[topp])) {
						push(el);
					}
					else {
						while (precedency(el) <=
							precedency(stackarr[topp]) && topp > -1) {
							postfix[temp++] = pop();
						}
						push(el);
					}
				}
				else {
					postfix[temp++] = el;
				}
			}
		
			// Adding character until stackarr[topp] is @ -> Thêm ký tự cho đến khi stackarr = @
			while (stackarr[topp] != '@') {
				postfix[temp++] = pop();
			}
			// String to store postfix expression -> Tạo chuỗi lưu chữ biểu thức hậu tố
			var st = "";
			for (var i = 0; i < postfix.length; i++)
				st += postfix[i];
				return st;
		}
		//Tính toán biểu thức đại số
		function evaluatePostfix(exp){
			//create a stack
				let stack=[];
				  
				// Scan all characters one by one
				for(let i=0;i<exp.length;i++)
				{
					let c=exp[i];
					  
					// If the scanned character is an operand (number here),
					// push it to the stack.
					if(! isNaN( parseInt(c)   ))
					stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
					  
					//  If the scanned character is an operator, pop two
					// elements from stack apply the operator
					else
					{
						let val1 = stack.pop();
						let val2 = stack.pop();
						  
						switch(c)
						{
							case '+':
							stack.push(val2+val1);
							break;
							  
							case '-':
							stack.push(val2- val1);
							break;
							  
							case '/':
							stack.push(val2/val1);
							break;
							  
							case '*':
							stack.push(val2*val1);
							break;
					  }
					}
				}
				return stack.pop(); 
		}
		let exp = InfixtoPostfix();
		document.getElementById("text").innerHTML = InfixtoPostfix();
		document.getElementById("text1").innerHTML = evaluatePostfix(exp);
	}
	getName() {
		console.log(this.name);
	}
}
var ob = new TinhBTDS ('2*3(-6+4)*5')
ob.getName()
ob.BTDS()