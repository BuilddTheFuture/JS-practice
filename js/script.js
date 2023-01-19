'use strict';

//
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//     let p = document.createElement('p');
//     p.textContent = elem;
//     parent.appendChild(p)
//     p.addEventListener('click', () => {
//         p.textContent = +p.textContent + 1;
//     })
// };

//
// let list = document.querySelector('#list');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//     let li = document.createElement('li');
//     li.textContent = elem;
//     list.appendChild(li)
//     li.addEventListener('click', () => {
//         alert(li.textContent)
//     })
// }

//
// let list = document.querySelector('#list');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//     let li = document.createElement('li');
//     li.textContent = elem;
//     list.appendChild(li)
//     function func() {
//         li.textContent += '!';
//         li.removeEventListener('click', func)
//     }
//     li.addEventListener('click', func)
// }

// // генератор таблиц, ширина и высота таблиц задается в двух инпутах
// let table = document.querySelector('#table');
// let inpWidth = document.querySelector('#inpWidth');
// let inpHeight = document.querySelector('#inpHeight')
// let button = document.querySelector('#button');
// button.addEventListener('click', () => {
//     for (let i=1; i<=+inpWidth.value; i++) {
//         let td = document.createElement('td');
//         td.textContent = '# ' + i;
//         for (let j=1; j<=+inpHeight.value-1; j++) {
//             let tr = document.createElement('tr');
//             tr.textContent = 'text ' + j;
//             td.appendChild(tr)
//         }
//         table.appendChild(td)
//     } 
// })

//
// let table = document.getElementById('table');
// let users = [
// 	{
// 		name: 'name1',
// 		surname: 'surname1',
// 		patronymic: 'patronymic1'
// 	},
// 	{
// 		name: 'name2',
// 		surname: 'surname2',
// 		patronymic: 'patronymic2'
// 	},
// 	{
// 		name: 'name3',
// 		surname: 'surname3',
// 		patronymic: 'patronymic3'
// 	},
// ];  
// for (let user of users) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.surname;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.patronymic;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// }

//
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');
// for (let employee of employees) {
// 	let tr = document.createElement('tr')
// 	let td1 = document.createElement('td');
// 	td1.textContent = employee.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = employee.age;
// 	tr.appendChild(td2);
// 	td2.addEventListener('click', () => {
// 		td2.textContent = +td2.textContent + 1;
// 	})
// 	let td3 = document.createElement('td');
// 	td3.textContent = employee.salary;
// 	tr.appendChild(td3);
// 	td3.addEventListener('click', () => {
// 		td3.textContent = +td3.textContent * 1.1;
// 	});
// 	table.appendChild(tr)
// }
// let button = document.querySelector('#button');
// button.addEventListener('click', () => {
// 	let trs = document.querySelectorAll('#table tr');
// 	let tr = document.createElement('tr');
// 	for (let i = 1; i <= trs.length+1; i++) {
// 		let td = document.createElement('td');
// 		td.textContent = i;
// 		tr.appendChild(td)
// 	};
// 	table.appendChild(tr)
// 	for (let tr of trs) {
// 		let td = document.createElement('td');
// 		td.textContent = 'gg';
// 		tr.appendChild(td)
// 	}
// });

//
// let button = document.querySelector('#button');
// let parent = document.querySelector('#parent');
// button.addEventListener('click', () => {	
// 	let li = document.createElement('li');
// 	li.textContent = 'new Li';
// 	parent.appendChild(li); // добавление
// 	let parent_arr = document.querySelectorAll('#parent li');
// 	for (let elem of parent_arr) {
// 		elem.addEventListener('click', () => {
// 			elem.remove(); // удаление
// 		})
// 	}
// })

//
// let elem = document.querySelector('#elem');
// let remove = document.querySelector('#remove');
// remove.addEventListener('click', () => {
// 	elem.remove(); // удаление елемента
// 	event.preventDefault() // отмена обновления
// })

//
// let parent = document.querySelector('#parent');
// for (let i=1; i<=4; i++) {
// 	let li = document.createElement('li'); 
// 	li.textContent = i;
// 	parent.appendChild(li);

// 	let link = document.createElement('a');
// 	link.href = '';
// 	link.textContent = 'посилання на видалення - ';
// 	li.prepend(link)
	
// 	link.addEventListener('click', () => {
// 		li.remove();
// 		event.preventDefault()
// 	})
// }

//
// let table = document.querySelector('#table');
// let k = 1;
// for (let i=1; i<=4; i++) {
// 	let tr = document.createElement('tr');
// 	for (let j=1; j<=4; j++) {
// 		let td = document.createElement('td');
// 		td.textContent = k;
// 		tr.appendChild(td);
// 		k++
// 	}
// 	let link = document.createElement('a');
// 	link.href = '#';
// 	link.textContent = 'remove';
// 	tr.appendChild(link);
// 	link.addEventListener('click', () => {
// 		tr.remove()
// 	})
// 	table.appendChild(tr)
// }

//
// let text = document.querySelector('#text');
// let input = document.querySelector('#input');
// input.value = text.textContent;
// input.addEventListener('input', () => { // меняется при вводе
// 	text.textContent = input.value;
// })

//
// let text = document.querySelector('#text');
// let parent = document.querySelector('#parent');
// text.addEventListener('click', function() {
// 	let input = document.createElement('input')
// 	input.value = text.textContent;
	
// 	input.addEventListener('input', function() {
// 		text.textContent = this.value;
// 	});
// 	input.addEventListener('blur', function() {
// 		this.remove();
// 	})
	
// 	parent.appendChild(input);
// })

//
// let text = document.querySelector('#text');
// let parent = document.querySelector('#parent');
// text.addEventListener('click', function func() {
// 	let input = document.createElement('input')
// 	input.value = text.textContent;
// 	text.textContent = '';	
// 	text.appendChild(input);
// 	text.removeEventListener('click', func)

// 	input.addEventListener('blur', () => {
// 		text.textContent = input.value;
// 		text.addEventListener('click', func);
// 	})
// });

//
// let list = document.querySelectorAll('p');
// for (let elem of list) {
//     elem.addEventListener('click', function func() {

//         let input = document.createElement('input');
//         input.value = elem.textContent;
//         elem.textContent = '';
//         elem.appendChild(input)
//         elem.removeEventListener('click', func);
//         input.addEventListener('blur', () => {
//             elem.textContent = input.value;
//             elem.addEventListener('click', func)
//         })
//     })
// }

//
// let parent = document.querySelector('#parent');
// let num_str = 5;
// let num_col = 5;
// let n = 1;
// for (let i=1; i<=num_str; i++) {
//     let tr = document.createElement('tr')
//     for (let j=1; j<=num_col; j++) {
//         let td = document.createElement('td');
//         td.textContent = n;
//         tr.appendChild(td)
//         n++;
//     }
//     parent.appendChild(tr)
// }
// let list = document.querySelectorAll('#parent td');
// for (let elem of list) {
//     elem.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = elem.textContent;
//         elem.textContent = '';
//         elem.appendChild(input);

//         elem.removeEventListener('click', func);
//         input.addEventListener('blur', function() {
//             elem.textContent = input.value;
//             elem.addEventListener('click', func)
//         })
//     })
// }        

//
// let list = document.querySelectorAll('#parent p');
// let list_span = document.querySelectorAll('#parent span');
// for (let elem of list) {
//     let a = document.createElement('a');
//     a.href = '';
//     a.textContent = 'удалить';
//     elem.appendChild(a);
//     a.addEventListener('click', () => {
//         elem.remove()
//         event.preventDefault() // отменяем переход по ссылке
//     })
// }
// for (let span of list_span) {
//     span.addEventListener('click' , function func() {
//         let input = document.createElement('input');
//         input.value = span.textContent;
//         span.textContent = '';
//         span.appendChild(input);
//         span.removeEventListener('click', func);
//         input.addEventListener('blur', function() {
//             span.textContent = input.value;
//             span.addEventListener('click', func);
//         })
//     })
// }

//
// let list = document.querySelectorAll('#parent p');
// // let list_span = document.querySelectorAll('#parent span');
// for (let elem of list) {
//     let span = document.createElement('span');
//     span.textContent = elem.textContent;
//     elem.textContent = '';
//     elem.prepend(span); // обернули текст в спан

//     let a = document.createElement('a');
//     a.href = '';
//     a.textContent = 'удалить';
//     elem.appendChild(a);
//     a.addEventListener('click', () => {
//         elem.remove()
//         event.preventDefault() // отменяем переход по ссылке
//     })
// };
// let list_span = document.querySelectorAll('#parent span')
// for (let span of list_span) {
//     span.addEventListener('click' , function func() {
//         let input = document.createElement('input');
//         input.value = span.textContent;
//         span.textContent = '';
//         span.appendChild(input);
//         span.removeEventListener('click', func);
//         input.addEventListener('blur', function() {
//             span.textContent = input.value;
//             span.addEventListener('click', func);
//     })
// })
// }

//
// let list = document.querySelectorAll('#parent p');
// let list_span = document.querySelectorAll('#parent span');
// for (let elem of list) {
//     let span = document.createElement('span');
//     span.textContent = elem.textContent;
//     elem.textContent = '';
//     elem.prepend(span); // обернули текст в спан

//     let a = document.createElement('a');
//     a.href = '';
//     a.textContent = 'удалить';
//     elem.appendChild(a);
//     a.addEventListener('click', () => {
//         a.remove();
//         span.classList.add('line-through'); // добавили класс перечеркивания текста
//         event.preventDefault() // отменяем переход по ссылке
//     })
// };
// let list_span = document.querySelectorAll('#parent span')
// for (let span of list_span) {
//     span.addEventListener('click' , function func() {
//         let input = document.createElement('input');
//         input.value = span.textContent;
//         span.textContent = '';
//         span.appendChild(input);
//         span.removeEventListener('click', func);
//         input.addEventListener('blur', function() {
//             span.textContent = input.value;
//             span.addEventListener('click', func);
//     })
// })
// }

//
// let parent = document.querySelector('#parent');
// let num = 1;
// let str = 5;
// let col = 5;
// for (let i=1; i<=str; i++) {
//     let tr = document.createElement('tr')
//     for (let j=1; j<=col; j++) {    
//         let td = document.createElement('td');
//         td.textContent = num;
//         tr.appendChild(td)
//         num++;
//     }
//     parent.appendChild(tr);

//     let td = document.createElement('td');
//         let link = document.createElement('a');
//         link.href = '#';
//         link.textContent = 'make string green';
//         td.appendChild(link);
//     tr.appendChild(td);

//     link.addEventListener('click', function func() {
//         tr.classList.toggle('green');
//     })
// }

// первій способ
// let buttons = document.querySelectorAll('button');
// for (let button of buttons) {
//     button.addEventListener('click', function() {
//         let elem1 = document.querySelector('#' + this.dataset.elem);
//         elem1.classList.toggle('hidden')
//     })
// }

// второй способ
// let buttons = document.querySelectorAll('button');
// let elems = document.querySelectorAll('p');
// for (let i = 0; i <= buttons.length; i++) {
//     buttons[i].addEventListener('click', () => {
//         elems[i].classList.toggle('hidden')
//     })
// }

// третий способ
// let buttons = document.querySelectorAll('button');
// for (let button of buttons) {
//     button.addEventListener('click', function() {
//         button.previousElementSibling.classList.toggle('hidden');
//     })
// }

//
// let tds = document.querySelectorAll('#table td');
// let color = 'color1';
// for (let td of tds) {
//     td.addEventListener('click', () => {
//         if (color == 'color1') {
//             color = 'color2';
//         } else {
//             color = 'color1';
//         }
//         td.classList.add(color)
//     })
// }

//
// let tds = document.querySelectorAll('#table td');

// let i = 0;
// let colors = ['color1', 'color2', 'color3'];

// for (let td of tds) {
//     td.addEventListener('click', function() {
//         this.classList.add(colors[i])

//         i++;
//         if (i >= colors.length) {
//             i = 0;
//         }
//     })
// }

// let tds = document.querySelectorAll('#table td');
// let i = -1;
// let colors = ['color1', 'color2', 'color3'];
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		i++;
//         if (i >= colors.length - 1) {
//             this.classList.remove(colors[(i-0)]);
//             console.log(this.className);
//             this.classList.remove(colors[(i-1)]);   
//             console.log(this.className);
//         }
//         this.classList.add(colors[i]);
// 		if (i == colors.length) {
// 			i = -1;
// 		};
// 	});
// }

// let tds = document.querySelectorAll('#table td');
// let i = 0;
// let colors = ['color1', 'color2', 'color3'];
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		if (Number(this.dataset.num) <= colors.length) {
//             this.classList.add(colors[Number(this.dataset.num)]);
//             this.dataset.num = String(Number(this.dataset.num) +1)
//         } else {
//             this.dataset.num = '0';
//             this.classList.add(colors[Number(this.dataset.num)]);
//             console.log(this.dataset.num);
//         }
// 		// if (i == colors.length) {
// 		// 	i = 0;
// 		// };
// 	});
// }






//Практика
//1
// let arr = ['rr', 'tt', 'yy', 'oo'];
// let parent = document.querySelector('#parent');
// let ul = document.createElement('ul');
// for (let i = 0; i <= arr.length-1; i++) {
//     let li = document.createElement('li');
//     li.textContent = arr[i]
//     ul.appendChild(li);
// }
// parent.appendChild(ul)

//2
// let arr = ['rr', 'tt', 'yy', 'oo'];
// let parent = document.querySelector('#parent');
// let ul = document.createElement('ul');
// for (let i = 0; i <= arr.length-1; i++) {
//     let li = document.createElement('li');
//     li.textContent = arr[i];
//     li.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = li.textContent;
//         li.textContent = '';
//         li.removeEventListener('click', func);
//         input.addEventListener('blur', function() {
//             li.textContent = input.value;
//             li.addEventListener('click', func);
//         })
//         li.appendChild(input)
//     });
//     ul.appendChild(li);
// }
// parent.appendChild(ul)

//3
// let arr = ['rr', 'tt', 'yy', 'oo'];
// let parent = document.querySelector('#parent');
// let ul = document.createElement('ul');

// for (let i = 0; i <= arr.length-1; i++) {
//     let li = document.createElement('li');
//     li.textContent = arr[i];
//     li.addEventListener('click', func);
//     ul.appendChild(li);
//     function func() {
//         let input = document.createElement('input');
//         input.value = li.textContent;
//         li.textContent = '';
//         li.removeEventListener('click', func);
//         input.addEventListener('blur', function() {
//             li.textContent = input.value;
//             li.addEventListener('click', func);
//         })
//         li.appendChild(input)
//     }
// }
// parent.appendChild(ul)
// let inputMain = document.createElement('input');
// let btn = document.createElement('button');
// btn.textContent = 'add';
// parent.appendChild(btn);
// btn.addEventListener('click', func1);
// function func1() {
//     let li = document.createElement('li');
//     li.textContent = inputMain.value; 
//     inputMain.value = '';  
//     ul.appendChild(li);
//     li.addEventListener('click', function func1() {
//         let input = document.createElement('input');
//         input.value = li.textContent;
//         li.textContent = '';
//         li.removeEventListener('click', func1);
//         input.addEventListener('blur', function() {
//             li.textContent = input.value;
//             li.addEventListener('click', func1);
//         })
//     li.appendChild(input)
//     });
// }
// parent.appendChild(inputMain);

//4-5 добавить ссілки на перечеркивание и удаление
// let arr = ['rr', 'tt', 'yy', 'oo'];
// let parent = document.querySelector('#parent');
// let ul = document.createElement('ul');
// //
// for (let i = 0; i <= arr.length-1; i++) {
//     let li = document.createElement('li');
//     let span = document.createElement('span');
//     span.textContent = arr[i];
//     span.addEventListener('click', func);
//     li.appendChild(span);
//     parent.appendChild(ul);
//     //
//     function func() {
//         let input = document.createElement('input');
//         input.value = span.textContent;
//         span.textContent = '';
//         span.removeEventListener('click', func);
//         input.addEventListener('blur', function() {
//             span.textContent = input.value;
//             span.addEventListener('click', func);
//         })
//         span.appendChild(input)
//     }
//     //
//     let link = document.createElement('a');
//     link.href = '';
//     link.textContent = ' удалить';
//     li.appendChild(link);
//     //
//     link.addEventListener('click', () => {
//         li.remove();
//         event.preventDefault()
//     })

//     let link_remove = document.createElement('a');
//     link_remove.href = '';
//     link_remove.textContent = ' перечеркнуть';
//     li.appendChild(link_remove)

//     link_remove.addEventListener('click', () => {
//         span.classList.toggle('line-through');
//         event.preventDefault()
//     })


//     ul.appendChild(li);
// }
// //
// let inputMain = document.createElement('input');
// parent.appendChild(inputMain);
// let btn = document.createElement('button');
// btn.textContent = 'add';
// parent.appendChild(btn);
// //
// btn.addEventListener('click', function() {
//     let li = document.createElement('li');
//     //
//     let span = document.createElement('span');
//     span.textContent = inputMain.value;
//     inputMain.value = '';
//     li.appendChild(span);
//     //
//     ul.appendChild(li);
//     span.addEventListener('click', function func1() {
//         let input = document.createElement('input');
//         input.value = span.textContent;
//         span.textContent = '';
//         span.removeEventListener('click', func1);
//         input.addEventListener('blur', function() {
//             span.textContent = input.value;
//             span.addEventListener('click', func1);
//         })
//     span.appendChild(input)
//     });
//     //
//     let link = document.createElement('a');
//     link.href = '';
//     link.textContent = 'удалить';
//     li.appendChild(link);
//     link.addEventListener('click', () => {
//         li.remove();
//         event.preventDefault()
//     })

//     let link_remove = document.createElement('a');
//     link_remove.href = '';
//     link_remove.textContent = ' перечеркнуть';
//     li.appendChild(link_remove)

//     link_remove.addEventListener('click', () => {
//         span.classList.toggle('line-through');
//         event.preventDefault()
//     })
// });

//6 Массив объектов и таблица
// let employees = [
// 	{name: 'Ivan', age: 30, salary: 400},
// 	{name: 'Kirill', age: 31, salary: 500},
// 	{name: 'Stepan', age: 32, salary: 600},
// ];
// let table = document.querySelector('#table');
// for (let employee of employees) {
//     let tr = document.createElement('tr');
//     let td1 = document.createElement('td');
//     td1.textContent = employee.name;
//     tr.appendChild(td1);
//     let td2 = document.createElement('td');
//     td2.textContent = employee.age;
//     tr.appendChild(td2);
//     let td3 = document.createElement('td');
//     td3.textContent = employee.salary;
//     tr.appendChild(td3);
//     table.appendChild(tr);
// };
// let tds = document.querySelectorAll('td');
// for (let td of tds) {
//     td.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = td.textContent;
//         td.textContent = '';
//         td.removeEventListener('click', func);
//         td.appendChild(input)
//         input.addEventListener('blur', () => {
//             td.textContent = input.value;
//             td.addEventListener('click', func);
//         })  
//     })
// }

//7 Массив объектов и список
let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let parent = document.querySelector('#parent');
let table = document.createElement('table');
parent.appendChild(table);

for (let i = 0; i <= employees.length-1; i++) {
    let ul = document.createElement('ul');
	let li1 = document.createElement('li');
	li1.textContent = employees[i].name;
	funcLi(li1);
	ul.appendChild(li1);
	let li2 = document.createElement('li');
	li2.textContent = employees[i].age;
	funcLi(li2);
	ul.appendChild(li2);
	let li3 = document.createElement('li');
	li3.textContent = employees[i].salary;
	funcLi(li3);
	ul.appendChild(li3);	
	table.appendChild(ul);
}

let form = document.createElement('form');
parent.appendChild(form);
let input__name = document.createElement('input'); 
form.appendChild(input__name);
let input__age = document.createElement('input'); 
form.appendChild(input__age);
let input__salary = document.createElement('input'); 
form.appendChild(input__salary);
let button = document.createElement('button');
button.textContent = 'add';
parent.appendChild(button);

let text = document.createElement('p');
text.textContent = 'Fill in all the fields';
text.classList.add('hidden', 'color1');
parent.appendChild(text)

button.addEventListener('click', () => {
	if (input__name.value == '' || input__age.value == '' || input__salary.value == '') {
		text.classList.remove('hidden');
	} else {
		let ulNew = document.createElement('ul');
		ulNew.classList.add('ulNew');
		table.appendChild(ulNew);
		let li1 = document.createElement('li');
		li1.textContent = input__name.value;
		ulNew.appendChild(li1);
		funcLi(li1);
		let li2 = document.createElement('li');
		li2.textContent = input__age.value;
		ulNew.appendChild(li2);
		funcLi(li2);
		let li3 = document.createElement('li');
		li3.textContent = input__salary.value;
		ulNew.appendChild(li3);	
		funcLi(li3);
		input__name.value = '';
		input__age.value = '';
		input__salary.value = '';
		text.classList.add('hidden');
	}
})
function funcLi(li) {
	let span = document.createElement('span');
	span.textContent = li.textContent;
	li.textContent = '';
	li.appendChild(span);
	span.addEventListener('click', function func() {
		let input = document.createElement('input');
		input.value = span.textContent;
		span.textContent = '';
		span.removeEventListener('click', func);
		span.appendChild(input);
		input.addEventListener('blur', () => {
		span.textContent = input.value;
		span.addEventListener('click', func);
		})
	})
	let link = document.createElement('a');
	link.href = '#';
	link.textContent = 'delete';
	li.appendChild(link);
	link.addEventListener('click', (event) => {
		li.remove();
		event.preventDefault();
	})
}





















































































