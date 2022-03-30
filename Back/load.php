<?php

    echo 'hello from load' . '<br>';

    spl_autoload_register(function($className) {
        require_once 'Config/' . $className . '.php';
    });

    new Core();

?>