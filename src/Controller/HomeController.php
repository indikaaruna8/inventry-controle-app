<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class HomeController extends AbstractController
{
    #[Route('/home', name: 'app_home')]
    public function index(): Response
    {   
        return $this->render('home/index.html.twig', [
           "page_title" =>  "Wellcome",
           "user" => (object)[
                "name" => "",
                "isLoggedIn" => true
            ]
        ]);
    }

    #[Route('/home2', name: 'app_home2')]
    public function index2(): Response
    {
        return $this->render('home/index2.html.twig', [
           "page_title" =>  "Wellcome",
           "user" => (object)["name" => "", "isLoggedIn" => true]
        ]);
    }
}
