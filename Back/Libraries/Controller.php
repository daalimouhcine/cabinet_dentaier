<?php

    class Controller {
        // load Model
        public function model($model) {
            // Require model fille
            require_once '../Models/' . $model . '.php';
            // Instantiate model class
            return new $model();
        }
    }


?>