INSERT INTO users (username, password, role) VALUES
('admin', '$2y$10$abcdefghijklmnopqrstuv', 'admin'),
('rashmi', '$2y$10$wxyzabcdefghijklmnopqr', 'editor'),
('john', '$2y$10$1234567890abcdefgHIJKL', 'viewer');
-- Passwords are bcrypt hashes, replace with real hashes for production
