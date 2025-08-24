CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT,
    message TEXT,
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE SET NULL
);
