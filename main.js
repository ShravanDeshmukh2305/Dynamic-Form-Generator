const labelInputField = document.querySelector('#labelValue');
const form = document.querySelector('#form');
const inputType = document.querySelector('#inputType');
const dropdown = document.querySelector("#inputType")
const final = document.getElementById('Final')

let todoItems = [];

final.addEventListener('click', (F) =>{
    console.log(JSON.stringify(todoItems))
})



const stored = JSON.parse(localStorage.getItem('todoItems'));


dropdown.addEventListener('change', (ev) =>{
    // console.log(ev.currentTarget.value)
    // console.log(ev.target.value)
    if(ev.target.value === 'dropdown'){
       const input = document.createElement("input")
       const input1 = document.createElement("input")
       const input2 = document.createElement("input")
       const del = document.createElement("button");
       

       input.setAttribute("id", "option1")
       input1.setAttribute("id", "option2")
       input2.setAttribute("id", "option3")
       del.setAttribute("id", "btndrop")

       const inputandoptions = document.querySelector('#inputandoptions')
       inputandoptions.appendChild(input)
       inputandoptions.appendChild(input1)
       inputandoptions.appendChild(input2)
       del.innerText = "Delete"
       del.addEventListener('click',(f) =>{
           const div = del.closest("div")
           div.remove();
       })
    }
    else{
            document.getElementById('option1').hidden = true
            document.getElementById('option2').hidden = true
            document.getElementById('option3').hidden = true
    }
} )


labelInputField.addEventListener('keyup',(e)=>{
    const keyPressed = e.key
    

    if(keyPressed === "Enter"){
    //create inputs 
        const type = inputType.value
        const label = labelInputField.value
        
        
        

        const labelInput  = document.createElement("label")
        const div = document.createElement("div");
        div.classList.add("group")

        const del = document.createElement("button");
        del.classList.add("del")
        del.innerText = "Delete"
        del.addEventListener('click',(f) =>{
            const div = del.closest("div")
            div.remove();
        })
        
        

        
        let input = null;

        if(type ==='textarea'){
            input = document.createElement("textarea")
            // todoItems.push({
            //     type : "textarea", label
            // })
        }else{
            input = document.createElement('input')
            // todoItems.push({
            //     type : "input", label
            // })
        }


        if(type === 'dropdown'){
            const div = document.createElement("div")
            const val1 = document.querySelector('#option1').value
            const val2 = document.querySelector('#option2').value
            const val3 = document.querySelector('#option3').value  
            labelInput.innerHTML = label;

            if(val1 === "" || val2 === "" || val3 === ""){
                alert("unable to create Dropdown")
                return;
            }
            

        //Create array of options to be added
        var array = [val1 , val2, val3];

        //Create and append select list
        var selectList = document.createElement("select");
        selectList.id = "mySelect";
        div.appendChild(labelInput)
        form.appendChild(div)
        form.appendChild(selectList);
        form.appendChild(del)

        //Create and append the options
        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.value = array[i];
            option.text = array[i];
            selectList.appendChild(option);
        }
        todoItems.push({input:selectList})
        console.log(todoItems)
        return;
        }


        labelInput.innerHTML = label;
        input.type = type;
        // input.classList.add('form-control');
        div.classList.add("mb-3")


        if(type != 'submit'){
        div.appendChild(labelInput)
        }

        if(type === 'submit'){
            input.classList.add("btn")
            input.classList.add("btn-success")
            input.value = label;
        }

    
        todoItems.push({input})
        console.log(todoItems);
        div.appendChild(input)
        div.appendChild(del)
        
        form.appendChild(div)

        
  
    }   

})


