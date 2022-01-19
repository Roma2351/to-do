let addText = document.getElementById('inp');
let but = document.getElementById('addLi');
let todo = document.getElementById('ul1');

but.addEventListener('click',()=> {
    if (addText === '') 
    return 
    createDeleteElement(addText.value)
    addText.value = '';
} ); 

function createDeleteElement(value) {
    const li = document.createElement('li');
    li.className = 'li';
    li.textContent = value;
    const btn = document.createElement('button');
    btn.className = 'button';
    btn.textContent = 'Удалить';
    li.append(btn);
    btn.addEventListener('click',()=>{
        todo.removeChild(li);
    })
    li.addEventListener('click',()=>{
        li.classList.toggle('li-active');
    })
    todo.append(li);
};
 

