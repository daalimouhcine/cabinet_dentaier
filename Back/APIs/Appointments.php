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
 
        public function create() {
            // Get data from the request
            $patientData = [
                'patient_id' => $_POST['patient_id'],
                'date_time' => $_POST['date_time'],
                'description' => $_POST['description']
            ];
            
            $this->appointmentModel->createA($patientData);
            
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