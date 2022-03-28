CREATE DATABASE IF NOT EXISTS cabinet_dentaire ;

CREATE TABLE IF NOT EXISTS admin (
    user_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
),

CREATE TABLE IF NOT EXISTS patients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(255) NOT NULL
),

CREATE TABLE IF NOT EXISTS appointments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT NOT NULL,
    date_time DATETIME NOT NULL,
    description VARCHAR(255) NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE
),

CREATE VIEW patient_appointments AS SELECT appointments.id AS appointment_id, appointments.date_time, appointments.description , patients.* FROM appointments INNER JOIN patients ON appointments.patient_id = patients.id; 