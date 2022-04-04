<?php

    // Set the API for patient to be called
    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json ; charset=utf-8');
    header("Access-Control-Allow-Methods:*"); 
    header("Access-Control-Max-Age: 600");
    header("Access-Control-Allow-Headers:*");

    class Patients extends Controller {

        public function __construct() {
            $this->patientModel = $this->model('Patient');
        }


        public function getAll() {
            echo json_encode($this->patientModel->getAll());
        }


        public function getOne($email) {
            echo json_encode($this->patientModel->getOne($email));
        }


        public function create() {
            // Get data from the request
            $patientData = [
                'id' =>  uniqid('patient_'),
                'email' => $_POST['email'],
                'first_name' => $_POST['first_name'],
                'last_name' => $_POST['last_name'],
                'birth_date' => $_POST['birth_date'],
                'gender' => $_POST['gender']
            ];
            
            $this->patientModel->createP($patientData);
            
        }



    }