//protocolo de intercambio
let http=require('http');
//creando servidor mediante http
let server=http.createServer();

//servicio web
function almeida(req,resp){
    resp.writeHead(200,{'content-type':'text/plain'});
    resp.write('Richely Almeida, 21 años, Estudiante de la carrera de Desarrollo de Software, Me gusta la música y todo lo que marea.');
    resp.end();
}

server.on('request',almeida);
server.listen(3000,function(){
    console.log("la solicitud fue realizada mediate el puerto 3000");
});