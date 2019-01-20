
function ligar(){
    var ip = $('#txtIp').val(); 
    var porta = $('#txtPorta').val(); 
    atualizarPeso();
    if (ip.length == 13 && porta.length == 4){
     if ($('#btnLigar').val() == 'OFF'){
            $('#btnLigar').removeClass('btn btn-danger');
            $('#btnLigar').addClass('btn btn-primary');
            $('#btnLigar').val('ON');
            $('#conteudo').removeClass('container');
            $('#conteudo').addClass('d-inline p-2 bg-primary text-white');
        }else{
            $('#btnLigar').val('OFF');
            $('#btnLigar').removeClass('btn btn-primary');
            $('#btnLigar').addClass('btn btn-danger');
            $('#conteudo').removeClass('d-inline p-2 bg-primary text-white');
            $('#conteudo').html('');
        }
    }
}

function atualizarPeso() {
    $.ajax({
        type: "POST",
        url: "processar.php",
        data: {
            ip: $('#txtIp').val(),
            porta:$('#txtPorta').val()
        },
        success: function (data) {
            $('#conteudo').html(data);
        }
    });
}
function atualizaPagina() {
        if ($('#btnLigar').val() == 'ON') {
            atualizarPeso();
        }else{
            $('#conteudo').html('');
        }
    }

