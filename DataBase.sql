CREATE DATABASE IF NOT EXISTS 'cabinet_dentaire';

CREATE TABLE IF NOT EXISTS 'admin' {
    user_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
},

CREATE TABLE IF NOT EXISTS 'patient' {
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(255) NOT NULL
},

CREATE TABLE IF NOT EXISTS 'appointment' {
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    date_time DATETIME NOT NULL,
    description VARCHAR(255) NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES patient(id),
    ON DELETE CASCADE
},

CREATE VIEW IF NOT EXISTS 'patient_appointment' {
    SELECT patient.*, appointment.* WHERE appointment.id AS appointment_id FROM patient INNER JOIN appointment ON patient.id = appointment.patient_id
}