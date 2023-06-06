<?php

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;

// Retrieve the Doctrine EntityManager
$entityManager = EntityManagerInterface::class;

// Get the UserRepository
$userRepository = $entityManager->getRepository(User::class);

// Retrieve all user IDs
$userIDs = $userRepository->createQueryBuilder('u')
    ->select('u.id')
    ->getQuery()
    ->getResult();

// Output the user IDs
foreach ($userIDs as $userID) {
    echo "User ID: {$userID['id']} <br>";
}
