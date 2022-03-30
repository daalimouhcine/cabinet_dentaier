<?php

    // Set the API for patient to be called
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    class Patients extends Controller {
        public function __construct() {
            $this->patientModel = $this->model('Patient');
        }

        public function getAll() {
            echo json_encode($this->patientModel->getAll());
        }
        public function create() {
            $patientData = [
                'id' =>  uniqid('patient_'),
                'user_name' => $_POST['user_name'],
                'email' => $_POST['email'],
                'first_name' => $_POST['first_name'],
                'last_name' => $_POST['last_name'],
                'birth_date' => $_POST['birth_date'],
                'gender' => $_POST['gender']
            ];
            $this->patientModel->createP($patientData);

        }
    }