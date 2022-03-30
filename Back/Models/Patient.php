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
            $this->db->query('INSERT INTO patients (id, user_name, email, first_name, last_name, birth_date) VALUES (:id, :user_name, :email, :first_name, :last_name, :birth_date)');

    }

?>