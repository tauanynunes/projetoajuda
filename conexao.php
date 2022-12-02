<?php

$servidor = "localhost.3306";
$usuario = "id19946214_tauanynunes";
$senha = "T@uany14072001"; 
$dbname = "id19946214_projecthelpif";

$conexao = mysqli_connect($servidor, $usuario, $senha, $dbname);
if (!$conexao){
    die("Houve um erro:") .mysqli_connect_errno());
}
?>