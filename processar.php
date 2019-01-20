<?php
$ip = $_POST['ip'];
$porta = $_POST['porta'];
echo carregarPeso($ip,$porta);

function carregarPeso($address,$port) {
    $seconds = 3;
    $milliseconds = 5;
    if (empty($address)){
        return 'Favor preecher IP !';
    }elseif (strlen($address) < 13) {
        return 'IP inválido !';
    }elseif (empty ($port)) {
        return 'Favor preecher PORTA !';
    }elseif (strlen($port) < 4) {
        return 'Porta Inválida !';
    } else {
        if (isset($address) and isset($port)) {
            set_time_limit(0);
            $socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
            if ($socket) {
//                        socket_set_option($socket, SOL_SOCKET, SO_SNDTIMEO, array('sec' => $seconds, 'usec' => $milliseconds));
                if (socket_connect($socket, $address, $port)){
                    return 'PESO :' . socket_read($socket, 20); 
                }else{
                    socket_close($socket);
                }
            } else {
                return '';
            }
        }
    }
}

