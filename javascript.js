var id=0;
function FuncCreate(inputText,selectColor,selectMarker) { 
    if(document.getElementById('inputText').value !=""){
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inputText));
        li.style.color = selectColor;
        li.setAttribute("id", id);   
        li.setAttribute("type", selectMarker);
        ul.appendChild(li);
        document.getElementById('inputText').value="";
    }    
    else {
        alert("Ошибка: нельзя оставлять поле пустым!");
    }
}

var activeIndex ="inputText";
function Select(event){
    var index = event.target;
    if(index.id!=activeIndex){
        btnCreate.disabled = true;
        btnChange.disabled = false;
        btnDelete.disabled = false;
        index.style.border = "1px solid blue";
        document.getElementById(activeIndex).style.border = null;
        document.getElementById('inputText').value= index.innerText;
        document.getElementById("selectColor").value = index.style.color;
        document.getElementById("selectMarker").value = index.type
        activeIndex = index.id;
    }
    else{
        btnCreate.disabled = false;
        btnChange.disabled = true;
        btnDelete.disabled = true;
        index.style.border = null;
        activeIndex = "inputText";
        document.getElementById('inputText').value ="";
    }
}
function Change(){
    if(document.getElementById('inputText').value !=""){
        var result = confirm("Вы уверены, что хотите изменить '"+document.getElementById(activeIndex).innerText+
                             "' на '"+document.getElementById('inputText').value+"'?");
        if(result){
            var elem = document.getElementById(activeIndex);
            elem.innerText = document.getElementById('inputText').value;
            elem.style.color = document.getElementById("selectColor").value;
            elem.type = document.getElementById("selectMarker").value;        
        }
    }
    else{
        alert("Ошибка: нельзя оставлять поле пустым!");
    }
}
function Delete(){
    var result = confirm("Вы уверены, что хотите удалить '"+document.getElementById(activeIndex).innerText+"'?");
    if(result) {
        var elem = document.getElementById(activeIndex);
        
        var move = 1;
        var timer=setInterval(frame,5);
        function frame(){ 
            move+=1;
            elem.style.marginLeft=move+"%";
            if(move==100){
                clearInterval(timer);              
                elem.parentNode.removeChild(elem);
            }
        }
        
        activeIndex = "inputText";
        btnCreate.disabled = false;
        btnChange.disabled = true;
        btnDelete.disabled = true;
        document.getElementById('inputText').value ="";
        
    }
}