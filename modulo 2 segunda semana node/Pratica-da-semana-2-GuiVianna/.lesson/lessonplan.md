Códificação
--------------------------
index.js
-----------------------
const express = require('express')
const app = express()
const porta = 443

app.get('/', function(req,res){
  res.sendFile(__dirname + '/home.html')
})
app.get('/p1', function(req,res){
  res.sendFile(__dirname + '/p1.html')
})
app.get('/p2', function(req,res){
  res.sendFile(__dirname + '/p2.html')
})
app.get('/p3', function(req,res){
  res.sendFile(__dirname + '/p3.html')
})
app.listen(porta, ()=> {console.log('Servidor rodando')})
----------------------

home.html
<html lang="pt-br">
<head>
<title>Página Html</title>
</head>
<body>
<h1>Página inicial da Empresa</h1>
  <a href="/p1">Ir para Produto 1 </a><br>
  <a href="/p2">Ir para Produto 2 </a><br>
  <a href="/p3">Ir para Produto 3 </a><br>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at dolor lectus. Quisque sed porttitor augue, eget mollis nibh. Curabitur diam justo, rutrum et pulvinar vitae, blandit at mauris. In hac habitasse platea dictumst. Proin sodales sit amet purus ut gravida. Curabitur vulputate mollis metus, ac aliquet mi iaculis et. Fusce semper mauris eu consectetur pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla accumsan ullamcorper arcu, rhoncus mollis massa efficitur vel. In sed iaculis sem, nec consequat ligula. Phasellus malesuada egestas velit, ut posuere justo porta a. Nullam eu eleifend dui. Sed ut risus velit. Aenean id dignissim tellus.</p>

<p>Vivamus fringilla lobortis velit, ut tempor diam tempor at. Vestibulum sit amet nisi neque. Nunc faucibus semper nisi nec tempor. Nam tristique, urna sed hendrerit cursus, odio dui rutrum nibh, sit amet euismod urna orci eu nunc. Aenean aliquam rutrum ex eu tempor. Maecenas sed lectus mauris. Aliquam erat volutpat. Nam risus diam, semper non vulputate tempus, sodales ut massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam sit amet blandit neque. Ut risus lectus, commodo sit amet interdum vel, mollis ac turpis. Vestibulum ac viverra urna. Quisque sit amet metus risus. Maecenas rhoncus id enim vitae ullamcorper.</p>

</body>
</html>

p1, p2 e p3.html
<html lang="pt-br">
<head>
<title>Página Html</title>
</head>
<body>
<h1>Produto 3</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar ligula id magna suscipit dignissim. Praesent tincidunt, dui ac finibus lobortis, velit dolor fringilla sapien, id tempor massa orci at est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis semper suscipit. Quisque posuere sagittis lectus sed sodales.</p>
</body>
</html>