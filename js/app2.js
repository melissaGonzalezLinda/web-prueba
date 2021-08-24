let a='Hola esto es un mensaje';
console.log(a);


document.addEventListener('DOMContentLoaded',function(){
    const dat1=document.getElementById('dato1');
    const dat2=document.getElementById('dato2');
    const tab =document.getElementById('tabla');
    const alert =document.getElementById('alert');
    const boto=document.getElementById('add');
    let id=1;
    
    function removeTodo(id){
        document.getElementById(id).remove();
        //console.log(id);
        //document.getElementById(id).remove;
    }
     
    function agregar(){
        if(dat1.value ===''|| dat2.value === ''){
            alert.classList.remove('d-none');
            alert.innerText='Los datos son requeridos';
            return;
        }
        alert.classList.add('d-none');
        const row=tab.insertRow();
        row.setAttribute('id', id++);
        row.innerHTML=`
        <td>${dat1.value}</td>
        <td>${dat2.value}</td>
        <td class="text-center">
            <input type="checkbox">
        </td>
        <td class="text-right">
            <button class="btn btn-warning mb-1">
                Editar
            </button>
        </td>
        `;
        const removeBtn=document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger','mb-1','ml-1');
        removeBtn.innerHTML=('Eliminar');
        removeBtn.onclick=function(e){
            removeTodo(row.getAttribute('id'));
        }
        row.children[3].appendChild(removeBtn);
    }
    boto.onclick=agregar;
});


