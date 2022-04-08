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

        // create appointment
        public function createA($data) {
            $this->db->query('SELECT time FROM appointments WHERE time = :time and date = :date');
            $this->db->bind(':time', $data['time']);
            $this->db->bind(':date', $data['date']);
            if($this->db->execute()) {
                if($this->db->rowCount() > 0) {
                    return false;
                } else {
                    $this->db->query('INSERT INTO appointments (patient_id, date, time, description) VALUES (:patient_id, :date, :time, :description)');
                    $this->db->bind(':patient_id', $data['patient_id']);
                    $this->db->bind(':date', $data['date']);
                    $this->db->bind(':time', $data['time']);
                    $this->db->bind(':description', $data['description']);
                    if($this->db->execute()) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }
        
        
        public function getByIdOrDate($id = null, $date = null) {
            if($id != null) {
                $this->db->query('SELECT * FROM patient_appointments WHERE patient_id = :id');
                $this->db->bind(':id', $id);
            } else if($date != null) {
                $this->db->query('SELECT time FROM patient_appointments WHERE date = :date');
                $this->db->bind(':date', $date);
            } else {
                return false;
            }

            if($this->db->execute()) {
                return $this->db->resultSet();
            } else {
                return false;
            }        
        }
    }