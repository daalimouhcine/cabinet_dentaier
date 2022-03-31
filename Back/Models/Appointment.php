<?php

    // Set the API for patient to be called
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    class Appointment {

        public function __construct() {
            $this->db = new Database();
        }

        public function getAll() {
            $this->db->query('SELECT * FROM appointments');
            if($this->db->execute()) {
                return $this->db->resultSet();
            } else {
                return false;
            }
        }

        public function createA($appointmentData) {
            // Insert into database
            $this->db->query('INSERT INTO appointments (patient_id, date_time, description) VALUES (:patient_id, :date_time, :description)');
            // Bind params
            $this->db->bind(':patient_id', $appointmentData['patient_id']);
            $this->db->bind(':date_time', $appointmentData['date_time']);
            $this->db->bind(':description', $appointmentData['description']);


            // Execute the query
            if($this->db->execute()) {
                return true;
            } else {
                return false;
            }
        }



        
    }