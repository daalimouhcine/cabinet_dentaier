<?php

    class Patient extends Database {
        public function __construct() {
            $this->db = new Database();
        }

        public function getAll() {
            $this->db->query('SELECT * FROM patients');
            if($this->db->execute()) {
                return $this->db->resultSet();
            } else {
                return false;
            }
        }

        public function createP($patientData) {
            // Insert into database
            $this->db->query('INSERT INTO patients (id, email, first_name, last_name, birth_date, gender) VALUES (:id, :email, :first_name, :last_name, :birth_date, :gender)');
            // Bind params
            $this->db->bind(':id', $patientData['id']);
            $this->db->bind(':email', $patientData['email']);
            $this->db->bind(':first_name', $patientData['first_name']);
            $this->db->bind(':last_name', $patientData['last_name']);
            $this->db->bind(':birth_date', $patientData['birth_date']);
            $this->db->bind(':gender', $patientData['gender']);
            // Execute the query
            if($this->db->execute()) {
                return true;
            } else {
                return false;
            }
        }
    }

?>