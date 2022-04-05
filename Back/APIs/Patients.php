<?php

    require_once '../helpers/sendEmail.php';

    // Set the API for patient to be called
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json ; charset=utf-8');
    header("Access-Control-Allow-Methods: *"); 
    header("Access-Control-Max-Age: 600");
    header("Access-Control-Allow-Headers: *");

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
            $json = file_get_contents('php://input');
            $patientData = json_decode($json, true);
            $patientData = [
                'id' =>  uniqid('patient_'),
                'email' => $patientData['email'],
                'first_name' => $patientData['first_name'],
                'last_name' => $patientData['last_name'],
                'birth_date' => $patientData['birth_date'],
                'gender' => $patientData['gender']
            ];
            // Create patient
            if($this->patientModel->createP($patientData)) {
                echo json_encode(['id' => $patientData['id']]);
                // Send email
                sendEmail($patientData);

            } else {
                echo json_encode(['message' => 'Patient not created']);
            }

        }



    }