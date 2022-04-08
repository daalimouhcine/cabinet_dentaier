<?php

    // Set the API for patient to be called
    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json ; charset=utf-8');
    header("Access-Control-Allow-Methods:*"); 
    header("Access-Control-Max-Age: 600");
    header("Access-Control-Allow-Headers:*");
    
    class Appointments extends Controller {

        public function __construct() {
            $this->appointmentModel = $this->model('Appointment');
        }


        public function getAll() {
            echo json_encode($this->appointmentModel->getAll());
        }
 
        // create appointment
        public function create() {
            // get the data from the POST
            $data = json_decode(file_get_contents('php://input'), true);
            // create the appointment
            if($this->appointmentModel->createA($data)) {
                echo json_encode(['message' => 'Appointment created']);
            } else {
                echo json_encode(['message' => 'Appointment not created']);
            }
        }

        public function getByIdOrDate( $data = '' ) {
            if(empty($data)) {
                echo json_encode(['error' => 'No data provided']);
            } else if(str_contains($data, 'patient_')) {
                echo json_encode($this->appointmentModel->getByIdOrDate($data, ''));
            } else {
                echo json_encode($this->appointmentModel->getByIdOrDate('', $data));
            }    
        }

}