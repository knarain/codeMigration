<?php
// Database connection
$host = 'localhost';
$db   = 'your_db_name';
$user = 'your_db_user';
$pass = 'your_db_password';
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    throw new PDOException($e->getMessage(), (int)$e->getCode());
}

// Encryption key
$key = 'your-32-char-secret-key';

function encrypt($data, $key) {
    $iv = openssl_random_pseudo_bytes(16);
    $encrypted = openssl_encrypt($data, 'AES-256-CBC', $key, 0, $iv);
    return base64_encode($encrypted . '::' . base64_encode($iv));
}
function decrypt($data, $key) {
    list($encrypted_data, $iv) = explode('::', base64_decode($data), 2);
    return openssl_decrypt($encrypted_data, 'AES-256-CBC', $key, 0, base64_decode($iv));
}

// CREATE
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'create') {
    $name = $_POST['name'];
    $email = encrypt($_POST['email'], $key);
    $phone = encrypt($_POST['phone'], $key);
    $stmt = $pdo->prepare('INSERT INTO clients (name, email, phone) VALUES (?, ?, ?)');
    $stmt->execute([$name, $email, $phone]);
    echo 'Client created.';
}
// READ
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id'])) {
    $stmt = $pdo->prepare('SELECT * FROM clients WHERE id = ?');
    $stmt->execute([$_GET['id']]);
    $client = $stmt->fetch();
    if ($client) {
        $client['email'] = decrypt($client['email'], $key);
        $client['phone'] = decrypt($client['phone'], $key);
        echo json_encode($client);
    } else {
        echo 'Client not found.';
    }
}
// UPDATE
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'update') {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $email = encrypt($_POST['email'], $key);
    $phone = encrypt($_POST['phone'], $key);
    $stmt = $pdo->prepare('UPDATE clients SET name = ?, email = ?, phone = ? WHERE id = ?');
    $stmt->execute([$name, $email, $phone, $id]);
    echo 'Client updated.';
}
// DELETE
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'delete') {
    $id = $_POST['id'];
    $stmt = $pdo->prepare('DELETE FROM clients WHERE id = ?');
    $stmt->execute([$id]);
    echo 'Client deleted.';
}
?>
