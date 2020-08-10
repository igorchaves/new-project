// Procurar o Botão 
document.querySelector("#add-time")
//Qaundo clicar no botão 
.addEventListener('click', cloneField)


//Executar uma ação 
function cloneField(){
  //Duplicar campos, Que Campos?
  const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

  //pegar os campos. Que campos? 
  const fields = newFieldContainer.querySelectorAll('input')

  //para cada campo, limpar 
  fields.forEach(function(field){
    // pegar o field do momemnto e limpar ele
    field.value=""
  })

  //Colocar na pagina, Onde ?? 
  document.querySelector("#schedule-items").appendChild (newFieldContainer)
}
  