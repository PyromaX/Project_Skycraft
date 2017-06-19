<?php
// src/AppBundle/DataFixtures/LoadUserData.php

namespace CoreBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use UserBundle\Entity\User;

class LoadUser extends AbstractFixture implements OrderedFixtureInterface
{
    private $UserTable = [['username'=>'Admin', 'email'=>'admin@test.com'],
        ['username'=>'Modo1', 'email'=>'modo1@test.com'],
        ['username'=>'Modo2', 'email'=>'modo2@test.com'],
        ['username'=>'User1', 'email'=>'user1@test.com'],
        ['username'=>'User2', 'email'=>'user2@test.com'],
        ['username'=>'User3', 'email'=>'user3@test.com'],
        ['username'=>'User4', 'email'=>'user4@test.com'],
];

    public function getOrder()
    {
        return 1; // number in which order to load fixtures
    }

    public function load(ObjectManager $manager)
    {
        for ($i = 0; $i < 7; $i++) {
            $User = new User();
            $User->setUsername($this->UserTable[$i]['username']);
            $User->setEmail($this->UserTable[$i]['email']);
            $User->setPassword('0');
            $User->setSalt('');
            if ($i < 1){
                $User->setRoles(['ROLE_ADMIN']);
            }
            elseif ($i > 0 AND $i < 3){
                $User->setRoles(['ROLE_MODO']);
            }
            else{
                $User->setRoles(['ROLE_USER']);
            }
            $manager->persist($User);
        }
        $manager->flush();
    }
}