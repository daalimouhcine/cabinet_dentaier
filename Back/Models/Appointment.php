<?php

    // Set the API for patient to be called
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    class Appointment {

        public function __construct() {
            $this->db = new Database();
        }

        // Get all appointments by patient id
        public function getAll($patientId) {
            $this->db->query('SELECT * FROM patient_appointments WHERE patient_id = :patient_id');
            $this->db->bind(':patient_id', $patientId);
            $results = $this->db->resultSet();
            return $results;
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


        public function updateA($data) {
            $this->db->query('UPDATE appointments SET date = :date, time = :time, description = :description WHERE id = :appointmentId');
            $this->db->bind(':date', $data['date']);
            $this->db->bind(':time', $data['time']);
            $this->db->bind(':description', $data['description']);
            $this->db->bind(':appointmentId', $data['appointmentId']);

            if($this->db->execute()) {
                return true;
            } else {
                return false;
            }
        }


        public function deleteA($appointmentId, $patientId) {
            $this->db->query('DELETE FROM appointments WHERE id = :appointment_id AND patient_id = :patient_id');
            $this->db->bind(':appointment_id', $appointmentId);
            $this->db->bind(':patient_id', $patientId);
            if($this->db->execute()) {
                return true;
            } else {
                return false;
            }
        }
    }