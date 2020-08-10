// --> Servidor <--
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

// --> Configurar nunjucks (Templete engine) <--
const nunjucks =require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// --> Inicio e configuração dp servidor <--
server
// --> Receber dados do req.body <-- 
.use(express.urlencoded({ extended:true }))
// --> Configuração de arquivos estaticos (css, script, imagens) <-- 
.use(express.static("public"))

// --> Rotas da aplicação <-- 
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// --> Start do servidor <--
.listen(5500)