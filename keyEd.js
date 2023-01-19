            let classSetA = ""
            let classSetB = ""

    function settitle(title){
      for(var i=0; i<title.length; i++){     
            const question = title[i][0]
            const typeElm = title[i][1]
            const idElm = title[i][2]
            const setRequired = title[i][3] 
            const valElm = title[i][4]   
            var valArr = new Array();
            valArr = valElm.split(","); 

            const divRow = document.createElement("div");
            formElm.appendChild(divRow)
            divRow.classList.add("col-md-12")


          switch (true) {
            case typeElm == "text" || typeElm == "date":           
              setElmInputText(question,typeElm,idElm,setRequired,divRow,formElm)  
              break;
            case typeElm == "radio":
              setElmInputRadio(question,typeElm,idElm,setRequired,divRow,formElm,valArr)                
              break;
            case typeElm == "checkbox":
              setElmInputCheckbox(question,typeElm,idElm,setRequired,divRow,formElm,valArr)                
              break;   
            case typeElm == "dropdown":
              setElmInputSelect(question,typeElm,idElm,setRequired,divRow,formElm,valArr)                
              break;   
            case typeElm == "file":
              setElmInputFile(question,typeElm,idElm,setRequired,divRow,formElm,valArr)                
              break;                          
            default:            
              setElmInputText(question,typeElm,idElm,setRequired,divRow,formElm,valArr)   
              break;                         
          }
      }
      setButtonSubmit()   
    }



  function setElmInputText(question,typeElm,idElm,setRequired,divRow,formElm) {
    const label = document.createElement("label");
          divRow.appendChild(label);
          label.classList.add("form-label")
          label.innerHTML  = question
          label.htmlFor = `${idElm}`; 
        const input = document.createElement("input");
          divRow.appendChild(input);
          input.id = `${idElm}`;
          input.name = `${idElm}`;
          input.type = `${typeElm}`;     
          input.required = setRequired == "TRUE" ? true:false   

          classSetA = "text-input"  
          classSetB = "form-control"
          input.classList.add(classSetA);         
          input.classList.add(classSetB);

  }

  function setElmInputRadio(question,typeElm,idElm,setRequired,divRow,formElm,valArr){
      const divRowTag = document.createElement("div");
          divRow.appendChild(divRowTag);
          divRowTag.classList.add("row")  
      const labelTag = document.createElement("label");   
          divRowTag.appendChild(labelTag);        
          labelTag.innerHTML = question
          labelTag.classList.add("form-label") 
      const divRowTag2 = document.createElement("div");          
          divRowTag.appendChild(divRowTag2);        

    for(var i=0; i<valArr.length; i++){                 
          const divRadio = document.createElement("div");
          divRowTag2.appendChild(divRadio);
          divRadio.classList.add("form-check")
          divRadio.classList.add("form-check-inline")
      const label1 = document.createElement("label");
            divRadio.appendChild(label1);
            label1.classList.add("form-label")
            label1.innerHTML  = valArr[i]   
            label1.htmlFor = `${idElm}${i}`;

      const input1 = document.createElement("input");
            divRadio.appendChild(input1);
            input1.id = `${idElm}${i}`;
            input1.name = `${idElm}`;
            input1.type = `${typeElm}`;              
            input1.classList.add("form-check-input");  
            input1.value = valArr[i] 
              
    }
  }     

  function setElmInputCheckbox(question,typeElm,idElm,setRequired,divRow,formElm,valArr){

      const divRowTag = document.createElement("div");
          divRow.appendChild(divRowTag);
          divRowTag.classList.add("row")  
      const labelTag = document.createElement("label");   
          divRowTag.appendChild(labelTag);        
          labelTag.innerHTML = question
          labelTag.classList.add("form-label") 
      const divRowTag2 = document.createElement("div");          
          divRowTag.appendChild(divRowTag2);        

    for(var i=0; i<valArr.length; i++){                 
          const divRadio = document.createElement("div");
          divRowTag2.appendChild(divRadio);
          divRadio.classList.add("form-check")
          divRadio.classList.add("form-check-inline")
      const label1 = document.createElement("label");
            divRadio.appendChild(label1);
            label1.classList.add("form-label")
            label1.innerHTML  = valArr[i]   
            label1.htmlFor = `${idElm}${i}`;

      const input1 = document.createElement("input");
            divRadio.appendChild(input1);
            input1.id = `${idElm}${i}`;
            input1.name = `${idElm}${i}`;
            input1.type = `${typeElm}`;              
            input1.classList.add("form-check-input");  
            input1.value = valArr[i] 
              
    }
  }              

  function setElmInputSelect(question,typeElm,idElm,setRequired,divRow,formElm,valArr){

    const label = document.createElement("label");
          divRow.appendChild(label);
          label.classList.add("form-label")
          label.innerHTML  = question   
          label.htmlFor = `${idElm}`;            
    const selectElm = document.createElement("select")
          divRow.appendChild(selectElm);
          selectElm.id =  `${idElm}`;
          selectElm.name = `${idElm}`;
          selectElm.type = `${typeElm}`;  
          selectElm.classList.add("form-select");
    const optionShow = document.createElement("option")
          optionShow.innerHTML = "เลือกรายการ"
          optionShow.selected = "selected"
          

    for(var i=0; i<valArr.length; i++){ 
      const optionIn = document.createElement("option")
            optionIn.innerHTML = valArr[i]
            selectElm.appendChild(optionIn)
            selectElm.value = valArr[i]

    }    
    selectElm.appendChild(optionShow)                      

  }

  function setElmInputFile(question,typeElm,idElm,setRequired,divRow,formElm,valArr){
    const label = document.createElement("label");
          divRow.appendChild(label);
          label.classList.add("form-label")
          label.innerHTML  = question   
          label.htmlFor = `${idElm}`;  
    const inputFile = document.createElement("input");  
          divRow.appendChild(inputFile);
          inputFile.classList.add("form-control")
          inputFile.type  = typeElm   
          inputFile.id = `${idElm}`;
                

console.log("dd")
    const allElmFiled = document.querySelectorAll('input[type="file"]');
    console.log(allElmFiled)
    
    allElmFiled.forEach((userItem) => {
    userItem.addEventListener('change',function(e){   
      var x = e.target
      let files = []
            for(var i=0; i<x.files.length; i++){
         files.push(x.files[i])
      }

      files.forEach((file,i)=>{
        let reader = new FileReader()
        reader.onloadend = (e)=>{
          uploadFile[x.getAttribute('id')+(i+1)]={
            data:e.target.result.split(',')[1],
            name:file.name,
            type:file.type
          }
          console.log("dddd",uploadFile)
        }
        
        reader.readAsDataURL(file)
       })
      })
});

  }

          // <div class="col-12 text-center">
          //   <button type="submit" class="btn btn-outline-primary">บันทึกข้อมูล</button>
          // </div>

function setButtonSubmit(){
    const divRow = document.createElement("div");
          formElm.appendChild(divRow)
          divRow.classList.add("col-md-12")
          divRow.classList.add("text-center")


    const button = document.createElement("button");  
          divRow.appendChild(button);
          button.classList.add("btn")
          button.classList.add("btn-outline-primary")
          button.type  = "submit" 
          button.innerHTML = "บันทึกข้อมูล"  
}          




function getAllElmForm(e) {
  event.preventDefault();
  // ตรวจสอบข้อมูลว่างก่อนบันทึกลงชีต
  var form = document.getElementById("user_form")
  // if (!form.checkValidity()) {
  //   return console.log("a")
  // }
  
  var obj = {}
      var data = new FormData();  // สร้างออปเจกต์เก็บ
      // กำหนดเงื่อนไขก่อนเก็บข้อมูลให้ยกเว้น submit และ input
      var all = document.querySelectorAll("#user_form input, #user_form select, #user_form textarea");
      
      for (let field of all) {
        if (field.type != "button" && field.type != "submit") {
          /** กำหนดเงื่อนไขค่าที่เป็น type radio */           
          if (field.type=="radio" || field.type=="checkbox") { 
            if (field.checked) { data.append(field.name, field.value); }
          }          
          else { data.append(field.name, field.value); } /** กำหนดเงื่อนไขค่าที่เป็นชนิดอื่นๆ */
        }
      }
      for (let [key, val] of data.entries()) { 
        // console.log(key, val); 
        obj[key] = val
    }
      const lengthUpload = Object.keys(uploadFile).length;
        if(lengthUpload<1){
          obj.astatus = "File Not Found"
        }else{
          obj.astatus = "File Ok"
        }
        console.log(obj.status)         
          obj.uploadFile = uploadFile
          google.script.run.withSuccessHandler(successData).appendToSheet(obj);    
}

  function successData(txt){
    console.log(txt)
    document.getElementById("user_form").reset()
    document.getElementsByClassName('needs-validation')[0].classList.remove("was-validated")
         Swal.fire(
            'Save Data Success',
            "บันทึกข้อมูลเรียบร้อย",
            'success'
          )   
  } 
