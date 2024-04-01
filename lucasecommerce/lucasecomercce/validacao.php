<?php



$pdo = new PDO("mysql:host=localhost;dbname=clientes","root","");

    if(isset($_POST['acao'])){
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $mensagem = $_POST['mensagem'];
    
        $enviar = $pdo->prepare("INSERT INTO clientes (nome, email, mensagem) VALUES (?,?,?)");
        
        $enviar->execute(array($nome, $email, $mensagem));
        echo "form enviado com sucesso!";
    }

?>   